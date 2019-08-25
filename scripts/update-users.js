const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

async function run() {
  const userData = await fb.database().ref('users').once('value');
  const users = userData.toJSON();
  console.log(`Loading ${Object.keys(users).length} users...`);

  let i = 0;

  for (const [key, user] of Object.entries(users)) {
    i += 1;
    if (!(i % 100)) console.log(`Updating ${i}`);

    if (!user.hasSeenWelcomeMsg) continue;
    await fb.database().ref('users/' + key).update({hasSeenWelcomeMsg: false});
  }

  console.log('Done!');
  process.exit();
}

run();
