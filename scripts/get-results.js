const fs = require('fs');
const path = require('path');
const yaml = require('yamljs');
const downloadUsers = require('./utils/downloadUsers');

// -----------------------------------------------------------------------------
// Edit below.
// Set the time string to '' to stop filtering by submission time.

const START_TIME = '1692828000000';
const END_TIME = '';

// -----------------------------------------------------------------------------

function inTimeRange(q) {
  if (START_TIME && (!q.time || q.time < START_TIME)) return false;
  if (END_TIME && (!q.time || q.time > END_TIME)) return false;
  return true;
}


const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));

let pages = [...pageData.year6, ...pageData.year7, ...pageData.year8, ...pageData.year9, ...pageData.year10, ...pageData.year11, ...pageData.test];
pages = pages.filter(p => new Date(p.available) < Date.now());

async function run() {
  const usersObject = await downloadUsers();
  const users = Object.entries(usersObject);

  const emailData = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(emailData)).users;
  const emailMap = {};
  for (let a of accounts) emailMap[a.localId] = a.email;

  const summary = {};

  // ---------------------------------------------------------------------------

  for (let p of pages) {
    const titles = ['name', 'email', 'school', 'time (min)', 'score'];
    const data = [];

    for (let [id, user] of users) {
      if (user.code || !user.answers) continue;  // exclude teachers

      const answer = user.answers[p.url];
      if (!answer || answer.archive || !answer.submitted || !inTimeRange(answer)) continue;

      const name = p.url.split('-').map(i => +i).slice(0, 2).join('-');

      if(/^\d/.test(p.url[0])) {
        summary[name] = (summary[name] || 0) + 1;
      }

      const d = [
        user.first + ' ' + user.last,
        emailMap[id],
        `"${user.schoolName || ''}"`,
        Math.round((answer.time - answer.firstAnswer) / 1000 / 60) || '',
        answer.score ? (answer.score + '%') : ''
      ];

      for (let key of Object.keys(answer)) {
        if (['firstAnswer', 'points', 'time', 'total', 'submitted'].includes(key)) continue;
        if (titles.indexOf(key) <= 0) titles.push(key);
      }
      for (let i=5; i<titles.length; ++i) d.push(answer[titles[i]] || '""');

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
  for (let [id, user] of users) {
    if (!user.answers || user.code) continue;

    const answers = pages.map(p => {
      const a = user.answers[p.url];
      return (!a || a.archive) ? '' : (a.score || '');
    });

    const sum = answers.reduce((a, b) => (a || 0) + (b || 0), 0);
    if (sum > 0) data.push([
      `"${user.first} ${user.last}"`,
      emailMap[id],
      `"${user.schoolName || ''}"`,
      ...answers, sum
    ]);
  }

  const str = [titles, ...data].map(d => d.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/results.csv`), str);

  // ---------------------------------------------------------------------------

  const weeks = Math.max(...Object.keys(summary).map(c => +c.split('-')[1]));
  const rows = [['', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11']];
  for (let w = 1; w <= weeks; ++w) {
    rows.push([`Week ${w}`, ...[6, 7, 8, 9, 10, 11].map(i => summary[`${i}-${w}`])])
  }

  const str1 = rows.map(d => d.join(',')).join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/summary.csv`), str1);
  console.log('Results saved')
  process.exit();
}

run();
