// =============================================================================
// Parallel Scripts
// =============================================================================



import getUser from './user';
import getLogin from './login';
import getSignup from './signup';


document.addEventListener('DOMContentLoaded', function() {
  const signup = getSignup();
  const user = getUser(signup);
  const login = getLogin(user);

  window.app = new Vue({
    el: '#container',
    data: {user, login, signup, pages: PAGES}
  });
});
