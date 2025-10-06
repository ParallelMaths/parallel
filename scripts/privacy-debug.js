const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const downloadUsers = require('./utils/downloadUsers');
const {
  userNeedsGuardianTouchKey,
} = require('../functions/utilities/privacy/privacyKeys');
const { getPaginatedTableItems } = require('./utils/dynamodb');
const { getGuardianEmails } = require('../functions/utilities/getTypeSafeUser');

// ---------------------

const dry = true;

// ---------------------

const OneHour = 1000 * 60 * 60;

const userDb = fb.firestore().collection('users');
const run = async () => {
  let users = await downloadUsers(dry);

  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const data = await getPaginatedTableItems('prod-emails');

  const emailsByRecipient = data.reduce((acc, entry) => {
    if(!acc[entry.recipientEmail]) acc[entry.recipientEmail] = [];
    acc[entry.recipientEmail].push(entry);
    return acc;
  }, {});

  console.log('\n\n\n\n');

  for (let a of accounts) {
    const u = users[a.localId];
    if (!u) continue;

    if (u[userNeedsGuardianTouchKey] && u[userNeedsGuardianTouchKey] < Date.now() - OneHour) {
      const emails = getGuardianEmails(u);

      if(emails.length === 0) {
        console.log(`${a.email} needs guardian touch but has no guardian emails set`);
        process.exit(1);
      }

      for (let e of emails) {
        const email = e.toLowerCase().trim();

        if (email.includes('@mcmill.co.uk')) continue;

        if (!emailsByRecipient[email]?.length) {
          console.log(`No emails sent to ${email}`, a.localId);

          const updateBody = {
            [userNeedsGuardianTouchKey]: Date.now(),
          };

          if(!dry) {
            console.log('Updating user to need touch', updateBody);
            await userDb.doc(a.localId).set(updateBody, {merge: true});
          } else {
            console.log(u[userNeedsGuardianTouchKey])
            console.log(Date.now() - OneHour)
            console.log('---')
            console.log('Dry run, not updating', updateBody);
          }
        }
      }
    }
  }

  process.exit();
}

run();
