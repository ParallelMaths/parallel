// =============================================================================
// Parallel Teachers
// =============================================================================



import { getLevel } from './user';

export default function(user, pages) {
  const fbDatabase = firebase.database();

  const pages7 = pages.year7; //.filter(p => xx);  TODO filter by active
  const pages8 = pages.year8; //.filter(p => xx);

  user.onLoad(async function() {
    if (!user.data) return location.replace('/signup');

    let students = await fbDatabase.ref('users').orderByChild('teacherCode').equalTo(user.data.code).once('value');
    students = students.toJSON() || {};

    for (let s of Object.keys(students)) {
      const array = students[s].level === 'year8' ? 'students8' : 'students7';
      teacher[array].push({id: s, name: students[s].first + ' ' + students[s].last});
      teacher.answers[s] = {};
    }

    if (!teacher.students7.length && !teacher.students8.length)
      return teacher.error = 'So far, no students have signed up with your class code.';

    for (let s of Object.keys(students)) {
      for (let p of [...pages7, ...pages8]) {
        let answers = await fbDatabase.ref('answers/' + s + '/' + p.url).once('value');
        answers = answers.toJSON() || {};
        if (answers.submitted) {
          const score = Math.round(answers.score * 100);
          teacher.answers[s][p.url] = {score, level: getLevel(score)};
        }
      }
    }

    teacher.error = '';
    teacher.ready = true;
  });

  const teacher = {
    students7: [],
    students8: [],
    pages7, pages8,
    answers: {},
    error: 'Loading…',
    ready: false
  };

  return teacher;
};
