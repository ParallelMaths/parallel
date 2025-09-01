const fb = require('firebase-admin');
const initializeFirebase = require("./utils/initializeFirebase");
initializeFirebase();

const USERS = [
  // ADD EMAILS HERE
];

async function deleteAccount(email) {
  let id = null;

  return fb.auth().getUserByEmail(email)
    .then(user => id = user.uid)
    .then(() => fb.auth().deleteUser(id))
    .then(() => fb.firestore().collection('users').doc(id).delete())
    .catch(e => console.log('Error deleting account:', email, e.message));
}

const promises = USERS.map(deleteAccount);
Promise.all(promises).then(() => process.exit());
