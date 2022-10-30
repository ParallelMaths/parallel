
const uploadData = require('./private/transformed.json');

const fb = require('firebase-admin');
const serviceAccount = require('./private/service-account.json');

const mapping = {
    "11-07-colliding-vortexes": fb.firestore.FieldValue.delete(),
    "11-08-borromean-rings": fb.firestore.FieldValue.delete(),
    "11-09-a-cats-tale": fb.firestore.FieldValue.delete(),
    "11-10-hanging-a-picture": fb.firestore.FieldValue.delete(),
    "11-11-fractals": fb.firestore.FieldValue.delete(),
    "11-12-gravity": fb.firestore.FieldValue.delete(),
    "11-13-twelve-days-christmas": fb.firestore.FieldValue.delete(),
    "10-08-map-mathematics": fb.firestore.FieldValue.delete(),
    "10-09-paper-mysteries": fb.firestore.FieldValue.delete(),
    "10-10-other-hamilton": fb.firestore.FieldValue.delete(),
    "10-11-waterfalls": fb.firestore.FieldValue.delete(),
    "10-12-gravitation-waves": fb.firestore.FieldValue.delete(),
    "10-13-chrismaths": fb.firestore.FieldValue.delete(),
    "10-14-proof": fb.firestore.FieldValue.delete(),
    "10-15-optical-illusions": fb.firestore.FieldValue.delete(),
    "10-16-hypatia": fb.firestore.FieldValue.delete(),
    "10-17-monkey-magic": fb.firestore.FieldValue.delete(),
    "10-18-smilla-sense-snow": fb.firestore.FieldValue.delete(),
    "10-19-tongue-twisters": fb.firestore.FieldValue.delete(),
    "10-20-earth-look-like": fb.firestore.FieldValue.delete(),
    "10-21-pieces-of-eight": fb.firestore.FieldValue.delete(),
    "10-22-evolution-rap": fb.firestore.FieldValue.delete(),
    "10-23-chess-in-church": fb.firestore.FieldValue.delete(),
    "10-24-easter-challlenges": fb.firestore.FieldValue.delete(),
    "10-25-asteroid-impact": fb.firestore.FieldValue.delete(),
    "10-26-ignobel-prize": fb.firestore.FieldValue.delete(),
    "10-27-alan-turing": fb.firestore.FieldValue.delete(),
    "10-28-mcnuggets": fb.firestore.FieldValue.delete(),
    "10-29-slinky-physics": fb.firestore.FieldValue.delete(),
    "10-30-a-trapped-knight": fb.firestore.FieldValue.delete(),
    "10-31-pi": fb.firestore.FieldValue.delete(),
    "10-32-lewis-carroll": fb.firestore.FieldValue.delete(),
    "10-33-juice-water": fb.firestore.FieldValue.delete(),
    "10-34-revolutionary-riddles": fb.firestore.FieldValue.delete(),
    "9-08-checkmate": fb.firestore.FieldValue.delete(),
    "9-09-clock-calculation": fb.firestore.FieldValue.delete(),
    "9-10-beautiful-mind": fb.firestore.FieldValue.delete(),
    "9-11-kenken": fb.firestore.FieldValue.delete(),
    "9-12-prime-time": fb.firestore.FieldValue.delete(),
    "9-13-chrismaths": fb.firestore.FieldValue.delete(),
    "9-15-bubble-solution": fb.firestore.FieldValue.delete(),
    "9-16-puzzle-compendium": fb.firestore.FieldValue.delete(),
    "9-17-shilling-thoughts": fb.firestore.FieldValue.delete(),
    "9-18-mean-girls": fb.firestore.FieldValue.delete(),
    "9-19-collision-mystery": fb.firestore.FieldValue.delete(),
    "9-20-four-colour-map-theorem": fb.firestore.FieldValue.delete(),
    "9-21-pendulum-patterns": fb.firestore.FieldValue.delete(),
    "9-22-bird-brain": fb.firestore.FieldValue.delete(),
    "9-23-more-water-jugs": fb.firestore.FieldValue.delete(),
    "9-24-easter-challenges": fb.firestore.FieldValue.delete(),
    "9-25-teachers-pets": fb.firestore.FieldValue.delete(),
    "9-26-qi-mathematics": fb.firestore.FieldValue.delete(),
    "9-27-circle-mystery": fb.firestore.FieldValue.delete(),
    "9-28-sphere-packing": fb.firestore.FieldValue.delete(),
    "9-29-mathematical-timeline": fb.firestore.FieldValue.delete(),
    "9-30-mathematical-plaques": fb.firestore.FieldValue.delete(),
    "9-31-tangrams": fb.firestore.FieldValue.delete(),
    "9-32-ham-sandwich-problem": fb.firestore.FieldValue.delete(),
    "9-33-number-riddles": fb.firestore.FieldValue.delete(),
    "9-34-richard-feynman-superhero": fb.firestore.FieldValue.delete(),
    "8-08-secret-maths-club": fb.firestore.FieldValue.delete(),
    "8-09-weird-shapes": fb.firestore.FieldValue.delete(),
    "8-10-chikas-test-seven": fb.firestore.FieldValue.delete(),
    "8-11-kenken": fb.firestore.FieldValue.delete(),
    "8-13-chrismaths": fb.firestore.FieldValue.delete(),
    "8-14-ma-kettle": fb.firestore.FieldValue.delete(),
    "8-15-lou-costello": fb.firestore.FieldValue.delete(),
    "8-16-flag-of-flags": fb.firestore.FieldValue.delete(),
    "8-17-dripping-taps": fb.firestore.FieldValue.delete(),
    "8-18-freezing-sports": fb.firestore.FieldValue.delete(),
    "8-19-countdown-levitating-water": fb.firestore.FieldValue.delete(),
    "8-20-curious-bear-doctor-who": fb.firestore.FieldValue.delete(),
    "8-21-computer-music": fb.firestore.FieldValue.delete(),
    "8-22-rattlebacks": fb.firestore.FieldValue.delete(),
    "8-23-colour-code-challenge": fb.firestore.FieldValue.delete(),
    "8-24-easter-challenges": fb.firestore.FieldValue.delete(),
    "8-25-north-pole": fb.firestore.FieldValue.delete(),
    "8-26-snake-mathematics": fb.firestore.FieldValue.delete(),
    "8-27-ada-lovelace": fb.firestore.FieldValue.delete(),
    "8-28-seven-bridges-konigsberg": fb.firestore.FieldValue.delete(),
    "8-29-mathematical-timeline": fb.firestore.FieldValue.delete(),
    "8-30-amazing-grace": fb.firestore.FieldValue.delete(),
    "8-31-floppy-pizza": fb.firestore.FieldValue.delete(),
    "8-32-rules-critical-thinking": fb.firestore.FieldValue.delete(),
    "8-33-more-rules-critical-thinking": fb.firestore.FieldValue.delete(),
    "8-34-miracle-chocolate": fb.firestore.FieldValue.delete(),
    "7-08-man-who-knew-infinity": fb.firestore.FieldValue.delete(),
    "7-09-futurama-maths": fb.firestore.FieldValue.delete(),
    "7-10-mercury-trivia": fb.firestore.FieldValue.delete(),
    "7-11-kenken": fb.firestore.FieldValue.delete(),
    "7-12-prime-time": fb.firestore.FieldValue.delete(),
    "7-13-chrismaths": fb.firestore.FieldValue.delete(),
    "7-14-codes-physics": fb.firestore.FieldValue.delete(),
    "7-15-marie-curie": fb.firestore.FieldValue.delete(),
    "7-16-crosses-crosses": fb.firestore.FieldValue.delete(),
    "7-17-sundogs-random-dots": fb.firestore.FieldValue.delete(),
    "7-18-downhill-from-here": fb.firestore.FieldValue.delete(),
    "7-19-pie-charts": fb.firestore.FieldValue.delete(),
    "7-20-optimise-pizza-money": fb.firestore.FieldValue.delete(),
    "7-21-tricky-parking-problem": fb.firestore.FieldValue.delete(),
    "7-22-maths-jokes": fb.firestore.FieldValue.delete(),
    "7-23-secret-happiness": fb.firestore.FieldValue.delete(),
    "7-24-easter-challenges": fb.firestore.FieldValue.delete(),
    "7-25-a-matter-factorial": fb.firestore.FieldValue.delete(),
    "7-26-good-will-hunting": fb.firestore.FieldValue.delete(),
    "7-27-hidden-figures": fb.firestore.FieldValue.delete(),
    "7-28-blackboard-equation": fb.firestore.FieldValue.delete(),
    "7-29-mathematical-timeline": fb.firestore.FieldValue.delete(),
    "7-30-josephs-machines": fb.firestore.FieldValue.delete(),
    "7-31-top-of-the-league": fb.firestore.FieldValue.delete(),
    "7-32-number-sense": fb.firestore.FieldValue.delete(),
    "7-33-aluminium-can-engineering": fb.firestore.FieldValue.delete(),
    "7-34-pet-puzzle": fb.firestore.FieldValue.delete(),
}

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
            return userDb.doc(id).set({ answers: mapping }, {merge: true}).then(() => {
                console.log(`DONE - ${id}`)
            });
        });
        await Promise.all(promises);
    }
}

run();
