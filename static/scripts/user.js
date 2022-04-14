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
  'teacher-code': 'The teacher code "$0" is invalid.',
  'default':  'Something went wrong. Please try again!'
};

function generateClassCode() {
  return 'xxxx-xxxx'.replace(/x/g, () => (Math.random()*36).toString(36)[0]).toUpperCase();
}

function generateUserReference() {
  return 'xxxxxxxxx'.replace(/x/g, () => (Math.random()*36).toString(36)[0]).toUpperCase();
}

export default function() {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.firestore();

  let userPromise = null;
  let nextUrl = '';
  let uid = null;
  let justManuallySignedIn = false;
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
        // Just signed up
        return window.location.replace(nextUrl);
      } else if (!token) {
        // Just logged out
        return window.location.replace('/');
      } else {
        // Just signed in OR revalidating login on return

        if(!justManuallySignedIn){
          // If revalidating login, just reload
          return window.location.reload(true);
        }

        // If manually logging in
        if (window.location.pathname.match(/^\/\d/)) {
          // If they log in from parallelogram, keep them there
          return window.location.reload(true);
        } else {
          // If they're not on parallelogram, send them to the /login redirect
          return window.location.replace('/login');
        }
      }
    } else {
      // In the rare case where there was a user but it could not be signed in
      // (e.g. if the account has been deleted), we un-hide the page body.
      document.body.style.display = 'block';
    }
  });

  const cachedLevel = document.cookie.match(/level=(year[7-9])/);

  const loginForm = {error: null, reset: false};
  const editForm = {loading: false, error: '', teacherCodes: []};
  const passwordForm = {loading: false, error: ''};
  const signupForm = {error: null, loading: false, level: 'year7',
    birthYear: 2000, isTeacher: location.hash === '#teacher'};

  if (window.USER_DATA) {
    for (let key of ['first', 'last', 'schoolName', 'postCode', 'phoneNumber', 'level']) {
      editForm[key] = window.USER_DATA[key] || null;
    }
    if (window.USER_DATA.teacherCode) {
      editForm.teacherCodes = (window.USER_DATA.teacherCode || []).map(t => ({text: t}));
    }
  }

  const user = {
    level: cachedLevel ? cachedLevel[1] : (window.USER_LEVEL || 'year7'),
    showLogin: false,
    loginForm, editForm, signupForm, passwordForm,

    setLevel(l) {
      user.level = l;
      document.cookie = `level=${l};path=/;max-age=${60 * 60* 24 * 365}`;
    },

    logout() {
      fbAuth.signOut();
    },

    acceptTerms() {
      fbDatabase.collection('users').doc(uid).update({acceptedTerms: true});
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

      justManuallySignedIn = true;
      fbAuth.signInWithEmailAndPassword(loginForm.email, loginForm.password)
        .catch((e) => loginForm.error = ERRORS[e.code] || ERRORS.default);
    },

    async edit(e) {
      e.preventDefault();
      editForm.loading = true;
      editForm.error = null;

      const isTeacher = !!window.USER_DATA.code

      try {
        let schoolName = editForm.schoolName || '';
        const teacherCodes = editForm.teacherCodes.map(c => c.text.trim());

        for (const code of teacherCodes) {
          const res = await fetch(`/validate/${code}`);
          const json = await res.json();
          if (!json.school) {
            editForm.loading = false;
            return editForm.error = ERRORS['teacher-code'].replace('$0', code);
          }
          schoolName = json.school;
        }

        if (!isTeacher && !teacherCodes.length) {
          schoolName = '';
        }

        await fbDatabase.collection('users').doc(uid).update({
          teacherCode: teacherCodes || [],
          level: editForm.level || null,
          phoneNumber: editForm.phoneNumber || null,
          postCode: editForm.postCode || null,
          first: editForm.first || null,
          last: editForm.last || null,
          schoolName: schoolName,
        });

        editForm.loading = false;
        editForm.error = null;
        location.reload(true);
      } catch(error) {
        console.error(error);
        editForm.loading = false;
        editForm.error = ERRORS[error.code] || ERRORS.default;
      }
    },

    async password(e) {
      e.preventDefault();
      if (!passwordForm.new || !passwordForm.old) return passwordForm.error = ERRORS['empty-password'];

      passwordForm.loading = true;
      passwordForm.error = null;

      try {
        const currentUser = fbAuth.currentUser;
        const cred = firebase.auth.EmailAuthProvider
        .credential(currentUser.email, passwordForm.old);
        await currentUser.reauthenticateWithCredential(cred);
        await currentUser.updatePassword(passwordForm.new)
        location.reload(true);
      } catch(error) {
        console.error(error);
        passwordForm.loading = false;
        passwordForm.error = ERRORS[error.code] || ERRORS.default;
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
        const res = await fetch(`/validate/${signupForm.teacherCode}`);
        const json = await res.json();
        if (!json.school) {
          signupForm.loading = false;
          return signupForm.error = ERRORS['teacher-code'].replace('$0', signupForm.teacherCode);
        }

        signupForm.schoolName = json.school;
        signupForm.phoneNumber = signupForm.postCode =
            signupForm.guardianEmail = signupForm.code = null;

      } else {
        signupForm.schoolName = signupForm.phoneNumber =
            signupForm.postCode = signupForm.code = null;
      }

      // Redirect after login
      nextUrl = signupForm.isTeacher ? '/dashboard' : '/introduction';

      // user has come from parallel live, send them back
      if(window.location.href.includes('#live')) {
        nextUrl = '/live'
      }
      
      // Ensure that there are no existing cookies
      document.cookie = '__session=;max-age=-999';

      userPromise = fbAuth.createUserWithEmailAndPassword(signupForm.email, signupForm.password)
          .then(({user}) => {
            return fbDatabase.collection('users').doc(user.uid).set({
              first: signupForm.first || null,
              last: signupForm.last || null,
              teacherCode: signupForm.teacherCode ? [signupForm.teacherCode] : null,
              code: signupForm.code || null,
              level: signupForm.level || null,
              birthYear: signupForm.birthYear || null,
              schoolName: signupForm.schoolName || null,
              phoneNumber: signupForm.phoneNumber || null,
              postCode: signupForm.postCode || null,
              guardianEmail: signupForm.guardianEmail || null,
              acceptedTerms: true,
              userReference: generateUserReference()
            });
          })
          .catch(error => {
            console.error(error);
            signupForm.loading = false;
            signupForm.error = ERRORS[error.code] || ERRORS.default;
          });
    }
  };

  return user;
};
