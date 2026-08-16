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

function returnLoginLink() {
  try {
    return 'https://parallel.org.uk/n/login?return=' + btoa(window.location.pathname);
  } catch (error) {
    return 'https://parallel.org.uk/n/login';
  }
}

function initialiseGoogleFormLinks() {
  try {
    [...document.getElementsByClassName("googleform")].forEach((e) => {
      if (!window.PARALLEL_USER_DATA.uid) {
        e.outerHTML =
          `<p class="googleform-error">Please <a href="${returnLoginLink()}">login</a> to access your Google Form</p>`;
      } else {
        e.href = e.dataset.href
          .replace(
            `{{name}}`,
            window.PARALLEL_USER_DATA.googleFormName || "First Last",
          )
          .replace(
            `{{email}}`,
            window.PARALLEL_USER_DATA.googleFormEmail || "Email",
          )
          .replace(
            `{{filename}}`,
            window.PARALLEL_USER_DATA.googleFormFilename || "filename.pdf",
          );
      }
    });
  } catch (error) {
    console.error('Error initialising Google Form links', error);
  }
}

function initialiseGoogleFormSolution() {
  try {
    [...document.getElementsByClassName("googleformsolution")].forEach((e) => {
      if (!window.PARALLEL_USER_DATA.uid) {
        e.outerHTML =
          `<p class="googleform-error">Please <a href="${returnLoginLink()}">login</a> to access your solutions</p>`;
      } if (!window.PARALLEL_USER_DATA.answers.solution) {
        e.outerHTML =
          `<p class="googleform-error">No solution found</p>`;
      } else {
        e.href = window.PARALLEL_USER_DATA.answers.solution
      }
    });
  } catch (error) {
    console.error('Error initialising Google Form links', error);
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
    apiKey: "AIzaSyDk4_ME-Uy1D3Yjg94Af7Gzhg3I1xNYWp8",
    projectId: "parallel-beta-31dc4",
    authDomain: "parallel-beta-31dc4.firebaseapp.com",
  });

  const user = getUser();
  const challenge = window.PARALLELOGRAM ? getChallenge() : null;

  if (challenge) {
    initialiseGoogleFormLinks();
    initialiseGoogleFormSolution();
  }

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
