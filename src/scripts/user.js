// =============================================================================
// Parallel User
// =============================================================================



export default function(signup, pages) {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  const challenges = {};
  for (let year of Object.keys(pages))
    for (let c of pages[year]) challenges[c.url] = c;

  const callbacks = [];

  const user = {
    data: null,
    ready: false,
    level: 'year7',
    answers: {},
    uid: null,

    onLoad(fn) { callbacks.push(fn); },

    logout() {
      fbAuth.signOut().then(() => {
        user.data = user.uid = null;
        user.answers = {};
        for (let c of callbacks) c();
      })
    },

    async load(u) {
      if (signup.loading) return;  // Don't refresh while users are signing up.
      if (!u) return user.ready = true;
      user.uid = u.uid;

      try {
        const userData = await fbDatabase.ref('users/' + u.uid).once('value');
        user.data = userData.toJSON();
        user.level = user.data.level || 'year7';

        const answers = await fbDatabase.ref('answers/' + u.uid).once('value');
        user.answers = answers.toJSON() || {};

        for (let c of callbacks) c();
        user.ready = true;

      } catch(error) {
        // TODO Handle error.
        console.error(error);
        user.ready = true;
      }
    },

    getStatus(challenge) {
      const now = Date.now();
      const answers = user.answers[challenge.url] || {};

      if (now < new Date(challenge.available)) return 'locked';
      if (!user.data) return 'preview';
      if (now < new Date(challenge.deadline))
        return answers.submitted ? 'submitted' : 'open';
      return answers.submitted ? 'revealed' : 'past';
    },

    getScore(challenge) {
      if (!user.ready) return 0;
      const answers = user.answers[challenge.url];
      if (!answers) return 0;
      return Math.round((answers.score || 0) * 100);
    },

    getLevel(challenge) {
      const score = user.getScore(challenge);
      return getLevel(score);
    },

    acceptTerms() {
      user.data.acceptedTerms = true;
      fbDatabase.ref('users/' + user.uid).update({acceptedTerms: true});
    }
  };

  fbAuth.onAuthStateChanged(u => user.load(u));
  return user;
};

export function getLevel(score) {
  if (score >= 90) return 'tesseract';
  if (score >= 70) return 'cube';
  if (score >= 50) return 'square';
  if (score >= 20) return 'line';
  return 'point';
}
