// =============================================================================
// Parallel Teachers
// =============================================================================



import { getLevel } from './user';

export default function(user, pages) {
  const fbDatabase = firebase.database();
  const allPages = [...pages.year7, ...pages.year8];

  user.onLoad(async function() {
    let data = await fbDatabase.ref('users').orderByChild('class').equalTo(user.data.class).once('value');
    data = data.toJSON() || {};

    const students = [];
    const attempted = new Set();

    for(let k of Object.keys(data)) {
      if (data[k].isTeacher) continue;
      students.push({id: k, name: data[k].first + ' ' + data[k].last});

      const a = await fbDatabase.ref('answers/' + k).once('value');
      const answers = a.toJSON() || {};

      teacher.answers[k] = {};
      for (let a of Object.keys(answers)) {
        if (!answers[a].submitted) continue;
        attempted.add(a);
        const score = Math.round(answers[a].score * 100);
        teacher.answers[k][a] = {score, level: getLevel(score) };
      }
    }

    if (!students.length) return teacher.error = 'So far, no students have signed up with your class code.';

    const pages = allPages.filter(x => attempted.has(x.url));
    if (!pages.length) return teacher.error = 'So far, no students have submitted any solutions.';

    teacher.pages = pages;
    teacher.students = students;
    teacher.error = null;
  });

  const teacher = {
    students: [],
    pages: [],
    answers: {},
    error: 'Loading…'
  };

  return teacher;
};
