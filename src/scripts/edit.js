// =============================================================================
// Parallel Edit Account
// =============================================================================



export default function(user) {
  const fbAuth = firebase.auth();
  const fbDatabase = firebase.database();

  user.onLoad(async function() {
    if (!user.data) return location.replace('/signup');

    edit.level = user.level || 'year7';
    edit.teacherCode = user.data.teacherCode;
    edit.phoneNumber = user.data.phoneNumber;
  });

  const edit = {
    loading: false,
    error: '',

    teacherCode: '',
    level: '',
    phoneNumber: '',
    old: '',
    new: '',

    async submit(e) {
      e.preventDefault();
      edit.loading = true;
      edit.error = null;

      try {
        let schoolName = null;
        let country = null;

        if (edit.teacherCode) {
          let teacher = await fbDatabase.ref('users').orderByChild('code')
                .equalTo(edit.teacherCode).once('value');
          teacher = teacher.toJSON();
          if (!teacher) throw {code: 'teacher-code'};

          teacher = teacher[Object.keys(teacher)[0]];
          schoolName = teacher.schoolName;
          country = teacher.country;
        }

        await fbDatabase.ref('users/' + user.uid).update({
          teacherCode: edit.teacherCode || null,
          level: edit.level || null,
          phoneNumber: edit.phoneNumber || null,
          schoolName, country
        });

        if (edit.new) {
          if (!edit.old) throw {code: 'empty-password'};
          const currentUser = fbAuth.currentUser;
          const cred = firebase.auth.EmailAuthProvider
                .credential(currentUser.email, edit.new);
          await currentUser.reauthenticateWithCredential(cred);
          await currentUser.updatePassword(edit.new)
        }

        edit.loading = false;
        edit.error = 'Your account has been updated!';
        user.data.schoolName = schoolName

      } catch(error) {
        console.error(error);
        edit.loading = false;

        switch (error.code) {
          case 'empty-password':
            return edit.error = 'To change your password, please enter your existing one.';
          case 'teacher-code':
            return edit.error = 'This teacher code is invalid.';
          case 'auth/weak-password':
            return edit.error = 'Please pick a stronger password!';
          case 'auth/wrong-password':
            return edit.error = 'Your old password is incorrect.';
          default:
            return edit.error = 'Sorry, something went wrong. Please try again!';
        }
      }

    }
  };

  return edit;
};
