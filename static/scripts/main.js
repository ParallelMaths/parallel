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

function getRowValue(row, i) {
  if (i === 0) return -row[0].dataset.index;
  return +row[1].childNodes[i - 1].dataset.value;
}

function sortTable(i, level) {
  const $table = document.querySelector(`.dashboard-table[data-level="${level}"]`);

  const $active = $table.querySelector('.dashboard-active');
  if ($active) $active.classList.remove('dashboard-active');

  const $labels = $table.querySelectorAll('th');
  $labels[i].classList.add('dashboard-active');

  const $namesBox = $table.querySelector('.dashboard-names tbody');
  const $rowsBox = $table.querySelector('.dashboard-data tbody');
  const $names = $namesBox.childNodes;
  const rows = Array.from($rowsBox.childNodes).map(($r, i) => [$names[i], $r]);
  const ordered = rows.sort((a, b) => getRowValue(b, i) - getRowValue(a, i));

  for (let row of ordered) {
    $namesBox.appendChild(row[0]);
    $rowsBox.appendChild(row[1]);
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
    data: {showSidebar: false, showWelcomeMsg: true, user, c: challenge, removeStudent, sortTable}
  });
});
