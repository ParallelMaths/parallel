const fb = require("firebase-admin");
const initializeFirebase = require("./utils/initializeFirebase");
initializeFirebase();

// This script will convert a standard account into an admin account.

const email = "parallel@mcmill.co.uk"
const isCircleAdmin = true;
const isEuclidAdmin = true;

//////////////////////////////////////

const setAdmin = () => { 
  const claims = {};

  if(isCircleAdmin) claims['account_type'] = 'ADMIN'
  if(isEuclidAdmin) claims['euclid_type'] = 'ADMIN'
  
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
