const fb = require("firebase-admin");
const serviceAccount = require("../private/service-account.json");

// This script will convert a standard account into an admin account.

const email = "parallel@mcmill.co.uk"
const type = "ADMIN"

//////////////////////////////////////

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: "https://parallel-cf800.firebaseio.com",
});

const setAdmin = (email, type) =>
  fb
    .auth()
    .getUserByEmail(email)
    .then(user => fb.auth().setCustomUserClaims(user.uid, { account_type: type }))
    .then(() => console.log(`\n\nSet user "${email}" account_type to ${type}`))
    .catch((err) => {
      err.message = `${err.message} - ${email}`;
      throw err;
    });

const run = async () => {
  await setAdmin(email, type)
};

run()
  .then(() => {
    console.error("\n\nSuccess setting account level");
    process.exit(0);
  })
  .catch((err) => {
    console.error("\n\nError setting account level!");
    console.error(err.message + "\n");
    process.exit(1);
  });
