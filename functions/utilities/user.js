const firebase = require('firebase-admin');
const cookieParser = require('cookie-parser')();
const PAGES = require('../build/pages.json');
const BADGES = require('../build/badges.json');

const LEVELS = ['year7', 'year8', 'year9', 'year10', 'year11'];

const userDB = firebase.firestore().collection('users');

function getIdTokenFromRequest(req, res) {
  return new Promise((resolve, reject) => {
    cookieParser(req, res, () => {
      if (req.cookies && req.cookies.__session) {
        resolve(req.cookies.__session);
      } else {
        reject();
      }
    });
  });
}

function getSidebarLevels(data) {
  if(['year5', 'year6'].includes(data.level)) {
    return [LEVELS[0]];
  }
  
  if(data.code || ['year12', 'year13', 'graduated'].includes(data.level)) {
    return LEVELS;
  }

  return LEVELS.slice(0, +data.level.slice(4) - 6);
}

async function getUserData(uid) {
  const doc = await userDB.doc(uid).get();
  if (!doc.exists) throw new Error('User without data: ' + uid);
  const data = doc.data();

  if (!data.level) data.level = 'year8';
  if (!data.answers) data.answers = {};
  data.badges = data.badges ? data.badges.split(',') : [];
  data.uid = uid;

  data.allPoints = {};
  for (const l of LEVELS) {
    const scores = PAGES[l].map(p => (data.answers[p.url] || {}).score * (p.scoreFactor || 1) || 0);
    data.allPoints[l] = scores.reduce((a, b) => a + b, 0);
  }

  data.points = data.level ? (data.allPoints[data.level] || 0) : 0;
  data.visibleBadges = data.level ? (BADGES[data.level] || [])
      .filter(b => (data.points >= b.score)).reverse().slice(0, 4) : [];

  data.sidebarLevels = getSidebarLevels(data)

  data.displayedLevel = data.level;


  return data;
}

function getActiveUser(req, res, next) {
  getIdTokenFromRequest(req, res)
      .then(idToken => firebase.auth().verifyIdToken(idToken))
      .then(decodedIdToken => getUserData(decodedIdToken.uid))
      .then(user => (req.user = user))
      .catch(error => console.error(error))
      .then(() => next());
}

async function getUserFromToken(idToken) {
  const decodedIdToken = await firebase.auth().verifyIdToken(idToken);
  const userData = await getUserData(decodedIdToken.uid);
  return {
    ...userData,
    accountType: decodedIdToken.account_type
  }
}

async function getAllStudents(code) {
  const query = await userDB.where('teacherCode', 'array-contains', code).get();
  return query.docs.map(d => ({
    ...d.data(),
    uid: d.id,
  }));
}

exports.getUserData = getUserData;
exports.getActiveUser = getActiveUser;
exports.getUserFromToken = getUserFromToken;
exports.getAllStudents = getAllStudents;
