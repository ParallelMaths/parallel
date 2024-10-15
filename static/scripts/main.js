// =============================================================================
// Parallel Scripts
// =============================================================================



import '../../node_modules/babel-polyfill/dist/polyfill';
import getUser from './user';
import getChallenge from './challenge';
import '../../node_modules/@johmun/vue-tags-input/dist/vue-tags-input';

function removeStudent(id, index, level) {
  if (window.confirm('Are you sure you want to remove this student?')) {
    return fetch('/remove-student', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id})
    }).then((response) => {
      if (!response.ok) return alert('Something went wrong. Please try again!');
      const table = document.querySelector(`.dashboard-table[data-level='${level}']`);
      table.querySelector(`.dashboard-names tr[data-index='${index}']`).remove();
      table.querySelector(`.dashboard-data tr[data-index='${index}']`).remove();
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

// Disables scroll on number inputs to avoid accidental changes
document.addEventListener("wheel", function(event){
  if(document.activeElement.type === "number"){
      document.activeElement.blur();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  firebase.initializeApp({
    apiKey: "AIzaSyCrQ_PdH-05lcNWETGvGfiwO3MBXk_WeVU",
    projectId: "parallel-cf800",
    authDomain: "parallel-cf800.firebaseapp.com",
  });

  const user = getUser();
  const challenge = window.PARALLELOGRAM ? getChallenge() : null;

  Vue.component('v-style', {
    render: function (createElement) {
      return createElement('style', this.$slots.default)
    }
  });

  if (window.self !== window.top) {
    document.body.className = 'insideIframe'
  }

  window.app = new Vue({
    el: '#vue',
    components: {VueTagsInput: window.vueTagsInput.default},
    data: {showSidebar: false, showWelcomeMsg: true, user, c: challenge,
      removeStudent, sortTable}
  });
});
