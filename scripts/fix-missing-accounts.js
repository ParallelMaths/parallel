const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const downloadUsers = require('./utils/downloadUsers');

// ---------------------

function generateUserReference() {
  return 'xxxxxxxxx'.replace(/x/g, () => (Math.random()*36).toString(36)[0]).toUpperCase();
}

// ---------------------

const userDb = fb.firestore().collection('users');
const run = async () => {
  const users = await downloadUsers();

  console.log('\n\n\n\n');

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const brokenIds = [];

  for (let a of accounts) {
    const u = users[a.localId];
    if (!u) {
      brokenIds.push(a.localId);
    }
  }

  console.log('Found', brokenIds.length, 'broken accounts');

  for (let id of brokenIds) {
    const liveDoc = (await userDb.doc(id).get()).data();

    if (liveDoc) {
      console.log('Found live doc for missing user:', id);
    } else {
      console.log('No live doc for missing user:', id);
      await userDb.doc(id).set({
        "last": "LastName",
        "userReference": generateUserReference(),
        "first": "FirstName",
        "level": "year6",
      });
      console.log('Created placeholder doc for missing user:', id);
    }
  }

  process.exit();
}

run();
