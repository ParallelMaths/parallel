const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');

const USERS = [
  // ADD EMAILS HERE
];

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

async function deleteAccount(email) {
  let id = null;

  return fb.auth().getUserByEmail(email)
    .then(user => id = user.uid)
    .then(() => fb.auth().deleteUser(id))
    .then(() => fb.database().ref('users/' + id).remove())
    .catch(e => console.log('Error deleting account:', email, e.message));
}

const promises = USERS.map(deleteAccount);
Promise.all(promises).then(() => process.exit());
