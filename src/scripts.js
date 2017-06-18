// =============================================================================
// Parallel Lines


function ready() {
  const fbApp = firebase.app();
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  fbAuth.onAuthStateChanged(loadUser);

  // This helps avoid FOUC while the user is loading...
  function show() {
    document.querySelector('#body').style.display = 'block';
  }

  function loadUser(user) {
    if (!user) return show();
    fbDatabase.ref('users/' + user.uid).once('value').then(function(u) {
      app.user = u.toJSON();
      show();
    }).catch(function(e) {
      // TODO handle error
      console.log(e);
    });
  }

  const signup = {
    error: null,
    school: null,
    country: 'United Kingdom',
    birthYear: 2000,
    submit(e) {
      e.preventDefault();
      signup.error = null;
      // TODO form validation
      fbAuth.createUserWithEmailAndPassword(signup.email, signup.password)
        .then(function(user) {
          app.user = {
            first: signup.first,
            last: signup.last,
            birthYear: signup.birthYear,
            country: signup.country,
            gender: signup.gender,
            school: signup.school
          };
          fbDatabase.ref('users/' + user.uid).set(app.user);
        })
        .catch(function(error) {
          switch(error.code) {
            case 'auth/email-already-in-use':
              return signup.error = 'There already exists an account with this email address. Please login!';
            case 'auth/invalid-email':
              return signup.error = 'The email address you provided is invalid.';
            case 'auth/weak-password':
              return signup.error = 'Please pick a longer password!';
            default:
              return signup.error = 'Sorry, we couldn\'t create your account. Please try again!';
          }
        });
    }
  };

  const login = {
    error: null,
    showDropdown: false,
    toggleDropdown() {
      login.showDropdown = !login.showDropdown;
    },
    submit(e) {
      e.preventDefault();
      login.error = null;
      fbAuth.signInWithEmailAndPassword(login.email, login.password)
        .then(loadUser)
        .catch(function(error) {
          switch(error.code) {
            case 'auth/invalid-email':
              return login.error = 'This email address is invalid.';
            case 'auth/user-not-found':
              return login.error = 'There is no account with this email address.';
            case 'auth/wrong-password':
              return login.error = 'Incorrect password!';
            default:
              return login.error = 'Sorry, we couldn\'t log you in. Please try again!';
          }
        });
    }
  };

  const app = window.app = new Vue({
    el: '#body',
    data: {
      user: null,
      signup,
      login,
      answers: {},
      feedback: {},
      logout() {
        fbAuth.signOut().then(() => { app.user = null; })
      }
    },
    watch: {
      answers(a) {
        console.log(a);
        // TODO update a
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', ready);


// TODO Save hint state to db

Array.from(window.document.querySelectorAll('.hint')).forEach(hint => {
  hint.addEventListener('click', function() {
    hint.style.height = hint.children[0].offsetHeight + 'px';
  });
});
