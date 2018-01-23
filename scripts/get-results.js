// This file can be used to generate a table of scores from the Firebase FB.
// Export the entire Firebase DB as json, and place it as
// 'parallel-cf800-export.json' into the root of this directory.


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
const pages = [...pageData.year7.map(p => p.url), ...pageData.year8.map(p => p.url)];

async function run() {
  const userData = await fb.database().ref('users').once('value');
  const users = userData.toJSON();

  const answerData = await fb.database().ref('answers').once('value');
  const answers = answerData.toJSON();

  for (let p of pages) {
    const titles = ['name','schoolName','country','submitted','score'];
    const data = [];

    for (let u of Object.keys(answers)) {
      if (!answers[u][p] || !users[u]) continue;

      const answer = answers[u][p];
      const user = users[u];

      const d = [
        user.first + ' ' + user.last,
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
    fs.writeFileSync(path.join(__dirname, `../private/results-${p}.csv`), titlesStr + rowsStr);
  }

  process.exit();
}

run();
