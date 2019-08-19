const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');
const yaml = require('yamljs');

const extract = [
  "gaqdu",
  "mg4414",
  "h343j",
  "qw6ok",
  "fd5ryc",
  "z8yevt",
  "9h9mga",
  "frwics",
  "muigu",
  "14lq9e",
  "onwaes",
  "agv1u",
  "ahupq9",
  "et857w",
  "9knp4",
  "ojiy8q",
  "a896w",
  "cb8sj",
  "yjhx14",
  "364052",
  "3to7uh",
  "nww75",
  "2c7db",
  "9mhdd",
  "t1bmm",
  "ywxcsd",
  "d01m4y",
  "x6t2nx",
  "af7eui",
  "e6h34j",
  "6h36iy",
  "dypvzw",
  "ayidqn"
];

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));
const pages = [...pageData.year7, ...pageData.year8, ...pageData.year9, ...pageData.year10];

async function run() {
  const userData = await fb.database().ref('users').once('value');
  const users = userData.toJSON();

  const emailData = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(emailData)).users;
  const emailMap = {};
  for (let a of accounts) emailMap[a.localId] = a.email;

  // ---------------------------------------------------------------------------

  for (let p of pages) {
    const titles = ['name','email','school','teacher_code','country','submitted','score'];
    const data = [];

    for (let u of Object.keys(users)) {
      if (!users[u].answers || !users[u].answers[p.url]) continue;
      if (users[u].code) continue;  // exclude teachers

      const user = users[u];
      const answer = users[u].answers[p.url];

      const d = [
        user.first + ' ' + user.last,
        emailMap[u],
        `"${users[u].schoolName || ''}"`,
        users[u].teacherCode,
        `"${users[u].country}"`,
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

    const data1 = data.filter(d => extract.indexOf(d[3]) >= 0);
    data1.sort((a, b) => { return a[3] < b[3] ? 1 : a[3] > b[3] ? -1 : 0; });
    const rowsStr1 = data1.map(d => d.join(',')).join('\n');
    fs.writeFileSync(path.join(__dirname, `../private/results-${p.url}-tts.csv`), titlesStr + rowsStr1);
  }

  // ---------------------------------------------------------------------------

  const titles = ['name', 'email', 'school', 'teacher_code', ...pages.map(p => p.url), 'total'];
  const data = [];
  for (let u of Object.keys(users)) {
    if (!users[u].answers || users[u].code) continue;

    const a = pages.map(p => ((users[u].answers[p.url] || {}).score || 0));
    const sum = a.reduce((a, b) => a + b, 0);
    if (sum>0) data.push([
      `"${users[u].first} ${users[u].last}"`,
      emailMap[u],
      `"${users[u].schoolName || ''}"`,
      users[u].teacherCode,
      ...a, sum
    ]);
  }

  const str = [titles, ...data].map(d => d.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/results.csv`), str);

  const data1 = data.filter(d => extract.indexOf(d[3]) >= 0);
  const str1 = [titles, ...data1].map(d => d.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/results-tts.csv`), str1);

  // ---------------------------------------------------------------------------

  process.exit();
}

run();
