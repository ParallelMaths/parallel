const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const csv = require("csvtojson");
const serviceAccount = require('../private/service-account.json');

// --------

const csvPath = "/Users/drew/Downloads/Admissions July 3 2024.csv";
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

const updatableFields = [
    'guardianName',
    'guardianPhone',
    'schoolName',
    'schoolPostcode'
];

const getUploadableData = (csvDataEntry) => {
    const foundKeys = Object.keys(csvDataEntry);

    const uploadableData = {};

    foundKeys.forEach(foundKey => {
        if (foundKey.toLowerCase() === emailField.toLowerCase()) {
            uploadableData.email = csvDataEntry[foundKey];
        }

        updatableFields.forEach(field => {
            if (foundKey.toLowerCase() === field.toLowerCase()) {
                if (!['', '-', 'n/a'].includes(csvDataEntry[foundKey].trim())) {
                    uploadableData[field] = csvDataEntry[foundKey];
                }
            }
        });
    });

    if (!uploadableData.email) {
        console.log(`\nNo email field found`);
        process.exit(1);
    }

    return uploadableData;
}

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

    const data = csvData.map(getUploadableData).map(d => {
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
        const newData = {};

        if (d.guardianName) newData.guardianName = d.guardianName;
        if (d.guardianPhone) newData.guardianPhone = d.guardianPhone;
        if (d.schoolName) newData.schoolName = d.schoolName;
        if (d.schoolPostcode) newData.schoolPostcode = d.schoolPostcode;

        if (dryRun) {
            console.log(`\nWould update ${d.email} (${d.id}) with`);
            console.log(newData);
        } else {
            console.log(`\nUpdating ${d.email} ${d.id} with`);
            console.log(newData);
            await userDb.doc(d.id).set(newData, { merge: true });
            console.log(`Updated ${d.email} complete`);
        }
    }

    if (dryRun) {
        console.log(`\n\n\nSet dryRun to false to actually update the data\n`);
    }
}


run();
