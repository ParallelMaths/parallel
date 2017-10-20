// =============================================================================
// Parallel Scripts
// =============================================================================


function ready() {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  const submit = document.querySelector('#submit');
  const challengeId = submit ? submit.dataset.challenge : null;
  const availableTime = submit ? Date.parse(submit.dataset.available) : null;
  const deadlineTime = submit ? Date.parse(submit.dataset.deadline) : null;

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

  const app = window.app = new Vue({
    data: {
      answers: {submitted: false, score: null, difficulty: 0, length: 0, fun: 0, interesting: 0},
      status: null,
      submit() {
        if (!app.user) return alert('You have to login before submitting.');
        app.answers.submitted = true;
        app.status = Date.now() < deadlineTime ? 'submitted' : 'revealed';
        fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId)
          .update(app.answers);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
      setAnswer(key, value) {
        if (app.answers.submitted) return;
        Vue.set(app.answers, key, value);
        if (app.user) {
          fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId)
            .update(app.answers);
        }
      },
      refresh() {
        if (app.answers.submitted || !fbAuth.currentUser) return;
        fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId)
          .update(app.answers);
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
      isCorrect,
      sumazeScore,
      results: { 1: null, 2: null, 3: null, 4: null },
      mathigonUrl() {
        const u = fbAuth.currentUser;
        if (!u) return '';
        return '?u=' + btoa(JSON.stringify({first: app.user.first, last: app.user.last, email: u.email, uid: u.uid}));
      },
      round
    },
    computed: {
      countdown() {
        if (app.status === 'locked') return countdown(availableTime);
        if (app.status === 'open' || app.status === 'submitted') return countdown(deadlineTime);
      },
      score() {
        if (!fbAuth.currentUser) return 0;
        // if (app.answers.score) return round(app.answers.score);

        let score = scoreFunctions[challengeId](app.answers);
        app.answers.score = score;
        fbDatabase.ref('answers/' + fbAuth.currentUser.uid + '/' + challengeId)
          .update(app.answers);
        return round(score);
      }
    }
  });
}




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
  a = ('' + a).trim().replace(/[^0-9.]/g, '');
  b = ('' + b).trim().replace(/[^0-9.]/g, '');
  return a === b;
}

function round(n) {
  return Math.round(n * 10) / 10;
}

function getScore(answers, id) {
  if (!answers.submitted) return null;
  return round(scoreFunctions[id](answers));
}

function sumazeScore(x) {
  if (!x) return 0;

  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let L = x[0];
  let T = +x.slice(1) - 3141;
  let N = 11 + ((alphabet.indexOf(L.toUpperCase()) + 13) % 26);

  let S = T / N;
  return (S > 45 || S < 0) ? 0 : (S || 0);
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
    if ((a.p_1_3b || a.p_1_3c) && !a.p_1_3a && !a.p_1_3d && !a.p_1_3e) score += 1;
    if ((a.p_1_4d || a.p_1_4e) && !a.p_1_4a && !a.p_1_4b && !a.p_1_4c && !a.p_1_4f) score += 1;
    if (a.p_1_5 == 10) score += 3;
    if (a.p_1_5 == 9 || a.p_1_5 == 11) score += 2;
    if (a.p_1_5 == 8 || a.p_1_5 == 12) score += 1;
    if (a.p_2_1 === 'b') score += .5;
    if (a.p_3_1 == 9) score += 4;
    if (a.p_5_1 === 'd') score += 1;
    return score * 10 / 13.5;
  },
  3(a) {
    let score = 0;
    if (a.p_1_1 === 'c') score += 1;
    if (a.p_1_2 === 'd') score += 1;

    if (isCorrect(a.p_2_1, 16384)) score += 1;
    if (isCorrect(a.p_2_2, 524288)) score += 1;
    if (isCorrect(a.p_2_3, 2147483648)) score += 1;
    if (a.p_2_4 === 'c') score += 2;
    if (isCorrect(a.p_2_5a, 600)) score += 1;
    if (isCorrect(a.p_2_5b, 630)) score += 1;
    if (a.p_2_5c === 'b') score += 1;

    score += sumazeScore(a.p_3_1) / 10 || 0;

    if (a.p_5_1 === 'e') score += 2;

    if (a.p_6_1 === 'a') score += 2;
    if (a.p_6_2 === 'b') score += 2;
    if (a.p_6_3 === 'd') score += 2;

    return score * 10 / 22.5;
  },
  4(a) {
    let score = 0;

    if (a.p_1_1c) score += 1;
    if (a.p_1_1d) score += 1;
    if (a.p_1_1f) score += 1;
    if (a.p_1_1g) score += 1;

    score += sumazeScore(a.p_2_1) / 10 || 0;
    score += Math.min(1, a.mathigon) * 5 || 0;

    if (a.p_5_1 === 'c') score += 2;
    if (a.p_5_2 === 'c') score += 2;
    if (a.p_5_3 === 'a') score += 2;

    return score * 10 / 19.5;
  }
};

