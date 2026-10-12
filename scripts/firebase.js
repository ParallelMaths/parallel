const path = require('path');
const { spawnSync } = require('child_process');
const { projectAlias } = require('./utils/firebase-config');

const firebaseBin = require.resolve('firebase-tools/lib/bin/firebase.js');

const { status } = spawnSync(
  process.execPath,
  [firebaseBin, ...process.argv.slice(2), '--project', projectAlias],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      GOOGLE_APPLICATION_CREDENTIALS: path.join(__dirname, '../private/service-account.json'),
    },
  }
);

process.exit(status === null ? 1 : status);
