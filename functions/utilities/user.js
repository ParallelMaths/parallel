const firebase = require('firebase-admin');
const cookieParser = require('cookie-parser')();
const PAGES = require('../build/pages.json');

const LEVELS = ['year6', 'year7', 'year8', 'year9', 'year10', 'year11'];

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
  if(['year5'].includes(data.level)) {
    return [LEVELS[0]];
  }
  
  if(data.code || ['year12', 'year13', 'graduated'].includes(data.level)) {
    return LEVELS;
  }

  return LEVELS.slice(0, +data.level.slice(4) - 5);
}

async function getUserData(uid) {
  const doc = await userDB.doc(uid).get();
  if (!doc.exists) throw new Error('User without data: ' + uid);
  const data = doc.data();

  if (!data.level) data.level = 'year8';
  if (!data.answers) data.answers = {};
  data.uid = uid;

  data.allPoints = {};
  for (const l of LEVELS) {
    const scores = PAGES[l].map(p => (data.answers[p.url] || {}).score * (p.scoreFactor || 1) || 0);
    data.allPoints[l] = scores.reduce((a, b) => a + b, 0);
  }

  data.points = data.level ? (data.allPoints[data.level] || 0) : 0;

  data.sidebarLevels = getSidebarLevels(data)

  data.displayedLevel = data.level;

  return data;
}

async function getActiveUser(req, res, next) {
  try {
    const idToken = await getIdTokenFromRequest(req, res);
    const decodedIdToken = await firebase.auth().verifyIdToken(idToken);
    const user = await getUserData(decodedIdToken.uid);
    
    req.user = {
      ...user,
      email: decodedIdToken.email,
      ...getPrivacyState(decodedIdToken.email),
    }

    console.log('req.user', req.user)
  } catch (error) {
    console.error(error)
  }

  next();
}

async function getUserAuthByEmail(email) {
  return firebase.auth().getUserByEmail(email).catch(() => {
    return null;
  })
}

const getPrivacyState = (email) => {
  if (email === 'testdelay@mcmill.co.uk') {
    return {
      privacyMode: 'delay',
    }
  }

  if (email === 'testblock@mcmill.co.uk') {
    return {
      privacyMode: 'block',
    }
  }

  return {};
}

async function getUserFromToken(idToken) {
  const decodedIdToken = await firebase.auth().verifyIdToken(idToken);
  const userData = await getUserData(decodedIdToken.uid);
  return {
    ...userData,
    email: decodedIdToken.email || null,
    accountType: decodedIdToken.account_type || null,
    euclidAccountType: decodedIdToken.euclid_type || null,
    ...getPrivacyState(decodedIdToken.email),
  }
}

async function getAllStudents(code) {
  const query = await userDB.where('teacherCode', 'array-contains-any', [code, ` ${code}`, `${code} `, `${code}  `]).get();
  return query.docs.map(d => ({
    ...d.data(),
    uid: d.id,
  }));
}

exports.getUserData = getUserData;
exports.getActiveUser = getActiveUser;
exports.getUserFromToken = getUserFromToken;
exports.getIdTokenFromRequest = getIdTokenFromRequest;
exports.getAllStudents = getAllStudents;
exports.getUserAuthByEmail = getUserAuthByEmail;
