// =============================================================================
// Parallel Project – Node App
// =============================================================================


const fs = require('fs');
const path = require('path');
const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const user = require('./utilities/user');

const BADGES = require('./build/badges.json');
const PAGES = require('./build/pages.json');
const LEVELS = ['year7', 'year8', 'year9'];
const LEVEL_NAMES = {year7: 'Year 7', year8: 'Year 8', year9: 'Year 9'};

const PAGES_MAP = {};
for (let l of LEVELS) {
  for (let p of PAGES[l]) {
    p.available = +(new Date(p.available));
    p.deadline = +(new Date(p.deadline));
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


// -----------------------------------------------------------------------------
// Set up Express App

firebase.initializeApp({
  credential: firebase.credential.cert(require('../private/service-account.json')),
  databaseURL: `https://${process.env.GCLOUD_PROJECT}.firebaseio.com`,
});

const app = express();
app.set('view engine', 'pug');

app.use(user.getActiveUser);

app.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.badges = BADGES;
  res.locals.pages = {};
  res.locals.now = Date.now();
  res.locals.levels = LEVELS;
  res.locals.levelNames = LEVEL_NAMES;
  res.locals.path = req.path.replace(/\/$/, '');
  res.locals.scoreClass = scoreClass;

  for (let l of LEVELS) {
    res.locals.pages[l] =
        PAGES[l].filter(p => (res.locals.now >= p.available)).slice(0, 5);
  }

  next();
});


// -----------------------------------------------------------------------------
// Request Handlers

app.get('/', (req, res) => res.render('home'));
app.get('/contact', (req, res) => res.render('contact'));

for (let p of ['about', 'introduction', 'parents', 'teachers', 'terms-and-conditions']) {
  const content = fs.readFileSync(path.join(__dirname, `build/${p}.html`));
  app.get('/' + p, (req, res) => res.render('_layout', {content}));
}

app.get('/account', (req, res) => {
  if (!req.user) return error(res, 401);
  res.render('account');
});

app.get('/badges', (req, res, next) => {
  if (!req.user) return error(res, 401);
  res.render('badges');
});

app.get('/signup', (req, res) => {
  if (req.user) res.redirect('/');
  res.render('signup');
});

app.get('/dashboard', async function(req, res, next) {
  if (!req.user) return error(res, 401);
  if (!req.user.code) return error(res, 403);

  const dashboard = {students: {}, pages: {}, error: null};

  for (let l of LEVELS) {
    dashboard.students[l] = [];
    dashboard.pages[l] = PAGES[l];  // TODO filter by active
  }

  const students = await user.getAllStudents(req.user.code);
  const studentKeys = Object.keys(students);

  for (let s of studentKeys) {
    if (!students[s].answers) students[s].answers = {};
    dashboard.students[s.level || 'year7'].push(students[s]);
  }

  if (!studentKeys.length)
    dashboard.error = 'So far, no students have signed up with your class code.';

  res.render('dashboard', {dashboard})
});

app.get('/:pid', (req, res, next) => {
  const pid = req.params.pid;
  if (!PAGES_MAP[pid]) return next();

  const userData = req.user ? (req.user.answers[pid] || {}) : null;
  const body = fs.readFileSync(path.join(__dirname, `build/${pid}.html`));
  res.render('parallelogram', {pid, body, page: PAGES_MAP[pid], userData})
});

app.use((req, res) => error(res, 404));
app.use((e, req, res, next) => error(res, 500));

exports.app = functions.https.onRequest(app);
