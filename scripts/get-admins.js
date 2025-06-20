const fs = require('fs');
const path = require('path');
const downloadUsers = require('./utils/downloadUsers');

const run = async () => {
  await downloadUsers();

  const emailData = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(emailData)).users;
  const accountsWithCustomAttributes = accounts.filter(a => a.customAttributes).map(a => (
    {
      email: a.email,
      localId: a.localId,
      circlesAdmin: JSON.parse(a.customAttributes).account_type === 'ADMIN',
      academyAdmin: JSON.parse(a.customAttributes).euclid_type === 'ADMIN',
    }
  )).filter(a => a.circlesAdmin || a.academyAdmin);

  for (const account of accountsWithCustomAttributes) {
    console.log(`\nEmail: ${account.email}, Local ID: ${account.localId}`);

    if (account.circlesAdmin) {
      console.log('  Circles Admin');
    }
    if (account.academyAdmin) {
      console.log('  Academy Admin');
    }
  }


  process.exit();
}

run();
