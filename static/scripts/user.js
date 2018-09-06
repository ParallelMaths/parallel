// =============================================================================
// Parallel Login
// =============================================================================



const ERRORS = {
  'auth/invalid-email': 'This email address is invalid.',
  'auth/user-not-found': 'There is no account with this email address.',
  'auth/wrong-password': 'This password does not match your email address.',
  'auth/weak-password': 'Please pick a stronger password!',
  'auth/email-already-in-use': 'There already exists an account with this email address. Please login!',

  'reset-instructions': 'We’ve sent you an email with instructions how to reset your password.',
  'empty-password': 'To change your password, please enter your existing one.',
  'teacher-code': 'This teacher code is invalid.',
  'default':  'Something went wrong. Please try again!'
};

function generateClassCode() {
  return 'xxxxxx'.replace(/x/g, () => ((Math.random()*36)%36 | 0).toString(36));
}


export default function() {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  let userPromise = null;
  let nextUrl = '';
  let uid = null;
  fbAuth.onAuthStateChanged((user) => uid = user ? user.uid : null);

  // If it is likely that there is a signed-in Firebase user and the session
  // cookie has expired, we hide the page body until the page is reloaded.
  const hasSessionCookie = document.cookie.indexOf('__session=') !== -1;
  const isProbablySignedInFirebase = typeof Object.keys(window.localStorage)
      .find((key) => key.startsWith('firebase:authUser')) !== 'undefined';
  if (!hasSessionCookie && isProbablySignedInFirebase) {
    document.body.style.display = 'none';
  }

  fbAuth.addAuthTokenListener(async function (token) {
    // Ensure the user data is uploaded before redirecting.
    if (userPromise) await userPromise;

    const hadSessionCookie = document.cookie.indexOf('__session=') !== -1;
    document.cookie = '__session=' + token + ';max-age=' + (token ? 3600 : 0);
    if ((!hadSessionCookie && token) || (hadSessionCookie && !token)) {
      if (nextUrl) {
        window.location.replace(nextUrl);
      } else if (!token) {
        window.location.replace('/');
      } else {
        window.location.reload(true);
      }
    } else {
      // In the rare case where there was a user but it could not be signed in
      // (e.g. if the account has been deleted), we un-hide the page body.
      document.body.style.display = 'block';
    }
  });

  const cachedLevel = document.cookie.match(/level=(year[7-9])/);

  const loginForm = {error: null, reset: false};
  const editForm = {loading: false, error: ''};
  const signupForm = {error: null, loading: false, country: 'United Kingdom',
    level: 'year7', birthYear: 2000, isTeacher: location.hash === '#teacher'};

  if (window.USER_DATA) {
    for (let key of ['schoolName', 'postCode', 'phoneNumber', 'teacherCode', 'level']) {
      editForm[key] = window.USER_DATA[key] || null;
    }
  }

  const user = {
    level: cachedLevel ? cachedLevel[1] : 'year7',
    showLogin: false,
    loginForm, editForm, signupForm,

    setLevel(l) {
      user.level = l;
      document.cookie = `level=${l};path=/;max-age=${60 * 60* 24 * 365}`;
    },

    logout() {
      fbAuth.signOut();
    },

    acceptTerms() {
      fbDatabase.ref('users/' + uid).update({acceptedTerms: true});
      document.querySelector('#accept-terms').remove();
    },

    toggleReset() {
      loginForm.error = null;
      loginForm.reset = !loginForm.reset;
    },

    login(e) {
      e.preventDefault();
      loginForm.error = null;

      if (user.loginForm.reset) {
        return fbAuth.sendPasswordResetEmail(loginForm.email)
          .then(() => loginForm.error = ERRORS['reset-instructions'])
          .catch((e) => loginForm.error = ERRORS[e.code] || ERRORS.default);
      }

      fbAuth.signInWithEmailAndPassword(loginForm.email, loginForm.password)
        .catch((e) => loginForm.error = ERRORS[e.code] || ERRORS.default);
    },

    async edit(e) {
      e.preventDefault();
      editForm.loading = true;
      editForm.error = null;

      try {
        let schoolName = editForm.schoolName || null;
        let country = null;

        if (editForm.teacherCode) {
          let teacher = await fbDatabase.ref('users').orderByChild('code')
              .equalTo(editForm.teacherCode).once('value');
          teacher = teacher.toJSON();
          if (!teacher) return editForm.error = ERRORS['teacher-code'];

          teacher = teacher[Object.keys(teacher)[0]];
          schoolName = teacher.schoolName;
          country = teacher.country || null;
        }

        await fbDatabase.ref('users/' + uid).update({
          teacherCode: editForm.teacherCode || null,
          level: editForm.level || null,
          phoneNumber: editForm.phoneNumber || null,
          postCode: editForm.postCode || null,
          schoolName, country
        });

        if (editForm.new) {
          if (!editForm.old) return editForm.error = ERRORS['empty-password'];
          const currentUser = fbAuth.currentUser;
          const cred = firebase.auth.EmailAuthProvider
              .credential(currentUser.email, editForm.new);
          await currentUser.reauthenticateWithCredential(cred);
          await currentUser.updatePassword(editForm.new)
        }

        location.reload(true);

      } catch(error) {
        console.error(error);
        editForm.loading = false;
        editForm.error = ERRORS[e.code] || ERRORS.default;
      }
    },

    async signup(e) {
      e.preventDefault();
      signupForm.loading = true;
      signupForm.error = null;

      if (signupForm.isTeacher) {
        if (!signupForm.schoolName) {
          signupForm.loading = false;
          return signupForm.error = 'Please provide a valid school name.';
        }
        signupForm.code = generateClassCode();
        signupForm.level = signupForm.birthYear =
            signupForm.guardianEmail = signupForm.teacherCode = null;

      } else if (signupForm.teacherCode) {
        let teacher = (await fbDatabase.ref('users').orderByChild('code')
            .equalTo(signupForm.teacherCode).once('value')).toJSON();

        if (!teacher) {
          signupForm.loading = false;
          return signupForm.error = ERRORS['teacher-code'];
        }

        teacher = teacher[Object.keys(teacher)[0]];

        signupForm.schoolName = teacher.schoolName;
        signupForm.country = teacher.country || null;
        signupForm.phoneNumber = signupForm.postCode =
            signupForm.guardianEmail = signupForm.code = null;

      } else {
        signupForm.schoolName = signupForm.phoneNumber =
            signupForm.postCode = signupForm.code = null;
      }

      // Redirect after login
      nextUrl = signupForm.isTeacher ? '/dashboard' : '/introduction';

      try {
        const user = await fbAuth.createUserWithEmailAndPassword(signupForm.email, signupForm.password);
        userPromise = fbDatabase.ref('users/' + user.uid).set({
          first: signupForm.first || null,
          last: signupForm.last || null,
          teacherCode: signupForm.teacherCode || null,
          code: signupForm.code || null,
          level: signupForm.level || null,
          birthYear: signupForm.birthYear || null,
          schoolName: signupForm.schoolName || null,
          phoneNumber: signupForm.phoneNumber || null,
          postCode: signupForm.postCode || null,
          country: signupForm.country || null,
          guardianEmail: signupForm.guardianEmail || null,
          hasSeenWelcomeMsg: true,
          acceptedTerms: true
        });

      } catch(error) {
        console.error(error);
        signupForm.loading = false;
        signupForm.error = ERRORS[error.code] || ERRORS.default;
      }
    }
  };

  return user;
};
