// =============================================================================
// Parallel Signup
// =============================================================================



export default function() {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  const signup = {
    error: null,
    loading: false,
    class: '',
    schoolName: '',
    country: 'United Kingdom',
    birthYear: 2000,
    level: 'year7',
    isTeacher: false,

    async submit(e) {
      e.preventDefault();
      signup.loading = true;
      signup.error = null;

      if (signup.isTeacher) {
        if (!signup.schoolName) {
          signup.loading = false;
          return signup.error = 'Please provide a valid school name.';
        }
        signup.level = signup.birthYear = null;
        signup.class = generateClassCode();

      } else if (signup.class) {
        let teacher = await fbDatabase.ref('users').orderByChild('class').equalTo(signup.class).once('value');
        teacher = teacher.toJSON();

        if (!teacher) {
          signup.loading = false;
          return signup.error = 'The class code you entered is invalid.';
        }
        teacher = teacher[Object.keys(teacher)[0]];

        signup.schoolName = teacher.schoolName;
        signup.country = teacher.country;

      } else {
        signup.schoolName = null;
      }

      try {
        const user = await fbAuth.createUserWithEmailAndPassword(signup.email, signup.password);
        await fbDatabase.ref('users/' + user.uid).set({
          first: signup.first,
          last: signup.last,
          birthYear: signup.birthYear,
          country: signup.country,
          class: signup.class,
          schoolName: signup.schoolName,
          level: signup.level,
          isTeacher: signup.isTeacher
        });
      } catch(error) {
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
      }

      location.replace(signup.isTeacher ? '/teachers' : '/introduction');
    }
  };

  return signup;
};

function generateClassCode() {
  return 'xxxxx'.replace(/x/g, () => ((Math.random()*36)%36 | 0).toString(36));
}
