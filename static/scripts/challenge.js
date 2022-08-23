// =============================================================================
// Parallel Challenges
// =============================================================================



export default function() {
  const fbDatabase = firebase.firestore();

  const page = window.PARALLELOGRAM;
  const userData = window.PARALLEL_USER_DATA;

  const challenge = {
    answers: userData.answers,
    showBadgeModal: true,
    submitted: userData.submitted,

    setAnswer(key, value) {
      if (userData.submitted) return;
      if (!userData.uid) return alert('You have to login or create a free account, before you can solve problems.');
      Vue.set(challenge.answers, key, value);

      const userRef = fbDatabase.collection('users').doc(userData.uid);
      userRef.set({answers: {[page.url]: {[key]: value}}}, {merge: true});

      // Track the first time that a questions was submitted...
      if (userData.answers.firstAnswer) return;
      userData.answers.firstAnswer = true;
      userRef.set({answers: {[page.url]: {firstAnswer: Date.now()}}}, {merge: true});
    },

    setInput(event) {
      // TODO Remove this and watch c.answers instead to update server.
      challenge.setAnswer(event.target.dataset.value, event.target.value);
    },

    async submit() {
      if (userData.submitted || !userData.uid) return;
      Vue.set(challenge.answers, 'loading', true);

      const userRef = fbDatabase.collection('users').doc(userData.uid);
      await userRef.set({answers: {[page.url]: calculateScore(challenge.answers, page)}}, {merge: true});
      document.body.style.display = 'none';
      window.scrollTo(0, 0);
      location.reload(true);
    },

    showHint(id) {
      challenge.setAnswer(id, true);
    },

    // Custom scoring functions
    sumaze, checkInput
  };

  return challenge;
};

// -----------------------------------------------------------------------------

function hasClass($el, name) {
  return (' ' + $el.getAttribute('class') + ' ').indexOf(' ' + name + ' ') >= 0;
}

function calculateScore(answers, page) {
  const $problems = document.querySelectorAll('.problem');

  let points = 0;
  let total = 0;

  for (let $p of $problems) {
    const marks = +$p.dataset.marks || 0;
    total += marks;
    let score = 0;

    if (hasClass($p, 'radio')) {
      if (answers[$p.id] === atob($p.dataset.solution)) score = marks;

    } else if (hasClass($p, 'checkbox')) {
      const solution = atob($p.dataset.solution).split(',');
      for (let s of solution) {
        if (answers[s]) score = marks / solution.length;
      }

    } else if (hasClass($p, 'input')) {
      const $inputs = $p.querySelectorAll('input');
      for (let $i of $inputs) {
        if (checkInput(answers[$i.dataset.value], atob($i.dataset.solution)))
          score = marks / $inputs.length;
      }

    } else if (hasClass($p, 'sumaze')) {
      const $i = $p.querySelector('input');
      score = marks * sumaze(answers[$i.dataset.value]) / 45;
    }

    const $hints = $p.querySelectorAll('.show-hint');
    for (let $h of $hints) {
      if (answers[$h.id]) score -= (+$h.dataset.marks || 0);
    }

    points += Math.max(0, score);
  }

  const time = Date.now();

  const timeDifference = time - (page.available || 0);

  const sameWeek = timeDifference < (7 * 24 * 60 * 60 * 1000);

  return {
    points,
    total,
    time,
    submitted: true,
    score: Math.max(0, Math.min(100, Math.round(points / total * 100))),
    sameWeek
  };
}

function sumaze(x) {
  if (!x) return 0;

  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let L = x[0];
  let T = +x.slice(1) - 3141;
  let N = 11 + ((alphabet.indexOf(L.toUpperCase()) + 13) % 26);

  let S = T / N;
  return (S > 45 || S < 0) ? 0 : (S || 0);
}

function checkInput(a, b) {
  a = ('' + a).trim().replace(/[\s,]/g, '').toLowerCase();
  b = ('' + b).trim().replace(/[\s,]/g, '').toLowerCase();
  return (a === b || +a === +b);
}
