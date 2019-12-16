const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');
const yaml = require('yamljs');

// -----------------------------------------------------------------------------
// Edit below.
// Set the time string to '' to stop filtering by submission time.

const START_TIME = '';
const END_TIME = '';

// -----------------------------------------------------------------------------

function inTimeRange(q) {
  if (START_TIME && (!q.time || q.time < START_TIME)) return false;
  if (END_TIME && (!q.time || q.time > END_TIME)) return false;
  return true;
}

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));

let pages = [...pageData.year7, ...pageData.year8, ...pageData.year9, ...pageData.year10];
pages = pages.filter(p => new Date(p.available) < Date.now());

async function run() {
  const userData = await fb.database().ref('users').once('value');
  const users = userData.toJSON();

  const emailData = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(emailData)).users;
  const emailMap = {};
  for (let a of accounts) emailMap[a.localId] = a.email;

  // ---------------------------------------------------------------------------

  for (let p of pages) {
    const titles = ['name','email','school','submitted','score'];
    const data = [];

    for (let u of Object.keys(users)) {
      if (users[u].code || !users[u].answers) continue;  // exclude teachers

      const user = users[u];
      const answer = users[u].answers[p.url];
      if (!answer || answer.archive || !inTimeRange(answer)) continue;

      const d = [
        user.first + ' ' + user.last,
        emailMap[u],
        `"${users[u].schoolName || ''}"`,
        answer.submitted ? 1 : '',
        answer.score || 0
      ];

      for (let key of Object.keys(answer)) if (titles.indexOf(key) <= 0) titles.push(key);
      for (let i=7; i<titles.length; ++i) d.push(answer[titles[i]] || '""');

      data.push(d);
    }

    data.sort((a, b) => { return a[6] < b[6] ? 1 : a[6] > b[6] ? -1 : 0; });

    const titlesStr = titles.join(',') + '\n';
    const rowsStr = data.map(d => d.join(',')).join('\n');
    fs.writeFileSync(path.join(__dirname, `../private/results-${p.url}.csv`), titlesStr + rowsStr);
  }

  // ---------------------------------------------------------------------------

  const titles = ['name', 'email', 'school', ...pages.map(p => p.url), 'total'];
  const data = [];
  for (let u of Object.keys(users)) {
    if (!users[u].answers || users[u].answers.archive || users[u].code) continue;

    const a = pages.map(p => ((users[u].answers[p.url] || {}).score || 0));
    const sum = a.reduce((a, b) => a + b, 0);
    if (sum>0) data.push([
      `"${users[u].first} ${users[u].last}"`,
      emailMap[u],
      `"${users[u].schoolName || ''}"`,
      ...a, sum
    ]);
  }

  const str = [titles, ...data].map(d => d.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/results.csv`), str);

  process.exit();
}

run();
