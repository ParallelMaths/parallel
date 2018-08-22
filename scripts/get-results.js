const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');
const yaml = require('yamljs');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const pageData = yaml.load(path.join(__dirname, '../pages/pages.yaml'));
const pages = [...pageData.year7, ...pageData.year8, ...pageData.year9];

async function run() {
  const userData = await fb.database().ref('users').once('value');
  const users = userData.toJSON();

  const emailData = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(emailData)).users;
  const emailMap = {};
  for (let a of accounts) emailMap[a.localId] = a.email;

  // ---------------------------------------------------------------------------

  for (let p of pages) {
    const titles = ['name','email','schoolName','country','submitted','score'];
    const data = [];

    for (let u of Object.keys(users)) {
      if (!users[u].answers || !users[u].answers[p.url]) continue;

      const user = users[u];
      const answer = users[u].answers[p.url];

      const d = [
        user.first + ' ' + user.last,
        emailMap[u],
        `"${users[u].schoolName || ''}"`,
        users[u].country,
        answer.submitted ? 1 : '',
        Math.round(answer.score*100) || 0
      ];

      for (let key of Object.keys(answer)) if (titles.indexOf(key) <= 0) titles.push(key);
      for (let i=5; i<titles.length; ++i) d.push(answer[titles[i]] || '""');

      data.push(d);
    }

    data.sort((a, b) => { return a[4] < b[4] ? 1 : a[4] > b[4] ? -1 : 0; });

    const titlesStr = titles.join(',') + '\n';
    const rowsStr = data.map(d => d.join(',')).join('\n');
    fs.writeFileSync(path.join(__dirname, `../private/results-${p.url}.csv`), titlesStr + rowsStr);
  }

  // ---------------------------------------------------------------------------

  const data = [['name', 'email', 'school', ...pages.map(p => p.url), 'total']];
  for (let u of Object.keys(users)) {
    if (!users[u].answers) continue;
    const a = pages.map(p => ((users[u].answers[p.url] || {}).score || 0));
    const sum = a.reduce((a, b) => a + b, 0);
    if (sum>0) data.push([
      `"${users[u].first} ${users[u].last}"`,
      emailMap[u],
      `"${users[u].schoolName || ''}"`,
      ...a, sum
    ]);
  }
  const str = data.map(d => d.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/results.csv`), str);

  // ---------------------------------------------------------------------------

  process.exit();
}

run();
