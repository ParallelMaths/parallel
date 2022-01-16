const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');
const yaml = require('yamljs');

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const badges = yaml.load(path.join(__dirname, '../static/badges.yaml'));

async function run() {
  const userData = await fb.firestore().collection('users').get();
  const users = userData.docs.map(d => d.data());
  console.log(`Loading ${users.length} users...`);

  const results = ['year, badge, points, recipients'];

  for (let y of ['year7', 'year8', 'year9', 'year10', 'year11']) {
    for (let b of badges[y]) {
      const row = [y, b.name, b.score, 0];
      for (let u of users) {
        if (u.badges && u.badges.includes(b.id)) row[3] += 1;
      }
      results.push(row.join(','));
    }
  }

  const str = results.join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/badges.csv`), str);
  console.log('Done!');
  process.exit();
}

run();
