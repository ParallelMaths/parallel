const fs = require('fs');
const path = require('path');

const run = async () => {
  const oldUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../private/before-cache-users.json'), 'utf8')).data;

  const newUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../private/cache-users.json'), 'utf8')).data;

  for(const id in oldUsers) {
    const old = oldUsers[id];
    const newU = newUsers[id];

    if(!old.code) {
       console.log(id, old.level, newU.level);
    }
  }
};

run();
