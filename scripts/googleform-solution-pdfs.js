const fs = require("fs");
const path = require("path");
const fb = require("firebase-admin");
const csv = require("csvtojson");
const downloadUsers = require("./utils/downloadUsers");

// ---------------------

const csvFile = "/Users/drew.mcmillan/Downloads/markedscriptsfordrew.csv";
const dry = false;
const emailKey = "email";
const solutionKey = "url";
const pg = "academy-8aut-week-3"

// ---------------------

const userDb = fb.firestore().collection("users");
const run = async () => {
  await downloadUsers();

  const data = await csv().fromFile(csvFile);

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  for (const row of data) {
    const email = row[emailKey];
    const solution = row[solutionKey];

    if (!email) {
      console.log("No email", row);
      throw new Error("No email");
    }
    if (!solution) {
      console.log("No solution", row);
      throw new Error("No solution");
    }

    console.log(`Email: ${email} -> Solution: ${solution}`);

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
      answers: {
        [pg]: {
          solution: solution
        }
      }
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
