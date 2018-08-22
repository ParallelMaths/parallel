// =============================================================================
// Parallel Scripts
// =============================================================================



import '../../node_modules/babel-polyfill/dist/polyfill';
import getUser from './user';
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

  const user = getUser();
  const challenge = window.PARALLELOGRAM ?
      getChallenge(window.PARALLELOGRAM, window.PARALLEL_USER_DATA) : null;

  window.app = new Vue({
    el: '#vue',
    data: {showSidebar: false, user, c: challenge}
  });
});
