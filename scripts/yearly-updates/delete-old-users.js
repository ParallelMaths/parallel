const fs = require("fs");
const path = require("path");
const fb = require("firebase-admin");
const serviceAccount = require("../../private/service-account.json");

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: "https://parallel-beta-31dc4.firebaseio.com",
});

const keysToRemove = [
  "first",
  "last",
  "schoolName",
  "schoolPostcode",
  "schoolEmail",
  "school",
  "postCode",
  "phoneNumber",
  "guardianEmail",
  "emails",
  "studentPanelGuardianName",
  "studentPanelGuardianNumber",
];

const cutoff = new Date("2022-08-22T18:32:06.817Z").getTime();

const file = path.join(__dirname, `../private/tmp-users.json`);
const accounts = JSON.parse(fs.readFileSync(file)).users;

const userCacheFile = path.join(__dirname, `../private/cache-users.json`);
const usersAccountData = JSON.parse(fs.readFileSync(userCacheFile)).data;

const usersCollection = fb.firestore().collection("users");
const usersArchiveCollection = fb.firestore().collection("users-archive");

const deleteAccount = async (id) => {
  const data = usersAccountData[id];

  if (!data) {
    console.log("Unable to find user in database", id);
  } else {
    const redactedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        if (keysToRemove.includes(key)) {
          return [key, "__REMOVED__"];
        }
        return [key, value];
      }),
    );

    await usersArchiveCollection.doc(id).set(redactedData);
    await usersCollection.doc(id).delete();
  }

  await fb.auth().deleteUser(id);
  console.log("Deleting user", id);
};

(async () => {
  console.log("Number of accounts:", accounts.length);

  const oldAccounts = accounts.filter(
    (a) => new Date(+a.lastSignedInAt).getTime() < cutoff,
  );

  const oldAccountIds = oldAccounts.map((a) => a.localId);

  console.log("Accounts to delete:", oldAccountIds.length);

  const chunks = [];

  const chunkSize = 9; // Rate limit is max 10 per second
  for (let i = 0; i < oldAccountIds.length; i += chunkSize) {
    chunks.push(oldAccountIds.slice(i, i + chunkSize));
  }

  console.log("Chunks", chunks.length);

  for (const chunk of chunks) {
    console.log("CHUNK");
    await new Promise((r) => setTimeout(r, 1200));
    await Promise.all(chunk.map((id) => deleteAccount(id)));
  }

  process.exit();
})();
