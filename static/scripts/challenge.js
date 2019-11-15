// =============================================================================
// Parallel Challenges
// =============================================================================



export default function() {
  const fbDatabase = firebase.database();

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
      fbDatabase.ref(`users/${userData.uid}/answers/${page.url}`).update({[key]: value});
    },

    setInput(event) {
      // TODO Remove this and watch c.answers instead to update server.
      challenge.setAnswer(event.target.dataset.value, event.target.value);
    },

    submit() {
      if (userData.submitted || !userData.uid) return;
      Vue.set(challenge.answers, 'loading', true);

      fbDatabase.ref(`users/${userData.uid}/answers/${page.url}`)
          .update(calculateScore(challenge.answers))
          .then(() => {
            document.body.style.display = 'none';
            window.scrollTo(0, 0);
            location.reload(true)
          });
    },

    showHint(id) {
      challenge.setAnswer(id, true);
    },

    unsubmit() {
      fbDatabase.ref(`users/${userData.uid}/answers/${page.url}`)
          .update({submitted: false})
          .then(() => location.reload(true));
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

function calculateScore(answers) {
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

  return {
    points,
    total,
    time: Date.now(),
    submitted: true,
    score: Math.max(0, Math.min(100, Math.round(points / total * 100)))
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


/* function timeUntil(to) {
  let t = (new Date(to) - Date.now()) / 1000;
  if (t < 120) return Math.floor(t) + ' seconds';
  t /= 60;
  if (t < 120) return Math.floor(t) + ' minutes';
  t /= 60;
  if (t < 48) return Math.floor(t) + ' hours';
  t /= 24;
  return Math.floor(t) + ' days';
} */
