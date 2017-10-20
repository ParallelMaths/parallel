// =============================================================================
// Parallel User
// =============================================================================



export default function(signup) {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  const user = {
    data: null,
    ready: false,
    level: 'year7',
    answers: {},

    logout() {
      fbAuth.signOut().then(() => { user.data = null; })
    },

    load(u) {
      if (signup.loading) return;  // Don't refresh while users are signing up.
      if (!u) return user.ready = true;

      fbDatabase.ref('users/' + u.uid).once('value')
        .then(u => {
          user.data = u.toJSON();
          user.level = user.data.level || 'year7';
        })
        .catch(e => { console.error(e); })  // TODO Handle error.
        .then(() => { user.ready = true; });

      fbDatabase.ref('answers/' + u.uid).once('value')
        .then(a => { Vue.set(user.answers, a.toJSON() || {}); })
        .catch(e => { console.error(e); });
    }
  };

  fbAuth.onAuthStateChanged(u => user.load(u));
  return user;
};
