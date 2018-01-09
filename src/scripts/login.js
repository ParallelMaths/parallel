// =============================================================================
// Parallel Login
// =============================================================================



export default function(user) {
  const fbAuth = firebase.auth();

  const login = {
    error: null,
    show: false,
    reset: false,

    toggleReset() {
      login.error = null;
      login.reset = !login.reset;
    },

    submit(e) {
      if (login.reset) {
        e.preventDefault();
        login.error = null;
        fbAuth.sendPasswordResetEmail(login.email)
          .then(function() {
            login.error = 'We\'ve sent you an email with instructions how to reset your password.';
          })
          .catch(function(error) {
            switch(error.code) {
              case 'auth/invalid-email':
                return login.error = 'This email address is invalid.';
              case 'auth/user-not-found':
                return login.error = 'There is no account with this email address.';
              default:
                return login.error = 'Something went wrong. Please try again!';
            }
          });
        return;
      }
      e.preventDefault();
      login.error = null;
      fbAuth.signInWithEmailAndPassword(login.email, login.password)
        .then(u => user.load(u))
        .catch(function(error) {
          switch(error.code) {
            case 'auth/invalid-email':
              return login.error = 'This email address is invalid.';
            case 'auth/user-not-found':
            case 'auth/wrong-password':
              return login.error = 'These login details are incorrect.';
            default:
              return login.error = 'Sorry, we couldn’t log you in. Please try again!';
          }
        });
    }
  };

  return login;
};
