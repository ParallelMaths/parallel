const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const downloadUsers = require('./utils/downloadUsers');
const {
  userNeedsGuardianTouchKey,
} = require('../functions/utilities/privacy/privacyKeys');

// ---------------------

const email = 'beta-parallel@mcmill.co.uk';

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

  await userDb.doc(userId).set({
    [userNeedsGuardianTouchKey]: Date.now(),
   }, {merge: true});

  console.log(`User "${email}" privacy email scheduled for resend`);

  process.exit();
}

run();
