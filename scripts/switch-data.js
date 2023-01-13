const fb = require("firebase-admin");
const serviceAccount = require("../private/service-account.json");

// Their old account with the data
const FROM_EMAIL = "alex.pottage@gmail.com ";

// Their new account
const TO_EMAIL = "alexbpottage@gmail.com";

//////

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: "https://parallel-cf800.firebaseio.com",
});

const getAnswerCount = (data) =>
  data.answers ? Object.keys(data.answers).length : 0;

const getUserData = (email) =>
  fb.auth()
    .getUserByEmail(email)
    .then((user) => fb.firestore().collection("users").doc(user.uid).get())
    .then((doc) => doc.data())
    .then((data) => {
      console.log(`Account "${email}" has ${getAnswerCount(data)} answers`);
      return data;
    }).catch(err => {
        err.message = `${err.message} - ${email}`
        throw err;
    });

const updateUserData = (email, data) =>
  fb.auth()
    .getUserByEmail(email)
    .then((user) =>
      fb
        .firestore()
        .collection("users")
        .doc(user.uid)
        .update(data)
    );

const run = async () => {
  if(FROM_EMAIL === TO_EMAIL) throw new Error("Both emails are the same")

  const fromUser = await getUserData(FROM_EMAIL);
  const toUser = await getUserData(TO_EMAIL);

  if (!getAnswerCount(fromUser)) {
    throw new Error(`Account "${FROM_EMAIL}" has no answers to transfer`);
  }

  const combinedUser = {
    ...toUser,
    answers: {
      ...fromUser.answers,
      ...toUser.answers, // Retain their new accounts latest answers, over their old account
    },
  };

  await updateUserData(TO_EMAIL, combinedUser);
};

run()
  .then(() => {
    console.error("Success switching data!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("\nError switching data!");
    console.error(err.message + '\n');
    process.exit(1);
  });
