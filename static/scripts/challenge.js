// =============================================================================
// Parallel Challenges
// =============================================================================



export default function() {
  const fbDatabase = firebase.database();

  const page = window.PARALLELOGRAM;
  const userData = window.PARALLEL_USER_DATA;

  const challenge = {
    answers: userData.answers,

    setAnswer(key, value) {
      if (userData.submitted) return;
      if (!userData.uid) return alert('You have to login or create a free account, before you can solve problems.');
      Vue.set(challenge.answers, key, value);
      fbDatabase.ref(`answers/${userData.uid}/${page.url}`).update({[key]: value});
    },

    setInput(event) {
      // TODO Remove this and watch c.answers instead to update server.
      challenge.setAnswer(event.target.dataset.value, event.target.value);
    },

    submit() {
      if (userData.submitted || !userData.uid) return;
      Vue.set(challenge.answers, 'loading', true);

      fbDatabase.ref(`answers/${userData.uid}/${page.url}`)
          .update({score: calculateScore(challenge.answers), submitted: true})
          .then(() => location.reload(true));

      // if (past) document.body.scrollTop = document.documentElement.scrollTop = 0;
    },

    showHint(id) {
      challenge.setAnswer(id, true);
    },

    unsubmit() {
      fbDatabase.ref(`answers/${userData.uid}/${page.url}`)
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
  const $hints = document.querySelectorAll('.show-hint');

  let score = 0;
  let total = 0;

  for (let $p of $problems) {
    const marks = +$p.dataset.marks || 0;
    total += marks;

    if (hasClass($p, 'radio')) {
      const $correct = $p.querySelector('.correct');
      if (answers[$p.id] === $correct.dataset.value) score += marks;

    } else if (hasClass($p, 'checkbox')) {
      const $correct = $p.querySelectorAll('.correct');
      for (let $c of $correct) {
        if (answers[$c.dataset.value]) score += marks / $correct.length;
      }

    } else if (hasClass($p, 'input')) {
      const $inputs = $p.querySelectorAll('input');
      for (let $i of $inputs) {
        if (checkInput(answers[$i.dataset.value], $i.dataset.solution))
          score += marks / $inputs.length;
      }

    } else if (hasClass($p, 'sumaze')) {
      const $i = $p.querySelector('input');
      score += marks * sumaze(answers[$i.dataset.value]) / 45;
    }
  }

  for (let $h of $hints) {
    if (answers[$h.id]) score -= (+$h.dataset.marks || 0);
  }

  return Math.max(0, Math.min(100, Math.round(score / total * 100)));
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
  return a === b;
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
