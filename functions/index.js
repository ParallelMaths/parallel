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
const functions = require('firebase-functions');
const express = require('express');
const user = require('./utilities/user');
const { countries } = require('./utilities/countries')

const BADGES = require('./build/badges.json');
const PAGES = require('./build/pages.json');
const LEVELS = ['year7', 'year8', 'year9',  'year10', 'year11'];
const LEVEL_NAMES = {year5: 'Year 5', year6: 'Year 6', year7: 'Year 7', year8: 'Year 8', year9: 'Year 9', year10: 'Year 10', year11: 'Year 11', year12: 'Year 12', year13: 'Year 13', graduated: 'Graduated'};
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const BADGE_NAMES = {ancient: 'Ancient Hero', geometry: 'Geometry', historic: 'Historic Hero', number: 'Number', modern: 'Modern Hero'};

const PAGES_MAP = {};
for (let l of LEVELS) {
  for (let [i, p] of PAGES[l].entries()) {
    const date = new Date(p.available);
    p.available = +date;
    p.deadline = +(new Date(p.deadline));
    p.date = `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
    p.year = +l.slice(4);
    p.index = PAGES[l].length - i;
    PAGES_MAP[p.url] = p;
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
  res.locals.badges = BADGES;
  res.locals.pages = {};
  res.locals.now = Date.now();
  res.locals.levels = LEVELS;
  res.locals.levelNames = LEVEL_NAMES;
  res.locals.badgeNames = BADGE_NAMES;
  res.locals.path = req.path.replace(/\/$/, '');
  res.locals.scoreClass = scoreClass;

  if (req.user && req.user.showWelcomeMsg) {
    userDB.doc(req.user.uid) // async
        .update({showWelcomeMsg: false})
        .catch(() => console.error('Failed to update welcome msg', req.user.uid));
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
  const latest = res.locals?.pages[res.locals?.user?.level]?.[0];

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
    const {level, code, userReference, first, schoolName, last, uid, accountType} = user;
    res.status(200).send({level, code, userReference, first, schoolName, last, uid, accountType})
  }).catch((err) => {
    console.error(err);
    res.status(400).send('Error')
  })
});

// Redirect from left path to right path
const redirects = {
  '/lives': '/circles',
  '/live': '/circles',
  '/live/admin': '/circles/admin',
  '/circle': '/circles'
}

Object.entries(redirects).forEach(([from, to]) => app.get(from, (_, res) => res.redirect(to)))

const pagesWithoutSidebar = ['primary-parallel', 'primary-parallel-2', 'job-ad']

for (let p of ['about', 'introduction', 'parents', 'teachers', 'terms-and-conditions', 'hints-tips', 'job-ad', 'primary-parallel', 'primary-parallel-2', 'masterclass', 'troubleshooting']) {
  const content = fs.readFileSync(path.join(__dirname, `build/${p}.html`));
  app.get('/' + p, (_, res) => {
    res.locals.sidebarDisabled = pagesWithoutSidebar.includes(p);
    res.render('_layout', {content})
  });
}

app.get('/login', (req, res) => {
  // When logging in we dont load their details before the "login redirect" (see addAuthTokenListener)
  // So we send them to this path to redirect them correctly
  if(res?.locals?.user?.code){
    res.redirect('/dashboard')
  }
  if(res?.locals?.user){
    res.redirect('/badges')
  }
  res.redirect('/');
})

app.get('/account', (req, res) => {
  if (!req.user) return error(res, 401);
  res.render('account');
});

app.get('/account-new', (req, res) => {
  if (!req.user) return error(res, 401);
  res.locals.sidebarDisabled = true
  res.render('account-new', { countries });
});

app.get('/home-educator-form', (req, res) => {
  if (!req.user) return error(res, 401);
  res.locals.sidebarDisabled = true
  res.render('home-educator');
});

app.get('/badges', (req, res) => {
  if (!req.user) return error(res, 401);
  res.render('badges', {showAllBadges: ('reveal' in req.query)});
});

app.get('/signup', (req, res) => {
  if (req.user) res.redirect('/');

  if(req.query.live) {
    res.locals.sidebarDisabled = true
  }

  res.render('signup');
});

app.get('/homeschool-signup', (req, res) => {
  if (req.user) res.redirect('/');

  res.locals.sidebarDisabled = true
  res.locals.homeschoolSignup = true

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
  const userData = {answers, uid: req.user ? req.user.uid : '',
    submitted: ('reveal' in req.query) || answers.submitted || false};

  let badgeLevel = req?.user?.level;

  if(['year5', 'year6'].includes(req?.user?.level)) badgeLevel = 'year7';
  if(['year12', 'year13'].includes(req?.user?.level)) badgeLevel = 'year11';

  let newBadge = null;
  if (req.user && !req.user.code) {
    for (let b of BADGES[badgeLevel]) {
      if (b.score <= req.user.points && req.user.badges.indexOf(b.id) < 0) {
        req.user.badges.push(b.id);
        newBadge = b;
        userDB.doc(req.user.uid) // async
            .update({badges: req.user.badges.join(',')})
            .catch(() => console.error('Failed to update badges', req.user.uid));
      }
    }
  }

  res.render('parallelogram', {pid, body, page: PAGES_MAP[pid], userData, newBadge});
});

app.use((req, res) => error(res, 404));
app.use((e, req, res, next) => {
  console.error(e);
  error(res, 500);
});

exports.app = functions.https.onRequest(app);
