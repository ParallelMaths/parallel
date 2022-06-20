const fs = require('fs');
const path = require('path');
const yaml = require('yamljs');
const downloadUsers = require('./utils/downloadUsers');

const badges = yaml.load(path.join(__dirname, '../static/badges.yaml'));

async function run() {
  const usersObject = await downloadUsers();
  const users = Object.values(usersObject);

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
