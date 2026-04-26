const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');
const promiseLimit = require('promise-limit')

const limit = promiseLimit(400);

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const userDb = fb.firestore().collection('users');

const job = async (id, data) => {
  console.log(id, data);
  await userDb.doc(id).set({
    ...data,
  }, { merge: true });
}

const run = async () => {
  const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../private/cache-users.json'), 'utf8'));

  const data = Object.entries(users.data);

  const dataToSet = {};
  
  for (const [id, user] of data) {
    
      const one = user.phoneNumber;
      const two = user.guardianPhone;
      
      if (one || two) {
        console.log(id, user.email);
      }
    
  }

  // Promise.all(Object.entries(dataToSet).map(([id, user]) => {
  //   return limit(() => job(id, user))
  // })).then(results => {
  //   console.log()
  //   console.log('results:', results.length)
  // })
};

run();
