const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const downloadUsers = require('./utils/downloadUsers');

// ---------------------

const email = 'email@email.com'
const teacherCodes = ['M2YU-KMFE']
const merge = true; // if true, will merge with existing codes, otherwise will overwrite

// ---------------------

const userDb = fb.firestore().collection('users');
const run = async () => {
  await downloadUsers();

  console.log('\n\n\n\n');

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const userId = accounts.find(a => a.email.toLowerCase() === email.toLowerCase()).localId;

  if(!userId) {
    console.log('User not found by email');
    process.exit();
  }

  const liveDoc = (await userDb.doc(userId).get()).data();

  if(!liveDoc) {
    console.log('User not found by id');
    process.exit();
  }

  console.log('Current teacher codes:', liveDoc.teacherCode)

  const newCodes = merge ? [...new Set([...(liveDoc.teacherCode || []), ...teacherCodes])] : teacherCodes;

  console.log('New teacher codes:', newCodes)

  await userDb.doc(userId).set({teacherCode: newCodes }, {merge: true});

  console.log('Done');

  process.exit();
}

run();
