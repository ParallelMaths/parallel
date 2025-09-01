const fb = require('firebase-admin');
const initializeFirebase = require("./utils/initializeFirebase");
initializeFirebase();


// ---------------------
const PG = 'academy-8sum-week-7';
const QUESTION = 'p_1_1_0';
const IF_ANSWER = '216';
const THEN_ANSWER = '216';
const ADD_POINTS = 2;
// ---------------------

const userDb = fb.firestore().collection('users');

async function updateAnswers() {
  const userData = await userDb.get();
  const users = userData.docs.map(u => [u.id, u.data()])
  let count = 0;

  for (let [u, user] of users) {
    const answers = user.answers?.[PG];
    if (!answers || !answers.submitted) continue;
    if (answers[QUESTION] !== IF_ANSWER) continue;

    const points = Math.min(answers.total, answers.points + ADD_POINTS);
    const score = Math.round(100 * points / answers.total);

    await userDb.doc(u).set({answers: {[PG]: {[QUESTION]: THEN_ANSWER, points, score}}}, {merge: true});

    console.log(`  Updated score for ${user.first} ${user.last}: ${score}%`);
    count += 1;
  }

  console.log(`  TOTAL: ${count} users updated.`)
}

updateAnswers().then(() => process.exit());
