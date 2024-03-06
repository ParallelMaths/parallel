const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const fetch = require("node-fetch");

const emailKey = "Parallel username";
const targetKey = "Student feedback form";
const filePath = "/Users/drew/Downloads/Google_form_links_for_Drew_-_Feedback_form.csv"

const run = async () => {
  const file = path.join(__dirname, `../../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const data = await csv().fromFile(filePath);

  const parsed = data.reduce((acc, d) => {
    if (
      !d[emailKey] || !d[targetKey]
    ) {
      console.log("bad", d);
      process.exit();
    }

    const id = accounts.find((a) => a.email.toLowerCase() === d[emailKey].toLowerCase()).localId;

    if (!id) {
      console.log("no id", d);
      process.exit();
    }

    acc[id] = d[targetKey];

    return acc;
  }, {});

  console.log(JSON.stringify(parsed, null, 2));

  process.exit();
};

run();
