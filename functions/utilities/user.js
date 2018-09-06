const firebase = require('firebase-admin');
const cookieParser = require('cookie-parser')();
const PAGES = require('../build/pages.json');
const BADGES = require('../build/badges.json');


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

function getUserData(uid) {
  return firebase.database().ref('users/' + uid).once('value').then(user => {
    const data = user.toJSON();

    if (!data.answers) data.answers = {};
    data.badges = data.badges ? data.badges.split(',') : [];
    data.uid = uid;

    if (data.level) {
      // For students
      const scores = PAGES[data.level].map(p => (data.answers[p.url] || {}).score || 0);
      data.points = scores.reduce((a, b) => a + b, 0);
      data.visibleBadges = BADGES[data.level]
          .filter(b => (data.points >= b.score)).reverse().slice(0, 4);
    } else {
      // For teachers
      data.points = 0;
      data.visibleBadges = [];
    }

    return data;
  });
}

function getActiveUser(req, res, next) {
  getIdTokenFromRequest(req, res)
      .then(idToken => firebase.auth().verifyIdToken(idToken))
      .then(decodedIdToken => getUserData(decodedIdToken.uid))
      .then(user => (req.user = user))
      .catch(error => console.error(error))
      .then(() => next());
}

async function getAllStudents(teacherCode) {
  const fbDatabase = firebase.database();
  const students = await fbDatabase.ref('users').orderByChild('teacherCode').equalTo(teacherCode).once('value');
  return students.toJSON() || {};
}

exports.getUserData = getUserData;
exports.getActiveUser = getActiveUser;
exports.getAllStudents = getAllStudents;
