const fs = require("fs");
const path = require("path");
const fb = require("firebase-admin");
const csv = require("csvtojson");
const downloadUsers = require("./utils/downloadUsers");

// ---------------------

const csvFile = "/Users/drew/Desktop/Book1.csv";
const dry = true;
const emailKey = "Parallel Username";
const filenameKey = "Filename";
// Check filename doesn't have an extension

// ---------------------

const userDb = fb.firestore().collection("users");
const run = async () => {
  await downloadUsers();

  const data = await csv().fromFile(csvFile);

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  for (const row of data) {
    const email = row[emailKey];
    const filename = row[filenameKey];

    if (!email) {
      console.log("No email", row);
      throw new Error("No email");
    }
    if (!filename) {
      console.log("No filename", row);
      throw new Error("No filename");
    }

    console.log(`Email: ${email} -> Filename: ${filename}`);

    const userId = accounts.find(
      (a) => a.email.toLowerCase() === email.toLowerCase(),
    ).localId;

    if (!userId) {
      console.log("User not found by email");
      process.exit();
    }

    const liveDoc = (await userDb.doc(userId).get()).data();

    if (!liveDoc) {
      console.log("User not found by id");
      process.exit();
    }

    const data = {
      googleFormFilename: filename
    }

    if (dry) {
      console.log(email, "Dry run, not updating", data);
      continue;
    } else {
      console.log(email, "Updating", data);
      await userDb.doc(userId).set(data, { merge: true });
    }
  }

  process.exit();
};

run();
