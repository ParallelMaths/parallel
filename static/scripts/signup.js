// =============================================================================
// Parallel Signup
// =============================================================================



export default function() {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  const signup = {
    error: null,
    loading: false,
    isTeacher: location.hash === '#teacher',

    first: '',
    last: '',
    email: '',
    password: '',
    teacherCode: '',
    level: 'year7',
    birthYear: 2000,
    schoolName: '',
    phoneNumber: '',
    postCode: '',
    country: 'United Kingdom',
    guardianEmail: '',
    code: '',

    async submit(e) {
      e.preventDefault();
      signup.loading = true;
      signup.error = null;

      if (signup.isTeacher) {
        if (!signup.schoolName) {
          signup.loading = false;
          return signup.error = 'Please provide a valid school name.';
        }
        signup.code = generateClassCode();
        signup.level = signup.birthYear = signup.guardianEmail = signup.teacherCode = null;

      } else if (signup.teacherCode) {
        let teacher = await fbDatabase.ref('users').orderByChild('code').equalTo(signup.teacherCode).once('value');
        teacher = teacher.toJSON();

        if (!teacher) {
          signup.loading = false;
          return signup.error = 'This teacher code is invalid.';
        }

        teacher = teacher[Object.keys(teacher)[0]];

        signup.schoolName = teacher.schoolName;
        signup.country = teacher.country || null;
        signup.phoneNumber = signup.postCode = signup.guardianEmail = signup.code = null;

      } else {
        signup.schoolName = signup.phoneNumber = signup.postCode = signup.code = null;
      }

      try {
        const user = await fbAuth.createUserWithEmailAndPassword(signup.email, signup.password);
        await fbDatabase.ref('users/' + user.uid).set({
          first: signup.first,
          last: signup.last,
          teacherCode: signup.teacherCode,
          code: signup.code,
          level: signup.level,
          birthYear: signup.birthYear,
          schoolName: signup.schoolName,
          phoneNumber: signup.phoneNumber,
          postCode: signup.postCode,
          country: signup.country,
          guardianEmail: signup.guardianEmail,
          acceptedTerms: true
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
            return signup.error = 'Please pick a stronger password!';
          default:
            return signup.error = 'Sorry, we couldn’t create your account. Please try again!';
        }
      }

      location.replace(signup.isTeacher ? '/dashboard' : '/introduction');
    }
  };

  return signup;
};

function generateClassCode() {
  return 'xxxxx'.replace(/x/g, () => ((Math.random()*36)%36 | 0).toString(36));
}
