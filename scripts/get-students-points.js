const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');
const downloadUsers = require('./utils/downloadUsers');
const isProfileComplete = require('../functions/utilities/profileComplete');
const { getCirclePointsForUsers } = require('./utils/dynamodb');
const { getPgPoints, LEVELS } = require('../functions/utilities/pgPoints');

const run = async () => {
  let users = await downloadUsers();

  const circlePoints = await getCirclePointsForUsers();

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const keys = ['id', 'email', 'first', 'second']
  LEVELS.forEach(level => keys.push(`${level}Total`))
  LEVELS.forEach(level => keys.push(`${level}PgTotal`))
  LEVELS.forEach(level => keys.push(`${level}CircleTotal`))
  let students = `${keys.join(',')}\n`

  for (let a of accounts) {
    const u = users[a.localId];
    if (!u || u.code) continue;

    const studentCirclePoints = circlePoints[a.localId] || {};
    const studentPgPoints = getPgPoints(u) || {};
    const combined = LEVELS.reduce((acc, level) => {
      acc[level] = (studentCirclePoints[level] || 0) + (studentPgPoints[level] || 0);
      return acc;
    }, {})

    const values = [`"${a.localId}"`, `"${a.email}"`, `"${u.first}"`, `"${u.last}"`]
    LEVELS.forEach(level => values.push(`"${combined[level] || 0}"`))
    LEVELS.forEach(level => values.push(`"${studentPgPoints[level] || 0}"`))
    LEVELS.forEach(level => values.push(`"${studentCirclePoints[level] || 0}"`))

    students += `${values.join(',')}\n`
  }

  fs.writeFileSync(path.join(__dirname, `../private/student-points.csv`), students);

  console.log('Saved to private/student-points.csv')

  process.exit();
}

run();
