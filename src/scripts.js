// =============================================================================
// Parallel Lines


function ready() {
  const fbApp = firebase.app();
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  fbAuth.onAuthStateChanged(loadUser);

  const submit = document.querySelector('#submit');
  const challengeId = submit ? submit.dataset.challenge : null;
  const availableTime = submit ? Date.parse(submit.dataset.available) : null;
  const deadlineTime = submit ? Date.parse(submit.dataset.deadline) : null;

  // This helps avoid FOUC while the user is loading...
  function show() {
    document.querySelector('#body').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
  }

  function loadUser(user) {
    // Don't refresh if users are in the process of signing up.
    if (signup.loading) return;

    if (!user) {
      app.status = status(false);
      return show();
    }

    fbDatabase.ref('users/' + user.uid).once('value').then(function(u) {
      app.user = u.toJSON();
      show();
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
    }).catch(function(e) {
      // TODO handle error
      console.log(e);
    });

    if (challengeId) {
      fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId).once('value')
        .then(answers => {
          let a = answers.toJSON();
          if (!a) return app.status = status(false);
          for (let k of Object.keys(a)) Vue.set(app.answers, k, a[k]);
          app.status = status(a.submitted);
        });
    }
  }

  function status(submitted) {
    let q = decodeURI(location.search.substring(1));
    let query = q?JSON.parse('{"' + q.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}'):{};
    if ('status' in query) return query.status;

    if (!submit) return null;
    let now = Date.now();

    if (now < availableTime) return 'locked';
    if (now < deadlineTime) return submitted ? 'submitted' : 'open';
    return submitted ? 'revealed' : 'past';
  }

  const signup = {
    error: null,
    loading: false,
    school: null,
    country: 'United Kingdom',
    birthYear: 2000,
    submit(e) {
      e.preventDefault();
      signup.loading = true;
      signup.error = null;

      fbAuth.createUserWithEmailAndPassword(signup.email, signup.password)
        .then(user =>  fbDatabase.ref('users/' + user.uid).set({
          first: signup.first,
          last: signup.last,
          birthYear: signup.birthYear,
          country: signup.country,
          gender: signup.gender || '',
          school: signup.school
        }))
        .then(() => { location.replace('/introduction'); })
        .catch(function(error) {
          signup.loading = false;
          console.error('Signup error:', error);
          switch(error.code) {
            case 'auth/email-already-in-use':
              return signup.error = 'There already exists an account with this email address. Please login!';
            case 'auth/invalid-email':
              return signup.error = 'The email address you provided is invalid.';
            case 'auth/weak-password':
              return signup.error = 'Please pick a longer password!';
            default:
              return signup.error = 'Sorry, we couldn\'t create your account. Please try again!';
          }
        });
    }
  };

  const login = {
    error: null,
    showDropdown: false,
    toggleDropdown() {
      login.showDropdown = !login.showDropdown;
    },
    submit(e) {
      e.preventDefault();
      login.error = null;
      fbAuth.signInWithEmailAndPassword(login.email, login.password)
        .then(loadUser)
        .catch(function(error) {
          switch(error.code) {
            case 'auth/invalid-email':
              return login.error = 'This email address is invalid.';
            case 'auth/user-not-found':
              return login.error = 'There is no account with this email address.';
            case 'auth/wrong-password':
              return login.error = 'Incorrect password!';
            default:
              return login.error = 'Sorry, we couldn\'t log you in. Please try again!';
          }
        });
    }
  };

  const app = window.app = new Vue({
    el: '#body',
    data: {
      user: null,
      signup,
      login,
      answers: {submitted: false},
      feedback: {},
      status: null,
      logout() {
        fbAuth.signOut().then(() => { app.user = null; })
      },
      submit() {
        if (!app.user) return alert('You have to login before submitting.');
        app.answers.submitted = true;
        app.status = Date.now() < deadlineTime ? 'submitted' : 'revealed';
        fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId)
          .set(app.answers);
      },
      setAnswer(key, value) {
        if (app.answers.submitted) return;
        Vue.set(app.answers, key, value);
        if (app.user) {
          fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId)
            .set(app.answers);
        }
      },
      refresh() {
        if (app.answers.submitted || !fbAuth.currentUser) return;
        fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId)
          .set(app.answers);
      },
      timeUntil(t) { return countdown(Date.parse(t)); },
      isAfter(t) { return Date.now() > +Date.parse(t); },
      showHint(e) {
        // TODO Save hint state to db
        const el = e.currentTarget;
        el.classList.add('open');
        el.style.height = el.children[0].offsetHeight + 'px';
      }
    },
    computed: {
      countdown() {
        if (app.status === 'locked') return countdown(availableTime);
        if (app.status === 'open' || app.status === 'submitted') return countdown(deadlineTime);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', ready);



function countdown(to) {
  let t = (+to - Date.now()) / 1000;

  if (t < 120) return Math.floor(t) + ' seconds';
  t /= 60;

  if (t < 120) return Math.floor(t) + ' minutes';
  t /= 60;

  if (t < 48) return Math.floor(t) + ' hours';
  t /= 24;

  return Math.floor(t) + ' days';
}
