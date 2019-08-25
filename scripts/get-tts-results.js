const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const yaml = require('yamljs');
const serviceAccount = require('../private/service-account.json');

// -----------------------------------------------------------------------------
// Edit below. The number of students is for years [7, 8, 9, 10] respectively.

const TTS_SCHOOLS = [
  {teacherCode: 'mg4414', students: [30, 30, 30, 0]},
  {teacherCode: 'h343j',  students: [30, 30, 30, 0]},
  {teacherCode: 'qw6ok',  students: [30, 30, 30, 0]},
  {teacherCode: 'fd5ryc', students: [30, 30, 30, 0]},
  {teacherCode: 'z8yevt', students: [30, 30, 30, 0]},
  {teacherCode: '9h9mga', students: [30, 30, 30, 0]},
  {teacherCode: 'frwics', students: [30, 30, 30, 0]},
  {teacherCode: 'muigu',  students: [30, 30, 30, 0]},
  {teacherCode: '14lq9e', students: [30, 30, 30, 0]},
  {teacherCode: 'onwaes', students: [30, 30, 30, 0]},
  {teacherCode: 'agv1u',  students: [30, 30, 30, 0]},
  {teacherCode: 'ahupq9', students: [30, 30, 30, 0]},
  {teacherCode: 'et857w', students: [30, 30, 30, 0]},
  {teacherCode: '9knp4',  students: [30, 30, 30, 0]},
  {teacherCode: 'ojiy8q', students: [30, 30, 30, 0]},
  {teacherCode: 'a896w',  students: [30, 30, 30, 0]},
  {teacherCode: 'cb8sj',  students: [30, 30, 30, 0]},
  {teacherCode: 'yjhx14', students: [30, 30, 30, 0]},
  {teacherCode: '364052', students: [30, 30, 30, 0]},
  {teacherCode: '3to7uh', students: [30, 30, 30, 0]},
  {teacherCode: 'nww75',  students: [30, 30, 30, 0]},
  {teacherCode: '2c7db',  students: [30, 30, 30, 0]},
  {teacherCode: '9mhdd',  students: [30, 30, 30, 0]},
  {teacherCode: 't1bmm',  students: [30, 30, 30, 0]},
  {teacherCode: 'ywxcsd', students: [30, 30, 30, 0]},
  {teacherCode: 'd01m4y', students: [30, 30, 30, 0]},
  {teacherCode: 'x6t2nx', students: [30, 30, 30, 0]},
  {teacherCode: 'af7eui', students: [30, 30, 30, 0]},
  {teacherCode: 'e6h34j', students: [30, 30, 30, 0]},
  {teacherCode: '6h36iy', students: [30, 30, 30, 0]},
  {teacherCode: 'dypvzw', students: [30, 30, 30, 0]},
  {teacherCode: 'ayidqn', students: [30, 30, 30, 0]}
];

// -----------------------------------------------------------------------------

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));
for (const y of Object.keys(pageData)) pageData[y].reverse();

async function run() {
  const userData = await fb.database().ref('users').once('value');
  const users = Object.values(userData.toJSON());
  console.log(`Loading ${users.length} users...`);

  const length = Math.max(...[7, 8, 9, 10].map(i => pageData['year' + i].length));

  const results = ['School, Teacher Code, Year, Number of Students'];
  for (let i = 1; i <= length; ++i) {
    results[0] += `, PG${i} Completion, PG${i} Avg Score`;
  }

  for (const s of TTS_SCHOOLS) {
    const teacher = users.find(u => u.code === s.teacherCode);
    if (!teacher) {
      console.warn(`No teacher with code ${s.teacherCode}!`);
      continue;
    }

    for (const [j, y] of ['year7', 'year8', 'year9', 'year10'].entries()) {
      if (s.students[j] <= 0) continue;
      const data = [teacher.schoolName, s.teacherCode, y, s.students[j]];
      let totalAttempts = 0;

      for (let i = 0; i < length; ++i) {
        const p = pageData[y][i];
        if (!p) {
          console.warn(`No parallelogram with number ${i} for year ${y}!`);
          continue;
        }

        let attempts = 0;
        let totalScore = 0;

        for (let u of users) {
          if (u.teacherCode === s.teacherCode && u.level === y && u.answers) {
            const q = u.answers[p.url];
            if (q && q.submitted) {
              attempts += 1;
              totalScore += (+q.score || 0);
            }
          }
        }

        totalAttempts += attempts;
        data.push(attempts ? Math.round(attempts / s.students[j] * 100) + '%' : '');
        data.push(attempts ? Math.round(totalScore / attempts) : '');
      }

      if (totalAttempts > 0) results.push(data.join(','));
    }
  }

  const str = results.join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/results-tts.csv`), str);

  console.log('Done!');
  process.exit();
}

run();
