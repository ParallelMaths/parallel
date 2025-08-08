const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const fs = require('fs');
const fb = require('firebase-admin');
const serviceAccount = require('../../private/service-account.json');

fb.initializeApp({
    credential: fb.credential.cert(serviceAccount),
    databaseURL: 'https://parallel-beta-31dc4.firebaseio.com'
});

const cacheFilePath = path.join(__dirname, `../../private/cache-users.json`);

const cacheLengthMs = 1000*60*60;

const runDownload = async () => {
    const command = 'npm run export-users';
    console.log('Downloading user auth accounts');
    try {
        const { stderr } = await exec(command);
        if(stderr) {
            console.error('Error:', stderr);
            process.exit(1);
        }
    } catch (err) {
       console.error(err);
    };
}

const loadAllUserData = async (limit, offset, users) => {
    const newUsers = await fb.firestore().collection('users').offset(offset).limit(limit).get().then(data => 
        data.docs.reduce((acc, doc) => {
        acc[doc.id] = doc.data();
        return acc;
    }, {}));

    const newUserCount = Object.keys(newUsers).length;

    if (Object.keys(newUsers).length > 1) {
        console.log('Batch download in progress - Found', newUserCount, 'data users');
        return loadAllUserData(limit, offset + limit, {...users, ...newUsers})
    }

    return {...users, ...newUsers};
}



const runAll = async () => {


    if(fs.existsSync(cacheFilePath)) {
        const cache = fs.readFileSync(cacheFilePath);
        const cacheData = JSON.parse(cache);

        if(cacheData.time) {
            if((Date.now() - cacheLengthMs) < cacheData.time) {
                const secsDiff = Math.floor((Date.now() - cacheData.time)/1000)
                const minsDiff = Math.floor(secsDiff/60);
                console.log('Found cache from', minsDiff > 0 ? `${minsDiff} minutes ago` : `${secsDiff} seconds ago`);
                console.log('Cache location', cacheFilePath);
                console.log('Using', Object.keys(cacheData.data).length, 'users from cache')
                return cacheData.data;
            } else {
                console.log('Found out of date cache, downloading new data');
            }
        } else {
            console.log('Error - Found data cache with no timestamp');
        }
    }

    await runDownload();

    const file = path.join(__dirname, `../../private/tmp-users.json`);
    const authAccounts = JSON.parse(fs.readFileSync(file)).users;

    console.log('Found', authAccounts.length, 'auth accounts');

    const dataAccounts = await loadAllUserData(10000, 0, {});

    console.log('Found', Object.keys(dataAccounts).length, 'data accounts');

    const missing = authAccounts.filter(({localId}) => !dataAccounts[localId])

    console.log(`Was unable to find`, missing.length, 'data accounts');
    // console.log(missing.map(({localId}) => localId).join());

    fs.writeFileSync(cacheFilePath, JSON.stringify({
        time: Date.now(),
        data: dataAccounts
    }, null, 4))

    return dataAccounts;
}

const downloadUsers = async () => {
    console.log('Loading users')

    const users = await runAll();

    console.log('Using', Object.keys(users).length, 'users!');

    return users
}

module.exports = downloadUsers;
