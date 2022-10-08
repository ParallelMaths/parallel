const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');
const downloadUsers = require('./utils/downloadUsers');
const isProfileComplete = require('../functions/utilities/profileComplete');

const run = async () => {
  let users = await downloadUsers();

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  let teachers = 'email,first,last,schoolName,phoneNumber,postCode,teacherCode,uniqueId\n';
  let students = 'email,first,last,gender,level,birthYear,birthMonth,schoolName,teacherCode,guardianEmail,uniqueId,studentReference,schoolEmail,studentPanelConsidered,profileComplete\n';

  for (let a of accounts) {
    const u = users[a.localId];
    if (!u) continue;
    if (u.code) {
      teachers += `"${a.email}","${u.first}","${u.last}","${u.schoolName||''}","${u.phoneNumber||''}","${u.postCode||''}","${u.code||''}","${a.localId||''}"\n`;
    } else {
      students += `"${a.email}","${u.first}","${u.last}","${u.gender||''}","${u.level||''}","${u.birthYear||''}","${u.birthMonth||''}","${u.schoolName||''}","${u.teacherCode||''}","${u.guardianEmail||''}","${a.localId||''}","${u.userReference||''}","${u.schoolEmail||''}","${u.studentPanelConsidered||''}","${isProfileComplete(u) ? 1 : 0}"\n`;
    }
  }

  fs.writeFileSync(path.join(__dirname, `../private/teachers.csv`), teachers);
  fs.writeFileSync(path.join(__dirname, `../private/students.csv`), students);

  process.exit();
}

run();
