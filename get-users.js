// This file can be used to generate a table of scores from the Firebase FB.
// Export the entire Firebase DB as json, and place it as
// 'parallel-cf800-export.json' into the root of this directory.


const fs = require('fs');
const fb = require('firebase-admin');
const serviceAccount = require('./private/service-account.json');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

fb.database().ref('users').once('value').then(data => {
  const users = data.toJSON();
  const accounts = JSON.parse(fs.readFileSync('/tmp/parallel-users.json')).users;

  let teachers = 'email,first,last,schoolName,phoneNumber,postCode,country\n';
  let students = 'email,first,last,level,birthYear,schoolName,country,guardianEmail\n';

  for (let a of accounts) {
    const u = users[a.localId];
    if (!u) continue;
    if (u.code) {
      teachers += `${a.email},${u.first},${u.last},${u.schoolName||''},${u.phoneNumber||''},${u.postCode||''},${u.country||''}\n`;
    } else {
      students += `${a.email},${u.first},${u.last},${u.level||''},${u.birthYear||''},${u.schoolName||''},${u.country||''},${u.guardianEmail||''}\n`;
    }
  }

  fs.writeFileSync(`./private/teachers.csv`, teachers);
  fs.writeFileSync(`./private/students.csv`, students);

  process.exit();
});
