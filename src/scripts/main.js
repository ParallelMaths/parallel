// =============================================================================
// Parallel Scripts
// =============================================================================



import getUser from './user';
import getLogin from './login';
import getSignup from './signup';


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
  const user = getUser(signup);
  const login = getLogin(user);

  window.app = new Vue({
    el: '#container',
    data: {user, login, signup, pages: PAGES}
  });
});
