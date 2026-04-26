const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');
const promiseLimit = require('promise-limit');
const csv = require("csvtojson");

const limit = promiseLimit(400);

const csvFile = "/Users/drew/Desktop/TutorialPhonedata1.csv";

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const userDb = fb.firestore().collection('users');

const job = async (id, data) => {
  console.log(id, data);
  // await userDb.doc(id).set({
  //   ...data,
  // }, { merge: true });
}

const run = async () => {
  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;
  const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../private/cache-users.json'), 'utf8'));

  const accountsByEmail = accounts.reduce((acc, account) => {
    acc[account.email.toLowerCase()] = account;
    return acc;
  }, {});

  const csvData = await csv().fromFile(csvFile);

  // console.log(csvData);

  const dataToSet = {};

  for (const row of csvData) {
    const email = row["Username"];
    const phoneNumbers = [row["Phone 1"], row["Phone 2"]].filter(Boolean).map(n => {
      if (n.startsWith('7')) {
        return '0' + n;
      }
      return n.replace('+447', '07');
    });

    const userId = accountsByEmail[email.toLowerCase()].localId;
    const user = users.data[userId];

    if (!user) {
      console.log("User not found", email);
      continue;
    }

    if (user.phoneNumber) {
      phoneNumbers.push(user.phoneNumber.replace('+447', '07'));
    }

    if (user.guardianPhone) {
      phoneNumbers.push(user.guardianPhone.replace('+447', '07'));
    }

    const cleanPhoneNumbers = phoneNumbers.filter(Boolean).map(n => n.replace(/\s/g, '')).filter(n => !/[a-zA-Z]/.test(n))

    const dedupedPhoneNumbers = [...new Set(cleanPhoneNumbers)];

    const numbersFinal = [dedupedPhoneNumbers[0], dedupedPhoneNumbers[1]].filter(Boolean);

    dataToSet[userId] = {
      guardianPhone: null,
      phoneNumber: null,
      phoneNumbers: numbersFinal.map(n => ({ phoneNumber: n, type: 'guardian' })),
    }

    // if(dataToSet[userId].phoneNumbers.length === 0) {
    //   console.log('-')
    //   console.log('-')
    //   console.log(email);
    //   console.log(JSON.stringify({
    //     one: row["Phone 1"],
    //     two: row["Phone 2"],
    //     existingPhone: user.phoneNumber,
    //     existingGuardianPhone: user.guardianPhone,
    //   }, null, 2));
    //   console.log(JSON.stringify(dataToSet[userId], null, 2));
    // }
  }

  const data = Object.entries(dataToSet);

  Promise.all(data.map(([id, user]) => {
    return limit(() => job(id, user))
  })).then(results => {
    console.log()
    console.log('results:', results.length)
  })
};

run();
