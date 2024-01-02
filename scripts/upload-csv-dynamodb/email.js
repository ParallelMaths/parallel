const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const fetch = require("node-fetch");

const run = async () => {
  const file = path.join(__dirname, `../../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const data = await csv().fromFile(
    "/Users/drew/Downloads/Jan 2024 student groups - Sheet1.csv"
  );

  const mapped = data.map(u => {
    const acc = accounts.find(a => a.email.toLowerCase() === u["Email"].toLowerCase());

    if(!acc) {
      console.log('BAD - no account', u);
      process.exit(1);
    }

    if(!u.Class) {
      console.log('Missing class', u.Email)
      return null
    }

    return {
      ...u,
      Id: acc.localId
    }
  }).filter(Boolean);

  console.log(mapped);

  const rows = [['Email', 'Term', 'Class', 'Id']];
  for (const u of mapped) {
    rows.push([u["Email"], u["Term"], u["Class"], u["Id"]]);
  }
  const str1 = rows.map(d => d.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, `../../private/output-new-classes.csv`), str1);

  process.exit();
};

run();
