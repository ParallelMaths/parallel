const fs = require('fs');
const path = require('path');

// First, export user data JSON from Firebase dashboard.
const data = require('../private/parallel-cf800-export.json');

for (const v of Object.values(data.users)) {
  delete v.hasSeenWelcomeMsg;
  if (v.code || v.level === 'graduated') continue;

  if (!v.showWelcomeMsg) v.level = ({year7: 'year8', year8: 'year9', year9: 'year10', year10: 'year11', year11: 'graduated'}[v.level] || 'year6');
  if (v.level !== 'year6') v.showWelcomeMsg = true;

  for (let p of Object.values(v.answers || {})) {
    if (!p.archive) p.archive = 2020;
  }
}

const str = JSON.stringify(data);
fs.writeFileSync(path.join(__dirname, `../private/parallel-cf800-export-new.json`), str);
