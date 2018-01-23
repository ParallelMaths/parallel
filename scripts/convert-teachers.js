// This file can be used to generate a table of scores from the Firebase FB.
// Export the entire Firebase DB as json, and place it as
// 'parallel-cf800-export.json' into the root of this directory.


const fs = require('fs');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

const TEACHERS = [
  // ADD EMAIL ADDRESSES HERE
  "test@test.com"
];

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const accounts = JSON.parse(fs.readFileSync('/tmp/parallel-users.json')).users;

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
