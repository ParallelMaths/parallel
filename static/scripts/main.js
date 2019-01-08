// =============================================================================
// Parallel Scripts
// =============================================================================



import '../../node_modules/babel-polyfill/dist/polyfill';
import getUser from './user';
import getChallenge from './challenge';

function removeStudent(id, index, level) {
  if (window.confirm('Are you sure you want to remove this student?')) {
    return fetch('/remove-student', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id})
    }).then((response) => {
      if (!response.ok) return alert('Something went wrong. Please try again!');
      const table = document.querySelector(`.dashboard-table[data-level='${level}']`);
      table.querySelector('.dashboard-names').childNodes[index + 1].remove();
      table.querySelector('tbody').childNodes[index].remove();
   });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  firebase.initializeApp({
    apiKey: "AIzaSyCrQ_PdH-05lcNWETGvGfiwO3MBXk_WeVU",
    authDomain: "parallel-cf800.firebaseapp.com",
    databaseURL: "https://parallel-cf800.firebaseio.com"
  });

  const user = getUser();
  const challenge = window.PARALLELOGRAM ? getChallenge() : null;

  window.app = new Vue({
    el: '#vue',
    data: {showSidebar: false, showWelcomeMsg: true, user, c: challenge, removeStudent}
  });
});
