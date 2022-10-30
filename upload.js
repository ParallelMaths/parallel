
const uploadData = require('./private/transformed.json');

const fb = require('firebase-admin');
const serviceAccount = require('./private/service-account.json');

fb.initializeApp({
    credential: fb.credential.cert(serviceAccount),
    databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const userDb = fb.firestore().collection('users');

function chunkArrayInGroups(arr, size) {
    var myArray = [];
    for (var i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i + size));
    }
    return myArray;
}

const ids = Object.keys(uploadData);

const idChunks = chunkArrayInGroups(ids, 50)

const run = async () => {
    for (const chunk of idChunks) {
        const promises = chunk.map(id => {

            // if(uploadData[id].NEWTOUCHED) {
                // console.log('New', id, { answers: uploadData[id].answers })
            // }

            

            return userDb.doc(id).set({ answers: uploadData[id].answers || {} }, {merge: true}).then(() => {
                console.log(`DONE - ${id}`)
            });
        });

        await Promise.all(promises);
    }
}

run();
