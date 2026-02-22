const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../../private/service-account.json');
const promiseLimit = require('promise-limit')

const limit = promiseLimit(400);

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const userDb = fb.firestore().collection('users');

const job = async (entry) => {
  const newData = {
    level: entry.newLevel,
  };

  console.log(`Updating ${entry.userId} ${JSON.stringify(newData)}`);

  const out = await userDb.doc(entry.userId).set(newData, { merge: true });

  console.log(`Updated ${JSON.stringify(out)}`);
}

const run = async () => {
  const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../private/move-levels.json'), 'utf8'));

  const results = await Promise.all(data.map((entry) => {
    return limit(() => job(entry))
  }));

  console.log();
  console.log('results:', results.length);
  process.exit();
};

run();
