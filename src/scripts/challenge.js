// =============================================================================
// Parallel Challenges
// =============================================================================



const q = decodeURI(location.search.substring(1));
const query = q ? JSON.parse('{"' + q.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : {};
const overrideStatus = query.status;


export default function(challengeId, user, pages) {
  const fbDatabase = firebase.database();
  const c = [...pages.year7, ...pages.year8].find(x => x.url === challengeId);

  user.onLoad = function() {
    challenge.answers = user.answers[challengeId] || {};
    challenge.status = overrideStatus || user.getStatus(c);
  };

  const challenge = {
    id: challengeId,
    answers: {},
    status: overrideStatus || 'preview',
    data: c,
    deadline: c.deadline,

    setAnswer(key, value) {
      if (challenge.answers.submitted) return;
      if (!user.data) return alert('You have to create an account to be able to solve problems.');

      Vue.set(challenge.answers, key, value);
      fbDatabase.ref(`answers/${user.uid}/${challengeId}`)
        .update({ [key]: value });
    },

    setInput(event) {
      // TODO Remove this and watch c.answers instead to update server.
      challenge.setAnswer(event.target.dataset.value, event.target.value);
    },

    submit() {
      if (!user.data) return alert('You have to create an account to submit your answers.');
      if (challenge.answers.submitted) return;

      challenge.setAnswer('score', calculateScore(challenge.answers));
      challenge.setAnswer('submitted', true);

      const past = (Date.now() < new Date(c.deadline));
      challenge.status = past ? 'submitted' : 'revealed';
      // document.body.scrollTop = document.documentElement.scrollTop = 10e10;
    },

    unsubmit() {
      Vue.set(challenge.answers, 'submitted', false);
      fbDatabase.ref(`answers/${user.uid}/${challengeId}`).update({submitted: false});
      challenge.status = user.getStatus(challengeId);
    },

    // Custom scoring functions
    sumaze, mathigon, checkInput
  };

  return challenge;
};

// -----------------------------------------------------------------------------

function hasClass($el, name) {
  return (' ' + $el.getAttribute('class') + ' ').indexOf(' ' + name + ' ') >= 0;
}

function calculateScore(answers) {
  const $problems = document.querySelectorAll('.problem');

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

    } else if ($p.querySelector('.sumaze')) {
      score += marks * sumaze($p.id) / 45;
    }
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

function mathigon() {
  return 0;
}

function checkInput(a, b) {
  a = ('' + a).trim().replace(/[\s,]/g, '');
  b = ('' + b).trim().replace(/[\s,]/g, '');
  return a === b;
}

/* function mathigonUrl() {
  const u = firebase.auth().currentUser;
  if (!u) return '';
  return '?u=' + btoa(JSON.stringify({first: app.user.first, last: app.user.last, email: u.email, uid: u.uid}));
} */
