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

const job = async (id, data) => {
  console.log(id);
  await userDb.doc(id).set(data, { merge: true });
}

const run = async () => {
  const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../private/new-cache-users.json'), 'utf8'));

  const data = Object.entries(users);

  Promise.all(data.map(([id, user]) => {
    return limit(() => job(id, user))
  })).then(results => {
    console.log()
    console.log('results:', results.length)
  })
};

run();
