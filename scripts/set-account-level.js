const fb = require("firebase-admin");
const serviceAccount = require("../private/service-account.json");

// This script will convert a standard account into an admin account.

const email = "parallel@mcmill.co.uk"
const isCircleAdmin = true;
const isCircleDataAdmin = true;
const isEuclidAdmin = true;

//////////////////////////////////////

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: "https://parallel-cf800.firebaseio.com",
});

const setAdmin = () => { 
  const claims = {};

  if (isCircleAdmin) claims['account_type'] = 'ADMIN'
  if (isCircleDataAdmin) claims['circles_data_type'] = 'ADMIN';
  if (isEuclidAdmin) claims['euclid_type'] = 'ADMIN'
  
  return fb
    .auth()
    .getUserByEmail(email)
    .then(user => fb.auth().setCustomUserClaims(user.uid, claims))
    .then(() => console.log(`\n\nSet user "${email}" claims to ${JSON.stringify(claims)}`))
    .catch((err) => {
      err.message = `${err.message} - ${email}`;
      throw err;
    })
};

const run = async () => {
  await setAdmin()
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
