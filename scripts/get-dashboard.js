const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const yaml = require('yamljs');
const serviceAccount = require('../private/service-account.json');

const TEACHER_CODE = 'oj49wo';

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));
for (const y of Object.keys(pageData)) pageData[y].reverse();

async function run() {
  const data = await fb.database().ref('users').orderByChild('teacherCode').equalTo(TEACHER_CODE).once('value');
  const students = Object.values(data.toJSON() || {});

  const problems = Array.from(new Set(students.flatMap(s => Object.keys(s.answers || {})))).sort();
  const results = [['Name', 'Year', ...problems]];

  for (const s of students) {
    const row = [`"${s.first} ${s.last}"`, s.level];
    for (const p of problems) {
      row.push(s.answers?.[p]?.score || '');
    }
    results.push(row);
  }

  const str = results.map(r => r.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/dashboard.csv`), str);

  console.log('Done!');
  process.exit();
}

run();
