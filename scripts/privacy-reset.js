const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const downloadUsers = require('./utils/downloadUsers');
const {
  firstSeenKey,
  latestTouchKey,
  dueByKey,
  userNeedsGuardianTouchKey,
  guardianPrivacyAuthTokenKey,
  acceptedKey,
  acceptedByKey,
  variantModeKey,
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
    [firstSeenKey]: fb.firestore.FieldValue.delete(),
    [latestTouchKey]: fb.firestore.FieldValue.delete(),
    [dueByKey]: fb.firestore.FieldValue.delete(),
    [userNeedsGuardianTouchKey]: fb.firestore.FieldValue.delete(),
    [guardianPrivacyAuthTokenKey]: fb.firestore.FieldValue.delete(),
    [acceptedKey]: fb.firestore.FieldValue.delete(),
    [acceptedByKey]: fb.firestore.FieldValue.delete(),
    [variantModeKey]: fb.firestore.FieldValue.delete(),
   }, {merge: true});

  console.log(`User "${email}" privacy data deleted`);

  process.exit();
}

run();
