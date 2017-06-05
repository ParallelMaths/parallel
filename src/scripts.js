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
    type: null,
    country: 'United Kingdom',
    setTTS: function() { signup.type = 'TTS'; },
    setPublic: function() { signup.type = 'public'; },
    submit: function(e) {
      // TODO validation
      e.preventDefault();
      fbAuth.createUserWithEmailAndPassword(signup.email, signup.password)
        .then(function(user) {
          app.user = {
            first: signup.first,
            last: signup.last,
            type: signup.type,
            birthdate: signup.birthdate,
            country: signup.country,
            gender: signup.gender,
            school: signup.school
          };
          fbDatabase.ref('users/' + user.uid).set(app.user);
          // TODO handle errors
        })
        .catch(function(error) {
          // TODO handle errors
          console.log(error);
        });
    }
  };

  const login = {
    error: null,
    showDropdown: false,
    toggleDropdown: function() {
      login.showDropdown = !login.showDropdown;
    },
    submit: function(e) {
      e.preventDefault();
      fbAuth.signInWithEmailAndPassword(login.email, login.password)
        .then(loadUser)
        .catch(function(error) {
          // TODO handle errors
          console.log(error);
        });
    }
  };

  const app = window.app = new Vue({
    el: '#body',
    data: {
      user: null,
      signup,
      login,
      logout() {
        fbAuth.signOut().then(() => { app.user = null; })
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', ready);
