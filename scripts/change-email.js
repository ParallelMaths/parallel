const fb = require("firebase-admin");
const serviceAccount = require("../private/service-account.json");

// This script will change an account email.

const from = '24keegan-stannardl@thecityacademy.org'
const to = 'lkeeganstannard@gmail.com'

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: "https://parallel-cf800.firebaseio.com",
});

const run = () =>
  fb
    .auth()
    .getUserByEmail(from)
    .then(async (user) => {
      await fb.auth().updateUser(user.uid, {
        email: to,
      });
      console.log(`\nMigrated "${user.email}" email to ${to}`);

      console.log(`\nIf this student is euclid, please send Drew "${user.uid}" and "${to}" to update the euclid account.`)
    })
    .catch((err) => {
      err.message = `${err.message} - ${from}`;
      throw err;
    });

run()
  .then(() => {
    console.error("\n\n\nSuccess migrating account");
    process.exit(0);
  })
  .catch((err) => {
    console.error("\n\n\nError migrating account!");
    console.error(err.message + "\n");
    process.exit(1);
  });
