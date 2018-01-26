const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

fb.database().ref('users').once('value').then(data => {
  const users = data.toJSON();
  const accounts = JSON.parse(fs.readFileSync('/tmp/parallel-users.json')).users;

  let teachers = 'email,first,last,schoolName,phoneNumber,postCode,country,teacherCode\n';
  let students = 'email,first,last,level,birthYear,schoolName,country,teacherCode,guardianEmail\n';

  for (let a of accounts) {
    const u = users[a.localId];
    if (!u) continue;
    if (u.code) {
      teachers += `${a.email},${u.first},${u.last},"${u.schoolName||''}",${u.phoneNumber||''},${u.postCode||''},${u.country||''},${u.code||''}\n`;
    } else {
      students += `${a.email},${u.first},${u.last},${u.level||''},${u.birthYear||''},"${u.schoolName||''}",${u.country||''},${u.teacherCode||''},${u.guardianEmail||''}\n`;
    }
  }

  fs.writeFileSync(path.join(__dirname, `../private/teachers.csv`), teachers);
  fs.writeFileSync(path.join(__dirname, `../private/students.csv`), students);

  process.exit();
});
