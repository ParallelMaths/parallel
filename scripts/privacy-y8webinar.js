const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const csv = require("csvtojson");
const serviceAccount = require('../private/service-account.json');
const {
    dueByKey,
    variantModeKey,
} = require('../functions/utilities/privacy/privacyKeys');

// --------

const csvPath = "/Users/drew.mcmillan/Downloads/year8.csv";
const emailField = 'email';
const dryRun = true; // when true, will just log what it will write, but not save it

// --------
// here be dragons
//

fb.initializeApp({
    credential: fb.credential.cert(serviceAccount),
    databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const userDb = fb.firestore().collection('users');

const run = async () => {
    const file = path.join(__dirname, `../private/tmp-users.json`);
    const accounts = JSON.parse(fs.readFileSync(file)).users;

    const accountsByEmail = accounts.reduce((acc, account) => {
        acc[account.email.toLowerCase()] = account;
        return acc
    }, {});

    let csvData;

    try {
        csvData = await csv().fromFile(csvPath);
    } catch (error) {
        console.error(`\nError reading csv file: ${error.message}\n`);
    }

    const data = csvData.map(d => {
        const account = accountsByEmail[d.email.toLowerCase()];

        if (account) {
            return {
                id: account.localId,
                ...d,
            }
        } else {
            console.log(`\nAccount not found for ${d.email}\n`);
            process.exit(1);
        }
    });

    for (const d of data) {
        const id = d.id;

        const mergeBody = {
            [dueByKey]: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            [variantModeKey]: 'year8webinar',
        };

        console.log(`\nUpdating ${d.email} (${id}) with`);
        console.log(mergeBody);

        if (!dryRun) {
            await userDb.doc(id).set(mergeBody, {merge: true});
        }
    }
}


run();
