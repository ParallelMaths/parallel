const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const GOLD = [
  // ADD EMAILS HERE
];

const SILVER = [
  // ADD EMAILS HERE
];

const BRONZE = [
  // ADD EMAILS HERE
];

async function run() {
  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;
  let u = 0;

  for (let a of accounts) {
    let c = null;
    if (GOLD.indexOf(a.email) >= 0) c = 'gold';
    if (SILVER.indexOf(a.email) >= 0) c = 'silver';
    if (BRONZE.indexOf(a.email) >= 0) c = 'bronze';

    if (c) await fb.database().ref('users/' + a.localId).update({certificate: c});
    if (c) u += 1;
  }

  console.log('updated:', u);
}

run();
