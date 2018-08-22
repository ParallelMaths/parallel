// =============================================================================
// Parallel Challenges
// =============================================================================



/* const q = decodeURI(location.search.substring(1));
const query = q ? JSON.parse('{"' + q.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : {};
const overrideStatus = query.status; */


export default function(page, userData) {
  const fbDatabase = firebase.database();

  const challenge = {
    answers: userData || {},

    setAnswer(key, value) {
      if (challenge.answers.submitted) return;
      if (!userData) return alert('You have to login or create a free account, before you can solve problems.');

      Vue.set(challenge.answers, key, value);
      /* TODO fbDatabase.ref(`answers/${user.uid}/${challengeId}`)
        .update({ [key]: value }); */
    },

    setInput(event) {
      // TODO Remove this and watch c.answers instead to update server.
      challenge.setAnswer(event.target.dataset.value, event.target.value);
    },

    submit() {
      /* TODO if (user.ready && !user.data) return alert('You have to login or create a free account, before submitting your answers.');
      if (challenge.answers.submitted) return;

      challenge.setAnswer('score', calculateScore(challenge.answers));
      challenge.setAnswer('submitted', true);
      Vue.set(user.answers, challengeId, challenge.answers);
      challenge.status = 'submitted';

      if (past) document.body.scrollTop = document.documentElement.scrollTop = 0; */
    },

    showHint(id) {
      challenge.setAnswer(id, true);
    },

    unsubmit() {
      Vue.set(challenge.answers, 'submitted', false);
      /* TODO fbDatabase.ref(`user/${user.uid}/answers/${challengeId}`).update({submitted: false});
      challenge.status = user.getStatus(challengeId); */
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

  return score / total;
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



/*
getStatus(challenge) {
  if (!user.data) return 'preview';
  return user.answers[challenge.url].submitted ? 'submitted' : 'open';
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
}

function timeUntil(to) {
  let t = (new Date(to) - Date.now()) / 1000;
  if (t < 120) return Math.floor(t) + ' seconds';
  t /= 60;
  if (t < 120) return Math.floor(t) + ' minutes';
  t /= 60;
  if (t < 48) return Math.floor(t) + ' hours';
  t /= 24;
  return Math.floor(t) + ' days';
}

*/
