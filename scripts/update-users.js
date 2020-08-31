const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

async function run() {
  const userData = await fb.database().ref('users').once('value');
  const users = userData.toJSON();
  console.log(`Loaded ${Object.keys(users).length} users...`);

  const updates = {};

  for (const [key, user] of Object.entries(users)) {
    updates[`${key}/level`] = ({year7: 'year8', year8: 'year9', year9: 'year10', year10: 'year11'}[user.level] || 'year7');
    updates[`${key}/showWelcomeMsg`] = true;
    updates[`${key}/hasSeenWelcomeMsg`] = fb.firestore.FieldValue.delete();

    const parallelograms = user.answers ? Object.keys(user.answers) : [];
    for (let p of parallelograms) {
      updates[`${key}/answers/${p}/archive`] = 2018;
    }
  }

  console.log(`Updating ${Object.keys(updates).length} entries...`);
  await fb.database().ref('users').update(updates);

  console.log('Done!');
  process.exit();
}

run();
