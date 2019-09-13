const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const yaml = require('yamljs');
const serviceAccount = require('../private/service-account.json');

// -----------------------------------------------------------------------------
// Edit below. You can use the same teacher code for multiple years.

const USE_ARCHIVED_DATA = false;  // Can be 2018 or false

const TTS_SCHOOLS = [
  {name: 'Bulmershe School', year: 7, teachers: ['mg4414'], students: 30},
  {name: 'Bulmershe School', year: 8, teachers: ['h343j'], students: 30},
  {name: 'Bulmershe School', year: 9, teachers: ['qw6ok'], students: 30},
  {name: 'Bulmershe School', year: 10, teachers: ['qw6ok'], students: 30},

  {name: 'Capital City Academy', year: 7, teachers: ['t2mtbt'], students: 30},
  {name: 'Capital City Academy', year: 8, teachers: ['z8yevt'], students: 30},

  {name: 'City Academy Hackney', year: 7, teachers: ['9h9mga'], students: 30},
  {name: 'City Academy Hackney', year: 8, teachers: ['9h9mga'], students: 30},

  {name: 'City of London Academy Islington', year: 7, teachers: ['rxulkx'], students: 30},
  {name: 'City of London Academy Islington', year: 8, teachers: ['Qgd4av'], students: 30},

  {name: 'City of London Academy Highbury Grove', year: 7, teachers: ['14lq9e'], students: 30},
  {name: 'City of London Academy Highbury Grove', year: 8, teachers: ['14lq9e'], students: 30},

  {name: 'City of London Academy Highgate Hill', year: 7, teachers: ['kj8md7'], students: 30},
  {name: 'City of London Academy Highgate Hill', year: 8, teachers: ['onwaes'], students: 30},

  {name: 'City of London Academy Shoreditch Park', year: 7, teachers: ['ahupq9', 'agv1u'], students: 30},
  {name: 'City of London Academy Shoreditch Park', year: 8, teachers: ['ahupq9 '], students: 30},
  {name: 'City of London Academy Shoreditch Park', year: 9, teachers: ['agv1u'], students: 30},

  {name: 'City of London Academy Southwark', year: 7, teachers: ['lsbnvj'], students: 30},
  {name: 'City of London Academy Southwark', year: 8, teachers: ['ee89n6'], students: 30},

  {name: 'Cullompton Community College', year: 7, teachers: ['u9r9lh', 'efctnx'], students: 30},
  {name: 'Cullompton Community College', year: 8, teachers: ['hc7it0'], students: 30},
  {name: 'Cullompton Community College', year: 9, teachers: ['iplf3y'], students: 30},

  {name: 'Elthorne', year: 8, teachers: ['szvxjp'], students: 30},

  {name: 'Lister Community School', year: 7, teachers: ['364052'], students: 30},
  {name: 'Lister Community School', year: 8, teachers: ['3to7uh'], students: 30},
  {name: 'Lister Community School', year: 9, teachers: ['nww75'], students: 30},
  {name: 'Lister Community School', year: 10, teachers: ['nww75'], students: 30},

  {name: 'Plashet School', year: 7, teachers: ['9mhdd'], students: 30},
  {name: 'Plashet School', year: 8, teachers: ['2c7db'], students: 30},
  {name: 'Plashet School', year: 9, teachers: ['t1bmm'], students: 30},
  {name: 'Plashet School', year: 10, teachers: ['t1bmm'], students: 30},

  {name: 'Torquay Academy', year: 7, teachers: ['ayidqn'], students: 30},
  {name: 'Torquay Academy', year: 8, teachers: ['dypvzw'], students: 30},
  {name: 'Torquay Academy', year: 9, teachers: ['ayidqn'], students: 30},
];

// -----------------------------------------------------------------------------

fb.initializeApp({
  credential: fb.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-cf800.firebaseio.com'
});

const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));
for (const y of Object.keys(pageData)) pageData[y].reverse();

async function run() {
  const userData = await fb.database().ref('users').once('value');
  const users = Object.values(userData.toJSON());
  console.log(`Loading ${users.length} users...`);

  const length = Math.max(...[7, 8, 9, 10].map(i => pageData['year' + i].length));

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
          if (u.teacherCode === t && u.answers) {
            const q = u.answers[p.url];
            if (q && q.submitted) {
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
