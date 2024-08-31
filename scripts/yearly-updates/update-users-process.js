const fs = require('fs');
const path = require('path');
const downloadUsers = require('../utils/downloadUsers');

const processAccount = (user) => {
  const v = {...user};

  if (v.code) return v;

  v.level = ({year6: 'year7', year7: 'year8', year8: 'year9', year9: 'year10', year10: 'year11', year11: 'graduated', graduated: 'graduated'}[v.level] || 'year6');
  
  if (v.level !== 'year6' && user.level !== 'graduated') v.showWelcomeMsg = true;

  return v;
}

const run = async () => {
  let users = await downloadUsers();

  let newUsers = Object.entries(users).reduce((acc, [id, user]) => {
    const processed = processAccount(user);

    acc[id] = {
      oldShowWelcomeMsg: user.showWelcomeMsg,
      oldLevel: user.level,
      level: processed.level,
      showWelcomeMsg: processed.showWelcomeMsg,
    }
    return acc;
    
  }, {});

  fs.writeFileSync(path.resolve(__dirname, '../private/new-cache-users.json'), JSON.stringify(newUsers, null, 2));
};

run();
