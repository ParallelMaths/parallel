const fs = require('fs');
const path = require('path');
const yaml = require('yamljs');
const downloadUsers = require('./utils/downloadUsers');

// -----------------------------------------------------------------------------
// Edit below. You can use the same teacher code for multiple years.
// Set the time string to '' to stop filtering by submission time.

const USE_ARCHIVED_DATA = false;  // Can be 2018 or false

const START_TIME = '1661382000000';
const END_TIME = '';

const TTS_SCHOOLS = [
  {name: 'Bulmershe School', year: 7, teachers: ['AKM2-QCW1','qw6ok'], students: 41},
  {name: 'Bulmershe School', year: 8, teachers: ['h343j'], students: 20},
  {name: 'Bulmershe School', year: 9, teachers: ['qh6b6r'], students: 18},
  {name: 'Bulmershe School', year: 10, teachers: ['r38q-d4w4'], students: 17},
  {name: 'Bulmershe School', year: 11, teachers: ['m94414'], students: 16},

  {name: 'Capital City Academy', year: 7, teachers: ['0K5S-7G5Q'], students: 21},
  {name: 'Capital City Academy', year: 8, teachers: ['H3I7-W5EV'], students: 21},
  {name: 'Capital City Academy', year: 9, teachers: ['cndwm0'], students: 18},
  {name: 'Capital City Academy', year: 10, teachers: ['cjbn9o'], students: 17},
  {name: 'Capital City Academy', year: 11, teachers: ['z8yevt'], students: 15},
  
  {name: 'City Academy Hackney', year: 10, teachers: ['o4xlq9'], students: 20},

  {name: 'Lister Community School', year: 7, teachers: ['nww75'], students: 25},
  {name: 'Lister Community School', year: 8, teachers: ['5448sn'], students: 22},
  {name: 'Lister Community School', year: 9, teachers: ['3to7uh'], students: 13},
  {name: 'Lister Community School', year: 10, teachers: ['ag93qe'], students: 18},

  {name: 'Plashet School', year: 7, teachers: ['t1bmm'], students: 24},
  {name: 'Plashet School', year: 8, teachers: ['8o84e1'], students: 27},
  {name: 'Plashet School', year: 9, teachers: ['5te44x'], students: 22},
  {name: 'Plashet School', year: 10, teachers: ['R4JH-OYQM'], students: 25},
  {name: 'Plashet School', year: 11, teachers: ['9mhdd'], students: 21},
];

// -----------------------------------------------------------------------------

function inTimeRange(q) {
  if (START_TIME && (!q.time || q.time < START_TIME)) return false;
  if (END_TIME && (!q.time || q.time > END_TIME)) return false;
  return true;
}

const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));
for (const y of Object.keys(pageData)) pageData[y].reverse();

async function run() {
  const usersObject = await downloadUsers();
  const users = Object.values(usersObject);
  console.log(`Loading ${users.length} users...`);

  const length = Math.max(...[7, 8, 9, 10, 11].map(i => pageData['year' + i].length));

  const results = ['School, Year, Number of Students'];
  for (let i = 1; i <= length; ++i) {
    results[0] += `, PG${i} Comp, PG${i} Score`;
  }

  for (const s of TTS_SCHOOLS) {
    const data = [s.name, s.year, s.students];

    for (let i = 0; i < length; ++i) {
      const p = pageData['year' + s.year][i];
      if (!p) {
        console.warn(`No parallelogram with number ${i} for year ${s.year}!`);
        continue;
      }

      let attempts = 0;
      let totalScore = 0;

      for (let t of s.teachers) {
        for (let u of users) {
          if (u?.teacherCode?.includes(t) && u.answers) {
            const q = u.answers[p.url];
            if (q && q.submitted && inTimeRange(q)) {
              if (USE_ARCHIVED_DATA ? q.archive === USE_ARCHIVED_DATA : !q.archive) {
                attempts += 1;
                totalScore += (+q.score || 0);
              }
            }
          }
        }
      }

      data.push(attempts ? Math.round(attempts / s.students * 100) + '%' : '');
      data.push(attempts ? Math.round(totalScore / attempts) : '');
    }

    results.push(data.join(','));
  }

  const str = results.join('\n');
  fs.writeFileSync(path.join(__dirname, `../private/results-tts.csv`), str);

  console.log('Done!');
  process.exit();
}

run();
