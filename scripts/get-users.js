const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

const loadAllUserData = async (limit, offset, users) => {
  const newUsers = await fb.firestore().collection('users').offset(offset).limit(limit).get().then(data => 
    data.docs.reduce((acc, doc) => {
    acc[doc.id] = doc.data();
    return acc;
  }, {}));

  const newUserCount = Object.keys(newUsers).length;

  if (Object.keys(newUsers).length > 1) {
    console.log('Found', newUserCount, 'users');
    return loadAllUserData(limit, offset + limit, {...users, ...newUsers})
  }

  return {...users, ...newUsers};
}

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});


const limit = 10000;

const run = async () => {
  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  let users = await loadAllUserData(limit, 0, {});

  let teachers = 'email,first,last,schoolName,phoneNumber,postCode,teacherCode\n';
  let students = 'email,first,last,level,birthYear,schoolName,teacherCode,guardianEmail\n';

  for (let a of accounts) {
    const u = users[a.localId];
    if (!u) continue;
    if (u.code) {
      teachers += `${a.email},${u.first},${u.last},"${u.schoolName||''}",${u.phoneNumber||''},${u.postCode||''},${u.code||''}\n`;
    } else {
      students += `${a.email},${u.first},${u.last},${u.level||''},${u.birthYear||''},"${u.schoolName||''}",${u.teacherCode||''},${u.guardianEmail||''}\n`;
    }
  }

  fs.writeFileSync(path.join(__dirname, `../private/teachers.csv`), teachers);
  fs.writeFileSync(path.join(__dirname, `../private/students.csv`), students);

  process.exit();
}

run();
