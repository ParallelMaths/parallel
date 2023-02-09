const fb = require("firebase-admin");
const serviceAccount = require("../private/service-account.json");

// This script will reset passwords. Used when students are unable to receive emails.

const accountsToRecover = [
    "21turnerm@sionschool.org.uk"
];

const passwordLength = 10;

const passwordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


//////////////////////////////////////

const makePassword = () => {
  var result = "";
  var charactersLength = passwordCharacters.length;
  for (var i = 0; i < passwordLength; i++) {
    result += passwordCharacters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  return result;
};

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: "https://parallel-cf800.firebaseio.com",
});

const updateUserPassword = (email) =>
  fb
    .auth()
    .getUserByEmail(email)
    .then(async (user) => {
      const password = makePassword();
      await fb.auth().updateUser(user.uid, {
        password,
      });
      console.log(`Given user "${user.email}" password    ${password}`);
    })
    .catch((err) => {
      err.message = `${err.message} - ${email}`;
      throw err;
    });

const run = async () => {
  console.log("\n\n");
  for (const email of accountsToRecover) {
    await updateUserPassword(email);
  }
};

run()
  .then(() => {
    console.error("\n\n\nSuccess recovering accounts");
    process.exit(0);
  })
  .catch((err) => {
    console.error("\n\n\nError recovering accounts!");
    console.error(err.message + "\n");
    process.exit(1);
  });
