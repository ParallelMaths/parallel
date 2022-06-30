const fs = require('fs');
const path = require('path');
const yaml = require('yamljs');
const downloadUsers = require('./utils/downloadUsers');

// -----------------------------------------------------------------------------
// Edit below. You can use the same teacher code for multiple years.
// Set the time string to '' to stop filtering by submission time.

const USE_ARCHIVED_DATA = false;  // Can be 2018 or false

const START_TIME = '';
const END_TIME = '';

const TTS_SCHOOLS = [
  {name: 'Bulmershe School', year: 7, teachers: ['h343j'], students: 18},
  {name: 'Bulmershe School', year: 8, teachers: ['qh6b6r'], students: 21},
  {name: 'Bulmershe School', year: 9, teachers: ['4kuds0'], students: 14},
  {name: 'Bulmershe School', year: 10, teachers: ['mg4414'], students: 14},
  {name: 'Bulmershe School', year: 11, teachers: ['qw6ok'], students: 15},

  {name: 'Capital City Academy', year: 7, teachers: ['wpe0u5'], students: 21},
  {name: 'Capital City Academy', year: 8, teachers: ['cndwm0'], students: 19},
  {name: 'Capital City Academy', year: 9, teachers: ['cjbn9o'], students: 17},
  {name: 'Capital City Academy', year: 10, teachers: ['z8yevt'], students: 15},

  {name: 'City Academy Hackney', year: 7, teachers: ['hz9rp0'], students: 30},
  {name: 'City Academy Hackney', year: 8, teachers: ['4qhg6e'], students: 17},
  {name: 'City Academy Hackney', year: 9, teachers: ['o4xlq9'], students: 17},
  {name: 'City Academy Hackney', year: 10, teachers: ['ysrvsk'], students: 16},

  {name: 'City of London Academy Highgate Hill', year: 10, teachers: ['onwaes','kj8md7','hw8mw7'], students: 17},

  {name: 'City of London Academy Shoreditch Park', year: 7, teachers: ['9XB4-M0B9'], students: 24},
  {name: 'City of London Academy Shoreditch Park', year: 8, teachers: ['gj8tlp'], students: 23},
  {name: 'City of London Academy Shoreditch Park', year: 10, teachers: ['ue9lwo'], students: 17},

  {name: 'Lister Community School', year: 7, teachers: ['5448sn'], students: 21},
  {name: 'Lister Community School', year: 8, teachers: ['hv6udc'], students: 16},
  {name: 'Lister Community School', year: 9, teachers: ['ag93qe'], students: 22},
  {name: 'Lister Community School', year: 10, teachers: ['k5ifm7'], students: 18},
  {name: 'Lister Community School', year: 11, teachers: ['3to7uh'], students: 14},

  {name: 'Plashet School', year: 7, teachers: ['8o84e1'], students: 24},
  {name: 'Plashet School', year: 8, teachers: ['5te44x'], students: 22},
  {name: 'Plashet School', year: 9, teachers: ['15hjxf'], students: 24},
  {name: 'Plashet School', year: 10, teachers: ['9mhdd'], students: 21},
  {name: 'Plashet School', year: 11, teachers: ['2c7db'], students: 16},
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
