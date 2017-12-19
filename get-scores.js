// This file can be used to generate a table of scores from the Firebase FB.
// Export the entire Firebase DB as json, and place it as
// 'parallel-cf800-export.json' into the root of this directory.

const fs = require('fs');
const {users, answers} = require('./private/parallel-cf800-export.json');


for (let i=1; i<=4; ++i) {
  let rows = [];
  const columns = ['first', 'last', 'school', 'country', 'gender', 'birthYear',
    'difficulty', 'fun', 'interesting', 'length', 'submitted', 'score'];

  for (let uid of Object.keys(answers)) {
    if (!(i in answers[uid])) continue;
    if (!uid in users) continue;

    const answer = answers[uid][i];
    const user = users[uid];
    if (!answer || !user) continue;
    const score = Math.round(scoreFunctions[i](answer) * 10);

    const row = [user.first, user.last, user.school, user.country, user.gender,
      user.birthYear, answer.difficulty, answer.fun, answer.interesting,
      answer.length, answer.submitted, score];

    for (let p of Object.keys(answer)) if (!columns.includes(p)) columns.push(p);
    for (let p of columns.slice(12)) row.push(answer[p]);

    rows.push(row);
  }

  rows = rows.sort((a, b) => b[11] - a[11]);

  let result = columns.join(',') + '\n';
  result += rows.map(row => row.map(x => `"${x || ''}"`).join(',')).join('\n');

  fs.writeFileSync(`./data/score-${i}.csv`, result);
}
