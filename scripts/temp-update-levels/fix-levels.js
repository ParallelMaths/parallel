const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const downloadUsers = require('../utils/downloadUsers');
const { getPaginatedTableItems } = require('../utils/dynamodb');

function NEW_getLevelFromDob(birthMonth, birthYear) {
  const level = 'year6';

  let age = 0;

  if (!birthMonth || !birthYear)
    return level;

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = currentMonth >= 9 ? now.getFullYear() : now.getFullYear() - 1;

  // Born before september
  if (birthMonth < 9) {
    age = currentYear - birthYear;
  }
  else {
    age = currentYear - birthYear - 1;
  }

  if (age >= 15)
    return 'year11';
  if (age === 14)
    return 'year10';
  if (age === 13)
    return 'year9';
  if (age === 12)
    return 'year8';
  if (age === 11)
    return 'year7';
  if (age <= 10)
    return 'year6';

  return level;
}

function OLD_getLevelFromDob(birthMonth, birthYear) {
  const level = 'year6';

  let age = 0;

  if (!birthMonth || !birthYear)
    return level;

  const currentYear = new Date().getFullYear();

  // Born before september
  if (birthMonth < 9) {
    age = currentYear - birthYear;
  }
  else {
    age = currentYear - birthYear - 1;
  }

  if (age >= 15)
    return 'year11';
  if (age == 14)
    return 'year10';
  if (age == 13)
    return 'year9';
  if (age == 12)
    return 'year8';
  if (age == 11)
    return 'year7';
  if (age <= 10)
    return 'year6';

  return level;
}

const userDb = fb.firestore().collection('users');
const run = async () => {
  const users = await downloadUsers();

  console.log('\n\n\n\n');

  const file = path.join(__dirname, `../../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const data = await getPaginatedTableItems('prod-users');

  const euclidDataById = data.reduce((acc, entry) => {
    acc[entry.id] = entry;
    return acc;
  }, {});

  const output = [];

  for (const userId in euclidDataById) {
    const euclidData = euclidDataById[userId];
    const account = accounts.find(a => a.localId === userId);
    if (!account) continue;
    
    const u = users[userId];
    if (!u) continue;

    if (!euclidData.euclidStudentSchoolIds || euclidData.euclidStudentSchoolIds.length === 0) {
      continue;
    }

    const oldLevel = OLD_getLevelFromDob(u.birthMonth, u.birthYear);
    const newLevel = NEW_getLevelFromDob(u.birthMonth, u.birthYear);

    if (oldLevel === newLevel) continue;

    if (newLevel === u.level) continue;

    output.push({
      email: account.email,
      userId,
      oldLevel,
      newLevel,
    })
  }

  fs.writeFileSync(path.resolve(__dirname, '../../private/move-levels.json'), JSON.stringify(output, null, 2));

  process.exit();
}

run();
