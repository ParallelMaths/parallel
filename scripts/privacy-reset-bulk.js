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
  ageSetKey
} = require('../functions/utilities/privacy/privacyKeys');
const { getGuardianEmails } = require('../functions/utilities/getTypeSafeUser');

const userDb = fb.firestore().collection('users');

const dry = true;

const run = async () => {
  let users = await downloadUsers();
  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  for (let a of accounts) {
    const u = users[a.localId];
    if (!u) continue;

    const emails = getGuardianEmails(u);

    if (u[userNeedsGuardianTouchKey] && !emails.length) {
      console.log('Resetting privacy touch for user without guardian email:', a.localId);

      if (!dry) {
        await userDb.doc(a.localId).set({
        [firstSeenKey]: fb.firestore.FieldValue.delete(),
        [latestTouchKey]: fb.firestore.FieldValue.delete(),
        [dueByKey]: fb.firestore.FieldValue.delete(),
        [userNeedsGuardianTouchKey]: fb.firestore.FieldValue.delete(),
        [guardianPrivacyAuthTokenKey]: fb.firestore.FieldValue.delete(),
        [acceptedKey]: fb.firestore.FieldValue.delete(),
        [acceptedByKey]: fb.firestore.FieldValue.delete(),
        [variantModeKey]: fb.firestore.FieldValue.delete(),
        [ageSetKey]: fb.firestore.FieldValue.delete(),
      }, {merge: true});
      }
    }
  }
}

run();
