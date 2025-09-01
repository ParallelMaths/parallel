const path = require('path');
const fs = require('fs');
const fb = require('firebase-admin');
const initializeFirebase = require("./utils/initializeFirebase");
initializeFirebase();

const STUDENTS = [
  "aaspland@sjl.herts.sch.uk"
];

const file = path.join(__dirname, `../private/tmp-users.json`);
const accounts = JSON.parse(fs.readFileSync(file)).users;

async function makeStudent(email) {
  const a = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
  if (!a) return console.error('Could not find ' + email);

  return fb.firestore().collection('users').doc(a.localId).update({
    schoolName: null,
    code: null,
    level: 'year7',
    birthYear: 2000,
    teacherCode: null
  }).catch(error => console.error(error + ',' + email));
}

const promises = STUDENTS.map(makeStudent);
Promise.all(promises).then(() => process.exit());
