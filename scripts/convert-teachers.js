const path = require('path');
const fs = require('fs');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

const TEACHERS = [
  "ws@oakham.rutland.sch.uk",
  "teacher@email.com"
];

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const file = path.join(__dirname, `../private/tmp-users.json`);
const accounts = JSON.parse(fs.readFileSync(file)).users;

async function makeTeacher(email) {
  const a = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
  if (!a) return console.error('Could not find ' + email);

  return fb.database().ref('users/' + a.localId).update({
    schoolName: '<<SCHOOL NAME>>',
    code: 'xxxxx'.replace(/x/g, () => ((Math.random()*36)%36 | 0).toString(36)),
    level: null,
    birthYear: null,
    teacherCode: null
  }).catch(error => console.error(error + ',' + email));
}

const promises = TEACHERS.map(makeTeacher);
Promise.all(promises).then(() => process.exit());
