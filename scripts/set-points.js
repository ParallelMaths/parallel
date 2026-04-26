const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const downloadUsers = require('./utils/downloadUsers');


// ---------------------
const EMAIL = 'foobar@email.com'
const PG = '7-31-testing-tankards';
const POINTS = 16;
// ---------------------





const userDb = fb.firestore().collection('users');
async function updatePoints() {
  await downloadUsers();

  console.log('\n\n\n\n');

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const userId = accounts.find(a => a.email.toLowerCase() === EMAIL.toLowerCase()).localId;

  if(!userId) {
    console.log('ERROR: User not found by email');
    process.exit();
  }

  const liveDoc = (await userDb.doc(userId).get()).data();

  if(!liveDoc) {
    console.log('ERROR: User not found by id');
    process.exit();
  }

  const answers = liveDoc.answers?.[PG];

  if (!answers || !answers.submitted) {
    console.log('ERROR: User has not submitted answers for this pg');
    process.exit();
  }

  if (!answers.total || answers.total < POINTS) {
    console.log('ERROR: Number of points to set is greater than total possible points');
    process.exit();
  }

  const score = Math.round(100 * POINTS / answers.total);

  console.log(`Setting points for ${liveDoc.first} ${liveDoc.last} to ${POINTS} (${score}%)\n\n\n\n`);

  await userDb.doc(userId).set({answers: {[PG]: { points: POINTS, score }}}, {merge: true});
}

updatePoints().then(() => process.exit());
