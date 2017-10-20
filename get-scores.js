// This file can be used to generate a table of scores from the Firebase FB.
// Export the entire Firebase DB as json, and place it as
// 'parallel-cf800-export.json' into the root of this directory.

const fs = require('fs');
const {users, answers} = require('./data/parallel-cf800-export.json');



function isCorrect(a, b) {
  a = ('' + a).trim().replace(/\,/g, '');
  b = ('' + b).trim().replace(/\,/g, '');
  return a === b;
}

function sumazeScore(x) {
  if (!x) return 0;

  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let L = x[0];
  let T = +x.slice(1) - 3141;
  let N = 11 + ((alphabet.indexOf(L.toUpperCase()) + 13) % 26);

  let S = T / N;
  return (S > 45 || S < 0) ? 0 : (S || 0);
}

const scoreFunctions = {
  1(a) {
    let score = 0;
    if (a.p_1_1 === 'b') score += .5;
    if (a.p_1_2 === 'c') score += .5;
    if (a.p_1_3 === 'a') score += .5;
    if (a.p_1_4 === 'a') score += .5;
    if (a.p_2_1 == 4) score += 2;
    if (a.p_3_1 === 'c') score += 1;
    if (isCorrect(a.p_3_2, 1275)) score += 1;
    if (isCorrect(a.p_3_3, 500500)) score += 1;
    if (a.p_4_1 === 'a') score += 1;
    if (a.p_5_1a && !a.p_5_1b && !a.p_5_1c) score += 1;
    if (a.p_6_1 === 'a') score += 1;
    return score;
  },
  2(a) {
    let score = 0;
    if (a.p_1_1b && a.p_1_1c && !a.p_1_1a && !a.p_1_1d && !a.p_1_1e) score += 1;
    if (a.p_1_2 === 'b') score += 2;
    if ((a.p_1_3b || a.p_1_3c) && !a.p_1_3a && !a.p_1_3d && !a.p_1_3e) score += 1;
    if ((a.p_1_4d || a.p_1_4e) && !a.p_1_4a && !a.p_1_4b && !a.p_1_4c && !a.p_1_4f) score += 1;
    if (a.p_1_5 == 10) score += 3;
    if (a.p_1_5 == 9 || a.p_1_5 == 11) score += 2;
    if (a.p_1_5 == 8 || a.p_1_5 == 12) score += 1;
    if (a.p_2_1 === 'b') score += .5;
    if (a.p_3_1 == 9) score += 4;
    if (a.p_5_1 === 'd') score += 1;
    return score * 10 / 13.5;
  },
  3(a) {
    let score = 0;
    if (a.p_1_1 === 'c') score += 1;
    if (a.p_1_2 === 'd') score += 1;

    if (isCorrect(a.p_2_1, 16384)) score += 1;
    if (isCorrect(a.p_2_2, 524288)) score += 1;
    if (isCorrect(a.p_2_3, 2147483648)) score += 1;
    if (a.p_2_4 === 'c') score += 2;
    if (isCorrect(a.p_2_5a, 600)) score += 1;
    if (isCorrect(a.p_2_5b, 630)) score += 1;
    if (a.p_2_5c === 'b') score += 1;

    score += sumazeScore(a.p_3_1) / 10;

    if (a.p_5_1 === 'e') score += 2;

    if (a.p_6_1 === 'a') score += 2;
    if (a.p_6_2 === 'b') score += 2;
    if (a.p_6_3 === 'd') score += 2;

    return score * 10 / 22.5;
  },
  4(a) {
    let score = 0;

    if (a.p_1_1c) score += 1;
    if (a.p_1_1d) score += 1;
    if (a.p_1_1f) score += 1;
    if (a.p_1_1g) score += 1;

    score += sumazeScore(a.p_2_1) / 10 || 0;   // 4.5
    score += Math.min(1, a.mathigon) * 5 || 0;

    if (a.p_5_1 === 'c') score += 2;
    if (a.p_5_2 === 'c') score += 2;
    if (a.p_5_3 === 'a') score += 2;

    return score * 10 / 19.5;
  }
};


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
