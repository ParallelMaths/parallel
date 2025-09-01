const fb = require("firebase-admin");
const serviceAccount = require("../private/service-account.json");

const isProdProject = !serviceAccount.project_id.includes("beta");

const initializeFirebase = () => {
    fb.initializeApp({
        credential: fb.credential.cert(serviceAccount),
        databaseURL: isProdProject ? `https://parallel-cf800.firebaseio.com` : `https://parallel-beta-31dc4.firebaseio.com`,
    });
}

module.exports = initializeFirebase;
