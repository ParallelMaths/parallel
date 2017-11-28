// =============================================================================
// Parallel User
// =============================================================================



export default function(signup, pages) {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  const challenges = {};
  for (let year of Object.keys(pages))
    for (let c of pages[year]) challenges[c.url] = c;

  const user = {
    data: null,
    ready: false,
    level: 'year7',
    answers: {},
    onLoad: null,
    uid: null,

    logout() {
      fbAuth.signOut().then(() => {
        user.data = user.uid = null;
        user.answers = {};
        if (user.onLoad) user.onLoad();
      })
    },

    load(u) {
      if (signup.loading) return;  // Don't refresh while users are signing up.
      if (!u) return user.ready = true;
      user.uid = u.uid;

      fbDatabase.ref('users/' + u.uid).once('value')
        .then(u => {
          user.data = u.toJSON();
          user.level = user.data.level || 'year7';
        })
        .catch(e => { console.error(e); })  // TODO Handle error.
        .then(() => { user.ready = true; });

      fbDatabase.ref('answers/' + u.uid).once('value')
        .then(a => {
          user.answers = a.toJSON() || {};
          if (user.onLoad) user.onLoad();
        })
        .catch(e => { console.error(e); });
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
      if (score >= 90) return 'tesseract';
      if (score >= 70) return 'cube';
      if (score >= 50) return 'square';
      if (score >= 20) return 'line';
      return 'point';
    }
  };

  fbAuth.onAuthStateChanged(u => user.load(u));
  return user;
};
