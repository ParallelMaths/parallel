// =============================================================================
// Parallel Signup
// =============================================================================



export default function() {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  const signup = {
    error: null,
    loading: false,
    school: '',
    schoolName: '',
    country: 'United Kingdom',
    birthYear: 2000,
    level: 'year7',
    isTeacher: false,

    submit(e) {
      e.preventDefault();
      signup.loading = true;
      signup.error = null;

      // TODO Validate schoolName.

      // TODO for teachers, generate class code, remove birthYear+level

      fbAuth.createUserWithEmailAndPassword(signup.email, signup.password)
        .then(user =>  fbDatabase.ref('users/' + user.uid).set({
          first: signup.first,
          last: signup.last,
          birthYear: signup.birthYear,
          country: signup.country,  // TODO fall back to school country
          school: signup.school,
          level: signup.level,
          isTeacher: signup.isTeacher
        }))
        .then(() => { location.replace('/introduction'); })
        .catch(function(error) {
          console.error(error);
          signup.loading = false;
          switch(error.code) {
            case 'auth/email-already-in-use':
              return signup.error = 'There already exists an account with this email address. Please login!';
            case 'auth/invalid-email':
              return signup.error = 'The email address you provided is invalid.';
            case 'auth/weak-password':
              return signup.error = 'Please pick a longer password!';
            default:
              return signup.error = 'Sorry, we couldn’t create your account. Please try again!';
          }
        });
    }
  };

  return signup;
};
