const fs = require('fs');
const path = require('path');
const yaml = require('yamljs');
const JSDom = require('jsdom').JSDOM;
const downloadUsers = require('./utils/downloadUsers');

// -----------------------------------------------------------------------------
// Edit below.
// Set the time string to '' to stop filtering by submission time.

const START_TIME = '1661382000000';
const END_TIME = '';

// -----------------------------------------------------------------------------

function inTimeRange(q) {
  if (START_TIME && (!q.time || q.time < START_TIME)) return false;
  if (END_TIME && (!q.time || q.time > END_TIME)) return false;
  return true;
}

function getQuestionHeadings(number) {
  return [`Q${number} answer`, 'Hint?', 'Q1 marks']
}

const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));

let pages = [...pageData.year6, ...pageData.year7, ...pageData.year8, ...pageData.year9, ...pageData.year10, ...pageData.year11];
pages = pages.filter(p => new Date(p.available) < Date.now());

async function run() {
  const usersObject = await downloadUsers();
  const users = Object.entries(usersObject);

  const emailData = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(emailData)).users;
  const emailMap = {};
  for (let a of accounts) emailMap[a.localId] = a.email;
  

  // TODO

  console.log('Results saved')
  process.exit();
}

run();
