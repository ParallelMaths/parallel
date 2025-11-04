// =============================================================================
// Parallel Project – Node App
// =============================================================================


const firebase = require('firebase-admin');
firebase.initializeApp({
  credential: firebase.credential.cert(require('./build/service-account.json')),
  databaseURL: `https://parallel-cf800.firebaseio.com`,
});

const fs = require('fs');
const path = require('path');
const functions = require('firebase-functions/v1');
const express = require('express');
const user = require('./utilities/user');
const { getPrivacyState } = require('./utilities/privacy/utils');
const privacyRouter = require('./utilities/privacy/router');
const { countries } = require('./utilities/countries')
const isProfileComplete = require('./utilities/profileComplete');
const { getCleanAnswers, getPgPoints } = require('./utilities/pgPoints')
const { getTypeSafeUser } = require('./utilities/getTypeSafeUser')

const PAGES = require('./build/pages.json');
const LEVELS = ['year6', 'year7', 'year8', 'year9',  'year10', 'year11'];
const LEVEL_NAMES = {year6: 'Level 1', year7: 'Level 2', year8: 'Level 3', year9: 'Level 4', year10: 'Level 5', year11: 'Level 6', graduated: 'Graduated'};
const LEVEL_NAMES_WITH_AGES = {year6: 'Level 1 (ages 11 and below)', year7: 'Level 2 (age 11-12)', year8: 'Level 3 (age 12–13)', year9: 'Level 4 (age 13–14)', year10: 'Level 5 (age 14–15)', year11: 'Level 6 (ages 15 and above)', graduated: 'Graduated'};
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const PAGES_MAP = {};
for (let l of LEVELS) {
  for (let [i, p] of PAGES[l].entries()) {
    const date = new Date(p.available);
    p.available = +date;
    p.deadline = +(new Date(p.deadline));
    p.date = `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
    p.level = +l.slice(4) - 5; // -5 turns year 6 into level 1
    p.index = PAGES[l].length - i;
    PAGES_MAP[p.url] = p;
  }
}

const TEST_MAP = {};
const ALL_TEST_MAP = {};
for (let [i, p] of PAGES['test'].entries()) {
  const available = new Date(p.available);
  const deadline = new Date(p.deadline);
  const answersVisibleFrom = new Date(p.answersVisibleFrom || '2010-01-01T01:00:00' /* in the past */);
  const now = Date.now();

  ALL_TEST_MAP[p.url] = p;

  if(available < now && deadline > now) {
    p.answersVisible = answersVisibleFrom < now;
    TEST_MAP[p.url] = p;
  }
}

const HOMEWORK_MAP = {};
for (let [i, p] of PAGES['homework'].entries()) {
  const available = new Date(p.available);
  const now = Date.now();

  if(available < now) {
    HOMEWORK_MAP[p.url] = p;
  }
}

function scoreClass(score) {
  if (score >= 90) return 'tesseract';
  if (score >= 70) return 'cube';
  if (score >= 50) return 'square';
  if (score >= 20) return 'line';
  return 'point';
}

function error(res, code) {
  res.status(code);
  res.locals = {
    sidebarDisabled: true
  }
  return res.render('error', {code});
}

function letterOrder(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

// -----------------------------------------------------------------------------
// Set up Express App

const userDB = firebase.firestore().collection('users');
const app = express();
app.set('view engine', 'pug');

app.use(user.getActiveUser);

app.use((req, res, next) => {
  res.locals.isProduction = process.env.NODE_ENV === 'production';
  res.locals.user = req.user;
  res.locals.profileComplete = isProfileComplete(req.user);
  res.locals.pages = {};
  res.locals.now = Date.now();
  res.locals.levels = LEVELS;
  res.locals.levelNames = LEVEL_NAMES;
  res.locals.levelNamesWithAges = LEVEL_NAMES_WITH_AGES;
  res.locals.path = req.path.replace(/\/$/, '');
  res.locals.scoreClass = scoreClass;

  if (req.user && req.user.showWelcomeMsg && !req.query.latest && !req.path.includes('/api')) {
    userDB.doc(req.user.uid) // async
        .update({showWelcomeMsg: false})
        .catch(() => console.error('Failed to update welcome msg', req.user.uid));
  }

  if (req.query.iframe) {
    res.locals.insideIframe = true;
  }

  for (let l of LEVELS) {
    res.locals.pages[l] =
        PAGES[l].filter(p => (res.locals.now >= p.available));
  }

  next();
});


// -----------------------------------------------------------------------------
// Request Handlers

app.get('/', (req, res) => res.render('home'));
app.get('/parallelograms', (req, res) => {
  // If ?latest is set, redirect to latest PG for their level
  // Graduated users are treated as year11 for this purpose
  // This avoids a bug where `showWelcomeMsg` gets stuck on true
  // because they retain the `latest` query param
  const levelWithoutGraduated = (res.locals.user?.level === 'graduated') ? 'year11' : res.locals.user?.level;
  const latest = res.locals?.pages[levelWithoutGraduated]?.[0];

  if(latest && req.query.latest) {
    return res.redirect(`/${latest.url}`)
  }

  res.render('parallelograms')
})
app.get('/contact', (req, res) => res.render('contact'));

app.get('/api/user', async (req, res) => {
  const token = req.headers['parallel-token'];

  if(!token) return res.status(400).send('Missing token');

  await user.getUserFromToken(token).then((user) => {
    res.status(200).send(getTypeSafeUser(user))
  }).catch((err) => {
    console.error(err);
    res.status(400).send('Error')
  })
});

app.use('/api/privacy', privacyRouter)

app.get('/api/get-user', async (req, res) => {
  const token = req.headers['parallel-token'];

  if(!token) return res.status(401).send({ error: 'no token' });

  const userData = await user.getUserFromToken(token);

  if(userData.accountType !== 'ADMIN') return res.status(403).send({ error: 'not admin' });

  const id = req.query.id;

  if(!id) return res.status(401).send({ error: 'no id' });

  const found = await user.getUserData(id);

  if(!found) return res.status(401).send({ error: 'no user data found' });

  res.status(200).send(getTypeSafeUser({...found }))
});

app.get('/api/find-user', async (req, res) => {
  const token = req.headers['parallel-token'];

  if(!token) return res.status(401).send({ error: 'no token' });

  const userData = await user.getUserFromToken(token);

  if(userData.accountType !== 'ADMIN') return res.status(403).send({ error: 'not admin' });

  const email = req.query.email;

  if(!email) return res.status(401).send({ error: 'no email' });

  const authUser = await user.getUserAuthByEmail(email);

  if(!authUser || !authUser.uid || !authUser.email) return res.status(401).send({ error: 'no auth user found' });

  const found = await user.getUserData(authUser.uid);

  if(!found) return res.status(401).send({ error: 'no user data found' });

  res.status(200).send(getTypeSafeUser({...found, email: authUser.email, privacy: getPrivacyState(authUser.email, found) }))
});

app.get('/api/user-answers', async (req, res) => {
  const token = req.headers['parallel-token'];

  const userId = req.query.id

  if (token?.length) {
    const userData = await user.getUserFromToken(token);
    if(userData.euclidAccountType !== 'ADMIN') return res.status(403).send({ error: 'not admin (token)' });
  } else {
    const idToken = await user.getIdTokenFromRequest(req, res).catch(() => null);
    if(!idToken) return res.status(401).send({ error: 'no token (cookie)' });
    const userData = await user.getUserFromToken(idToken);

    if(userData.uid !== userId && userData.euclidAccountType !== 'ADMIN') {
      return res.status(403).send({ error: 'not admin (cookie)' })
    };
  }

  const found = await user.getUserData(userId);

  if(!found) return res.status(401).send({ error: 'no user data found' });

  const answers = found.answers || {};
  const clean = getCleanAnswers(answers);
  res.status(200).send({ answers: clean, level: found.level });
});

app.get('/api/scores', async (req, res) => {
  const answers = res?.locals?.user?.answers || {};
  const level = res?.locals?.user?.level || 'year6';
  const awardAdjustments = res?.locals?.user?.awardAdjustments;
  const isTeacher = !!res?.locals?.user?.code;

  if(!res?.locals?.user) {
    return res.status(200).send({ error: true });
  }

  const clean = getCleanAnswers(answers);

  const availablePGs = Object.entries(res.locals.pages).reduce((acc, [year, values]) => {
    acc[year] = values.map(v => v.url)
    return acc;
  }, {});

  res.status(200).send({
    profileComplete: res.locals.profileComplete,
    computedFullPGPoints: getPgPoints(res?.locals?.user),
    level,
    awardAdjustments,
    answers: clean,
    isTeacher,
    availablePGs
  });
});

app.get('/api/test-data', async (req, res) => {
  const token = req.headers['parallel-token'];

  if (token?.length) {
    const userData = await user.getUserFromToken(token);
    if(userData.euclidAccountType !== 'ADMIN') return res.status(403).send({ error: 'not admin (token)' });
  } else {
    const idToken = await user.getIdTokenFromRequest(req, res).catch(() => null);
    if(!idToken) return res.status(401).send({ error: 'no token (cookie)' });
    const userData = await user.getUserFromToken(idToken);
    if(userData.euclidAccountType !== 'ADMIN') return res.status(403).send({ error: 'not admin (cookie)' });
  }

  const data = {};

  const since = req.query.since
  ? new Date(Number(req.query.since)).getTime()
  : new Date(
      `${new Date().toISOString().split("T")[0]}T00:00:00.000Z`,
    ).getTime();

  if(isNaN(since)) return res.status(400).send('Invalid date');

  for (let page of Object.keys(ALL_TEST_MAP)) {
    const query = await userDB.where(`answers.${page}.firstAnswer`, '>', since).get();
    const newVal = query.docs.map(d => {
      const da = d.data();
      return {
        ...da.answers[page],
        uid: d.id,
        first: da.first,
        last: da.last,
      };
    });

    data[page] = [...(data[page] || []), ...newVal];
  }

  // Load 1 correct entry per pages.
  // Ran separately incase was answered before the since date.
  // Return the most recent correct answer, in case test is edited.
  for (let page of Object.keys(ALL_TEST_MAP)) {
    const query = await userDB.where(`answers.${page}.score`, '==', 100).get();

    const newVal = query.docs.map(d => {
      const da = d.data();
      return {
        ...da.answers[page],
        uid: 1234,
        first: 'Correct',
        last: 'Answers',
      };
    }).sort((a, b) => b.time - a.time)[0];

    if (newVal) {
      data[page] = [...(data[page] || []), newVal];
    }
  }

  res.status(200).send(data);
});

app.get('/api/parallelogram/all/:pid', async (req, res) => {
  const token = req.headers['parallel-token'];
  const pid = req.params.pid;

  if (token?.length) {
    const userData = await user.getUserFromToken(token);
    if(userData.euclidAccountType !== 'ADMIN') return res.status(403).send({ error: 'not admin (token)' });
  } else {
    const idToken = await user.getIdTokenFromRequest(req, res).catch(() => null);
    if(!idToken) return res.status(401).send({ error: 'no token (cookie)' });
    const userData = await user.getUserFromToken(idToken);
    if(userData.euclidAccountType !== 'ADMIN') return res.status(403).send({ error: 'not admin (cookie)' });
  }

  const since = req.query.since
    ? new Date(Number(req.query.since)).getTime()
    : new Date(
        `${new Date().toISOString().split("T")[0]}T00:00:00.000Z`,
      ).getTime();

  if(isNaN(since)) return res.status(400).send('Invalid date');

  const query = await userDB.where(`answers.${pid}.firstAnswer`, '>', since).get();

  const data = query.docs.map(d => {
    const da = d.data();
    return {
      ...da.answers[pid],
      uid: d.id,
      first: da.first,
      last: da.last,
    };
  });

  const query2 = await userDB.where(`answers.${pid}.score`, '==', 100).get();

  const newVal = query2.docs.map(d => {
    const da = d.data();
    return {
      ...da.answers[pid],
      uid: 1234,
      first: 'Correct',
      last: 'Answers',
    };
  }).sort((a, b) => b.time - a.time)[0];

  res.status(200).send({
    [pid]: [...data, newVal]
  });
});

const parallelogramHandler = async (req, res) => {
  const token = req.headers['parallel-token'];
  const pid = req.params.pid;

  if(!token && res.locals.user) {
    const answers = res.locals.user.answers || {};
    if(answers[pid]) {
      return res.status(200).send({
        score: answers[pid].score || null,
        submitted: answers[pid].submitted || false,
        time: answers[pid].time || null,
        firstAnswer: answers[pid].firstAnswer || null,
      });
    }
    return res.status(200).send({ error: 'no data found (cookie)' });
  }

  try {
    const userData = await user.getUserFromToken(token);
    const data = await user.getUserData(userData.uid);

    if(!data) return res.status(403).send({ error: 'no user data found (header token)' });

    const answers = data.answers || {};

    if(answers[pid]) {
      return res.status(200).send({
        score: answers[pid].score || null,
        submitted: answers[pid].submitted || false,
        time: answers[pid].time || null,
        firstAnswer: answers[pid].firstAnswer || null,
      });
    }

    return res.status(200).send({ error: 'no data found (header token)' });
  } catch (error) {
    return res.status(500).send({ error: error.code || 'Unknown error (header token)' });
  }
}

app.get('/api/parallelogram/:type/:pid', parallelogramHandler);
app.get('/api/parallelogram/:pid', parallelogramHandler);

app.get('/api/reset-show-message', async (req, res) => {
  if (!req.user) return error(res, 401);

  userDB.doc(req.user.uid) // async
        .update({showWelcomeMsg: true})
        .catch(() => console.error('Failed to update welcome msg', req.user.uid));

  res.status(200).send('set');
});

// Redirect from left path to right path
const redirects = {
  '/lives': '/circles',
  '/live': '/circles',
  '/live/admin': '/circles/admin',
  '/circle': '/circles'
}

Object.entries(redirects).forEach(([from, to]) => app.get(from, (_, res) => res.redirect(to)))

const pagesWithoutSidebar = ['primary-parallel', 'pmc', 'job-ad', 'tutorinfo', 'privacy-notice', 'developer-support']
const pagesWithoutPrivacyModal = ['privacy-notice']

for (let p of ['about', 'introduction', 'parents', 'teachers', 'privacy-notice', 'safeguarding', 'hints-tips', 'job-ad', 'developer-support', 'pmc', 'primary-parallel', 'masterclass', 'troubleshooting', 'tutorinfo', 'academy-primary-parent', 'academy-primary-teacher']) {
  const content = fs.readFileSync(path.join(__dirname, `build/${p}.html`));
  app.get('/' + p, (_, res) => {
    res.locals.sidebarDisabled = pagesWithoutSidebar.includes(p);
    res.locals.privacyModalDisabled = pagesWithoutPrivacyModal.includes(p);
    res.render('_layout', {content})
  });
}

app.get('/login', (req, res) => {
  // When logging in we dont load their details before the "login redirect" (see addAuthTokenListener)
  // So we send them to this path to redirect them correctly
  if(res?.locals?.user?.code){
    res.redirect('/dashboard')
  }
  res.redirect('/');
})

app.get('/account', (req, res) => {
  if (!req.user) return error(res, 401);
  res.locals.sidebarDisabled = true
  res.render('account', { countries });
});

app.get('/home-educator-form', (req, res) => {
  if (!req.user) return error(res, 401);
  res.locals.sidebarDisabled = true
  res.render('home-educator');
});

app.get('/signup', (req, res) => {
  if (req.user) res.redirect('/');

  if(req.query.live || req.query.ns) {
    res.locals.sidebarDisabled = true
  }

  if(req.query.nn) {
    res.locals.noNavigation = true;
  }

  if(req.query.so) {
    res.locals.studentSignupOnly = true;
  }

  if(req.query.rd) {
    res.locals.signupSource = req.query.rd
  }

  res.render('signup');
});

async function getDashboardData(req) {
  const dashboard = {students: {}, pages: {}, error: null};

  for (let l of LEVELS) {
    dashboard.students[l] = [];
    dashboard.pages[l] = PAGES[l].filter((p) => Date.now() >= p.available);
  }

  const students = await user.getAllStudents(req.user.code);
  const studentKeys = Object.keys(students)
      .filter(s => students[s].level !== 'graduated')
      .sort((a, b) => letterOrder(students[a].last, students[b].last));

  for (let s of studentKeys) {
    if (!students[s].answers) students[s].answers = {};
    dashboard.students[students[s].level || 'year7'].push(students[s]);
  }

  if (!studentKeys.length)
    dashboard.error = 'So far, no students have signed up with your class code.';

  return dashboard;
}

app.get('/dashboard', async function(req, res) {
  if (!req.user) return error(res, 401);
  if (!req.user.code) return error(res, 403);

  const dashboard = await getDashboardData(req);
  res.render('dashboard', {dashboard})
});

async function getApiDashboardData(req) {
  const dashboard = await getDashboardData(req);
  const newDashboard = {students: [], pages: {}, error: dashboard.error};

  for (let l of LEVELS) {
    for (const p of dashboard.pages[l]) {
      newDashboard.pages[l] = newDashboard.pages[l] || [];
      
      newDashboard.pages[l].push({
        url: p.url,
        index: p.index
      })
    }

    for (const s of dashboard.students[l]) {
      newDashboard.students.push({
        uid: s.uid,
        first: s.first,
        last: s.last,
        level: s.level,
        userReference: s.userReference,
        answers: Object.entries(s.answers || {}).reduce((acc, [url, item]) => {
          acc[url] = {
            firstAnswer: item.firstAnswer,
            score: item.score,
          };
          return acc;
        }, {})
      })
    }
  }

  return newDashboard;
}

app.get('/api/dashboard', async function(req, res) {
  if (!req.user) return res.status(200).send({ error: 'not signed in'});
  if (!req.user.code) return res.status(200).send({ error: 'not teacher'});

  const dashboard = await getApiDashboardData(req);
  
  res.status(200).send(dashboard);
});

app.get('/api/teacher-student', async function(req,res) {
  if (!req.user) return error(res, 401);
  if (!req.user.code) return error(res, 403);
  if (!req.query.uid)  return error(res, 404);

  const student = await userDB.doc(req.query.uid).get();
  if (!student.exists) return error(res, 403);

  const studentData = student.data();
  const studentCodes = studentData.teacherCode || [];

  if (!studentCodes.includes(req.user.code)) return error(res, 403);

  res.status(200).send({
    uid: studentData.uid,
    first: studentData.first,
    last: studentData.last,
    level: studentData.level,
  });
});

app.get('/dashboard.csv', async function(req, res) {
  if (!req.user) return error(res, 401);
  if (!req.user.code) return error(res, 403);

  const dashboard = await getDashboardData(req);
  const results = [];

  for (let l of LEVELS) {
    if (!dashboard.students[l].length) continue;

    results.push(LEVEL_NAMES[l]);

    const titles = ['Name', "Student Reference"];
    for (const p of dashboard.pages[l]) titles.push('PG' + p.index);
    results.push(titles.join(','));

    for (const s of dashboard.students[l]) {
      const row = [`"${s.first} ${s.last}"`, `"${s.userReference || ''}"`];
      for (const p of dashboard.pages[l]) {
        const answers = s.answers[p.url];
        row.push(answers?.score !== undefined ? answers.score : ``);
      }
      results.push(row.join(','));
    }

    results.push('', '');
  }

  const response = results.join('\n');

  res.setHeader('Content-disposition', 'attachment; filename=parallel-data.csv');
  res.set('Content-Type', 'text/csv');
  res.status(200).send(response);
});

app.post('/remove-student', async function(req,res) {
  if (!req.user) return error(res, 401);
  if (!req.user.code) return error(res, 403);

  const student = await userDB.doc(req.body.id).get();
  if (!student.exists) return error(res, 403);
  const studentCodes = student.data().teacherCode || [];
  if (!studentCodes.includes(req.user.code)) return error(res, 403);

  await userDB.doc(req.body.id).update({teacherCode: studentCodes.filter(c => c !== req.user.code)});
  res.sendStatus(200);
});

app.post('/update-student', async function(req,res) {
  if (!req.user) return error(res, 401);
  if (!req.user.code) return error(res, 403);

  const student = await userDB.doc(req.body.id).get();
  if (!student.exists) return error(res, 403);
  const studentData = student.data();
  const studentCodes = studentData.teacherCode || [];
  if (!studentCodes.includes(req.user.code)) return error(res, 403);

  const updateData = {
    first: studentData.first,
    last: studentData.last,
    level: studentData.level,
  }

  if (typeof req.body.first === 'string' && req.body.first.length) {
    updateData.first = req.body.first;
  }

  if (typeof req.body.last === 'string' && req.body.last.length) {
    updateData.last = req.body.last;
  }

  if (LEVELS.includes(req.body.level)) {
    updateData.level = req.body.level;
  }

  await userDB.doc(req.body.id).update(updateData);
  res.sendStatus(200);
});

app.get('/validate/:code', async (req, res) => {
  const code = req.params.code;
  const data = await userDB.where('code', '==', code).limit(1).get();
  const teacher = data.docs[0]?.data();
  res.json(teacher ? {school: teacher.schoolName || 'Unknown School'} : {error: 'invalid-code'});
});

app.get('/:pid', (req, res, next) => {
  const pid = req.params.pid;
  if (!PAGES_MAP[pid]) return next();

  const body = fs.readFileSync(path.join(__dirname, `build/${pid}.html`))
      .toString().replace(/<h1.*<\/h1>/, '');

  const answers = req.user ? (req.user.answers[pid] || {}) : {};
  const userData = {
    answers,
    uid: req.user ? req.user.uid : "",
    submitted: "reveal" in req.query || answers.submitted || false,
    isTeacher: !!req.user?.code,
  };

  res.render('parallelogram', {pid, body, page: PAGES_MAP[pid], userData});
});

app.get('/homework/:pid', (req, res, next) => {
  const pid = req.params.pid;
  if (!HOMEWORK_MAP[pid]) return next();

  const page = HOMEWORK_MAP[pid];

  const body = fs.readFileSync(path.join(__dirname, `build/${pid}.html`))
      .toString().replace(/<h1.*<\/h1>/, '');

  let hasPassword = false;
  let passwordIncorrect = false;

  if(!page.password) {
    hasPassword = true;
  } else if(req.query.p) {
    if(req.query.p == page.password) {
      hasPassword = true;
    } else {
      passwordIncorrect = true;
    }
  }

  const answers = req.user ? (req.user.answers[pid] || {}) : {};
  const userData = {
    answers,
    uid: req.user ? req.user.uid : "",
    submitted: "reveal" in req.query || answers.submitted || false,
    isTeacher: !!req.user?.code,
    hasPassword,
    passwordIncorrect,
    googleFormName: `${req.user?.first || 'First'} ${req.user?.last || 'Last'}`,
    googleFormEmail: req.user?.email || '',
    googleFormFilename: `${req.user?.googleFormFilename || req.user?.userReference || req.user?.uid || 'filename'}.pdf`
  };

  res.locals.sidebarDisabled = true

  res.render('homework', {pid, body, page: HOMEWORK_MAP[pid], userData});
});

app.get('/test/:pid', (req, res, next) => {
  const pid = req.params.pid;
  if (!TEST_MAP[pid]) return next();

  const page = TEST_MAP[pid];

  const body = fs.readFileSync(path.join(__dirname, `build/${pid}.html`))
      .toString().replace(/<h1.*<\/h1>/, '');

  let hasPassword = false;
  let passwordIncorrect = false;

  const answers = req.user ? (req.user.answers[pid] || {}) : {};
  
  const showAnswersIfSubmitted = !page.answersVisible && answers.submitted && page.showAnswersIfSubmitted; 

  if(!page.password || page.answersVisible || showAnswersIfSubmitted) {
    hasPassword = true;
  } else if(req.query.p) {
    if(req.query.p == page.password) {
      hasPassword = true;
    } else {
      passwordIncorrect = true;
    }
  }

  const answersVisible = "reveal" in req.query || page.answersVisible || showAnswersIfSubmitted || false;

  const userData = {
    answers,
    uid: req.user ? req.user.uid : "",
    submitted: "reveal" in req.query || answers.submitted || false,
    isTeacher: !!req.user?.code,
    answersVisible,
    showPostSubmissionMessage: !answersVisible || showAnswersIfSubmitted,
    hasPassword,
    passwordIncorrect
  };

  if (req.user) {
    res.locals.sidebarDisabled = true
  }

  res.render('test', {pid, body, page, userData});
});

app.use((req, res) => error(res, 404));
app.use((e, req, res, next) => {
  console.error(e);
  error(res, 500);
});

exports.app = functions.https.onRequest(app);
