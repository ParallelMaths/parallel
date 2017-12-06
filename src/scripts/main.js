// =============================================================================
// Parallel Scripts
// =============================================================================



import getUser from './user';
import getLogin from './login';
import getSignup from './signup';
import getChallenge from './challenge';


document.addEventListener('DOMContentLoaded', function() {
  firebase.initializeApp({
    apiKey: "AIzaSyCrQ_PdH-05lcNWETGvGfiwO3MBXk_WeVU",
    authDomain: "parallel-cf800.firebaseapp.com",
    databaseURL: "https://parallel-cf800.firebaseio.com",
    projectId: "parallel-cf800",
    storageBucket: "parallel-cf800.appspot.com",
    messagingSenderId: "610680271345"
  });

  const signup = getSignup();
  const user = getUser(signup, PAGES);
  const login = getLogin(user);

  const submit = document.getElementById('submit');
  const challenge = submit ? getChallenge(submit.dataset.challenge, user, PAGES) : null;

  window.app = new Vue({
    el: '#vue',
    data: {user, login, signup, c: challenge, isOneOf, timeUntil, pages: PAGES, showSidebar: false}
  });
});


function isOneOf(x, ...values) {
  for (let v of values) if (x === v) return true;
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
