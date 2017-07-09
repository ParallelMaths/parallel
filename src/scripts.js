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
      console.error(e);
      app.status = status(false);
      show();
    });

    if (challengeId) {
      fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId).once('value')
        .then(answers => {
          let a = answers.toJSON();
          if (!a) return app.status = status(false);
          for (let k of Object.keys(a)) Vue.set(app.answers, k, a[k]);
          app.status = status(a.submitted);
        }).catch(function(e) {
          console.error(e);
        });
    } else {
      fbDatabase.ref('answers/' + fbAuth.currentUser.uid).once('value')
        .then(answers => {
          let a = answers.toJSON();
          if (!a) return;
          if (a[1]) Vue.set(app.results, 1, getScore(a[1], 1));
          if (a[2]) Vue.set(app.results, 2, getScore(a[2], 2));
          if (a[3]) Vue.set(app.results, 3, getScore(a[3], 3));
          if (a[4]) Vue.set(app.results, 4, getScore(a[4], 4));
        }).catch(function(e) {
        console.error(e);
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
          console.error(error);
          signup.loading = false;
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
    reset: false,
    toggleDropdown() {
      login.showDropdown = !login.showDropdown;
    },
    toggleReset() {
      login.error = null;
      login.reset = !login.reset;
    },
    submit(e) {
      if (login.reset) {
        e.preventDefault();
        login.error = null;
        fbAuth.sendPasswordResetEmail(login.email)
          .then(function() {
            login.error = 'We\'ve sent you an email with instructions how to reset your password.';
          })
          .catch(function(error) {
            switch(error.code) {
              case 'auth/invalid-email':
                return login.error = 'This email address is invalid.';
              case 'auth/user-not-found':
                return login.error = 'There is no account with this email address.';
              default:
                return login.error = 'Something went wrong. Please try again!';
            }
          });
        return;
      }

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
      answers: {submitted: false, score: null, difficulty: 0, length: 0, fun: 0, interesting: 0},
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
        document.body.scrollTop = document.documentElement.scrollTop = 0;
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
      },
      level(s) {
        if (s >= 9) return ['Tesseract', '4D'];
        if (s >= 7) return ['Cube', '3D'];
        if (s >= 5) return ['Square', '2D'];
        if (s >= 2) return ['Line', '1D'];
        return ['Point', '0D'];
      },
      isCorrect: isCorrect,
      results: { 1: null, 2: null, 3: null, 4: null }
    },
    computed: {
      countdown() {
        if (app.status === 'locked') return countdown(availableTime);
        if (app.status === 'open' || app.status === 'submitted') return countdown(deadlineTime);
      },
      score() {
        if (app.answers.score) return round(app.answers.score);

        let score = scoreFunctions[challengeId](app.answers);
        app.answers.score = score;
        fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId)
          .set(app.answers);
        return round(score);
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

function isCorrect(a, b) {
  a = ('' + a).trim().replace(/\,/g, '');
  b = ('' + b).trim().replace(/\,/g, '');
  return a === b;
}

function round(n) {
  return Math.round(n * 10) / 10;
}

function getScore(answers, id) {
  if (!answers.submitted) return null;
  return round(answers.score || scoreFunctions[id](answers));
}

const scoreFunctions = {
  1(a) {
    let score = 0;
    if (a.p_1_1 === 'b') score += .5;
    if (a.p_1_2 === 'c') score += .5;
    if (a.p_1_3 === 'a') score += .5;
    if (a.p_1_4 === 'a') score += .5;
    if (a.p_2_1 == 4) score += 2;
    if (a.p_3_1 === 'c') score += 1;
    if (isCorrect(a.p_3_2, 1275)) score += 1;
    if (isCorrect(a.p_3_3, 500500)) score += 1;
    if (a.p_4_1 === 'a') score += 1;
    if (a.p_5_1a && !a.p_5_1b && !a.p_5_1c) score += 1;
    if (a.p_6_1 === 'a') score += 1;
    return score;
  },
  2(a) {
    let score = 0;
    if (a.p_1_1b && a.p_1_1c && !a.p_1_1a && !a.p_1_1d && !a.p_1_1e) score += 1;
    if (a.p_1_2 === 'b') score += 2;
    if (a.p_1_3b && a.p_1_3c && !a.p_1_3a && !a.p_1_3d && !a.p_1_3e) score += 1;
    if (a.p_1_4d && a.p_1_4e && !a.p_1_4a && !a.p_1_4b && !a.p_1_4c && !a.p_1_4f) score += 1;
    if (a.p_1_5 == 10) score += 3;
    if (a.p_2_1 === 'b') score += .5;
    if (a.p_3_1 == 9) score += 4;
    if (a.p_5_1 === 'd') score += 1;
    return score * 10 / 13.5;
  }
};
