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
    birthYear: 2000, type: location.hash === '#teacher' ? 'teacher' : location.hash === '#parent' ? 'parent' : 'student', primaryEmailType: null, messages: {}};

  signupForm.messages.student = {
    firstName: "First Name",
    surname: "Surname",
    email: "Email",
    emailSubtext:
      "(We sometimes find that our emails are blocked by school firewalls and therefore suggest that you do not use a school email address if possible.)",
    emailQuestion: "Is this a student's email or a parent's?",
    emailQuestionStudent: "My own",
    teacherCode: "Teacher code",
    teacherCodeSubtext:
      "(Your teacher will give you this code, if you are participating as part of a school. If not, or you're not sure, no problem - just leave this blank for now)",
    yearGroup: "Year",
    yearOfBirth: "Year of Birth",
    emailOfParent: "Email of a parent or guardian",
    emailOfParentSubtext:
      "This is required because you are not yet 13 years old.",
  };

  signupForm.messages.teacher =  {
    ...signupForm.messages.student,
    emailSubtext: undefined
  }

  signupForm.messages.parent = {
    ...signupForm.messages.student,
    firstName: "Your child's first name",
    surname: "Your child's surname",
    emailSubtext: "(Used to log in)",
    emailQuestion: "Is this your child's own email or a parent's email?",
    emailQuestionStudent: "Child's",
    teacherCodeSubtext: "(If your child is participating in Parallel via their school, their teacher may have given them this code. If not, or you're not sure, no problem - just leave this blank for now)",
    yearGroup: "Your child's year group",
    yearOfBirth: "Your child's year of birth",
    emailOfParentSubtext: "This is required because your child is not yet 13 years old."
  }

  signupForm.messages.homeschool_student = {
    ...signupForm.messages.student,
    firstName: "Student's First Name",
    surname: "Student's Surname",
    emailSubtext: undefined,
    teacherCodeSubtext: "(optional)",
    monthOfBirth: "Month of Birth"
  }

  if (document.location.pathname.match(/homeschool/)) {
    signupForm.type = 'homeschool_student';
  }

  if (window.USER_DATA) {
    for (let key of ['first', 'last', 'schoolName', 'postCode', 'phoneNumber', 'level']) {
      editForm[key] = window.USER_DATA[key] || null;
    }
    if (window.USER_DATA.teacherCode) {
      editForm.teacherCodes = (window.USER_DATA.teacherCode || []).map(t => ({text: t}));
    }
  }

  let level = cachedLevel ? cachedLevel[1] : (window.USER_LEVEL || 'year7');

  if (level === 'year5' || level === 'year6') {
    level = 'year7'
  }

  if (level === 'year12' || level === 'year13') {
    level = 'year11'
  }


  const hasSeenYearScopeMessage = document.cookie.match(/yearScopeMessageSeen/);
  const isTooYoung = window.USER_LEVEL === "year5" || window.USER_LEVEL === "year6";
  const isTooOld = window.USER_LEVEL === "year12" || window.USER_LEVEL === "year13";
  const showYearScopeMessage = hasSeenYearScopeMessage ? false : isTooYoung ? 1 : isTooOld ? 2 : false;

  const user = {
    level,
    showLogin: false,
    showYearScopeMessage,
    loginForm, editForm, signupForm, passwordForm,

    hideYearScopeMessage() {
      user.showYearScopeMessage = false;
      document.cookie = `yearScopeMessageSeen=1;path=/;max-age=${60 * 60* 24 * 365}`;
    },

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

      if (signupForm.type === 'teacher') {
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
      nextUrl = signupForm.type === 'teacher' ? '/dashboard' : '/introduction';

      // user has come from parallel live, send them back
      if(window.location.href.includes('#live') || window.location.href.includes('?live') || window.location.href.includes('#circles') || window.location.href.includes('?circles')) {
        nextUrl = '/circles'
      }

      // Ensure that there are no existing cookies
      document.cookie = '__session=;max-age=-999';

      let guardianEmail = signupForm.guardianEmail || null;

      if (signupForm.primaryEmailType === 'parent') {
        guardianEmail = signupForm.email;
      }

      let primaryEmailType = signupForm.type === 'teacher' ? 'teacher' : signupForm.primaryEmailType

      const signupData = {
        first: signupForm.first || null,
        last: signupForm.last || null,
        teacherCode: signupForm.teacherCode ? [signupForm.teacherCode] : null,
        code: signupForm.code || null,
        level: signupForm.level || null,
        birthMonth: signupForm.birthMonth || null,
        birthYear: signupForm.birthYear || null,
        schoolName: signupForm.schoolName || null,
        phoneNumber: signupForm.phoneNumber || null,
        postCode: signupForm.postCode || null,
        guardianEmail,
        acceptedTerms: true,
        userReference: generateUserReference(),
        primaryEmailType,
        accountType: signupForm.type
      }

      userPromise = fbAuth.createUserWithEmailAndPassword(signupForm.email, signupForm.password)
          .then(({user}) => {
            return fbDatabase.collection('users').doc(user.uid).set(signupData);
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
