const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

(async () => {
  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  console.log('Number of accounts:', accounts.length);

  const oldAccounts = accounts
    .filter(a => (new Date(+a.lastSignedInAt)).getFullYear() < 2020)
    .map(a => a.localId);

  console.log('Accounts to delete:', oldAccounts.length);
  let i = 0;

  for (const id of oldAccounts) {
    await fb.auth().deleteUser(id);
    await fb.database().ref('users/' + id).remove();
    i += 1;
    if (i % 100 === 0) console.log(i);
  }

  process.exit();
})();
