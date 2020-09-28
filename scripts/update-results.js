const fb = require('firebase-admin');
const serviceAccount = require('../private/service-account.json');


// ---------------------
const PG = '11-03-mars-ingenuity';
const QUESTION = 'p_5_1';
const IF_ANSWER = 'b';
const THEN_ANSWER = 'b';
const ADD_POINTS = 5;
// ---------------------


fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

async function updateAnswers() {
  const userData = await fb.database().ref('users').once('value');
  const users = userData.toJSON();
  let count = 0;

  for (let u of Object.keys(users)) {
    if (!users[u].answers) continue;

    const answers = users[u].answers[PG];
    if (!answers || !answers.submitted) continue;
    if (answers[QUESTION] !== IF_ANSWER) continue;

    const points = Math.min(answers.total, answers.points + ADD_POINTS);
    const score = Math.round(100 * points / answers.total);

    await fb.database().ref(`users/${u}/answers/${PG}`)
        .update({[QUESTION]: THEN_ANSWER, points, score});

    console.log(`  Updated score for ${users[u].first} ${users[u].last}: ${score}%`);
    count += 1;
  }

  console.log(`  TOTAL: ${count} users updated.`)
}

updateAnswers().then(() => process.exit());
