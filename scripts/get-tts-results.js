const fs = require('fs');
const path = require('path');
const fb = require('firebase-admin');
const yaml = require('yamljs');
const serviceAccount = require('../private/service-account.json');

// -----------------------------------------------------------------------------
// Edit below. You can use the same teacher code for multiple years.

const USE_ARCHIVED_DATA = false;  // Can be 2018 or false

const TTS_SCHOOLS = [
  {name: 'Bulmershe School', year: 7, teachers: ['4kuds0'], students: 17},
  {name: 'Bulmershe School', year: 8, teachers: ['mg4414'], students: 17},
  {name: 'Bulmershe School', year: 9, teachers: ['qw6ok'], students: 15},
  {name: 'Bulmershe School', year: 10, teachers: ['h343j'], students: 20},

  {name: 'Capital City Academy', year: 7, teachers: ['cjbn9o'], students: 20},
  {name: 'Capital City Academy', year: 8, teachers: ['z8yevt'], students: 18},

  {name: 'City Academy Hackney', year: 7, teachers: ['o4xlq9'], students: 21},
  {name: 'City Academy Hackney', year: 8, teachers: ['4qhg6e'], students: 19},

  {name: 'City of London Academy Islington', year: 7, teachers: ['qgd4av'], students: 20},
  {name: 'City of London Academy Islington', year: 8, teachers: ['rxulkx'], students: 20},

  {name: 'City of London Academy Highbury Grove', year: 7, teachers: ['uuynbj'], students: 15},
  {name: 'City of London Academy Highbury Grove', year: 8, teachers: ['v64gji'], students: 13},

  {name: 'City of London Academy Highgate Hill', year: 7, teachers: ['kj8md7'], students: 19},
  {name: 'City of London Academy Highgate Hill', year: 8, teachers: ['onwaes'], students: 17},

  {name: 'City of London Academy Shoreditch Park', year: 7, teachers: ['ahupq9', 'agv1u'], students: 24},
  {name: 'City of London Academy Shoreditch Park', year: 8, teachers: ['ahupq9 '], students: 26},
  {name: 'City of London Academy Shoreditch Park', year: 9, teachers: ['agv1u'], students: 18},

  {name: 'City of London Academy Southwark', year: 7, teachers: ['lsbnvj'], students: 20},
  {name: 'City of London Academy Southwark', year: 8, teachers: ['ee89n6'], students: 18},

  {name: 'Cullompton Community College', year: 7, teachers: ['u9r9lh', 'efctnx', '9knp4'], students: 16},
  {name: 'Cullompton Community College', year: 8, teachers: ['hc7it0', '9knp4'], students: 15},
  {name: 'Cullompton Community College', year: 9, teachers: ['iplf3y', '9knp4'], students: 17},

  {name: 'Elthorne', year: 8, teachers: ['szvxjp'], students: 21},

  {name: 'Lister Community School', year: 7, teachers: ['ag93qe'], students: 26},
  {name: 'Lister Community School', year: 8, teachers: ['2jiemd'], students: 24},
  {name: 'Lister Community School', year: 9, teachers: ['3to7uh'], students: 19},
  {name: 'Lister Community School', year: 10, teachers: ['nww75'], students: 22},

  {name: 'Plashet School', year: 7, teachers: ['15hjxf'], students: 25},
  {name: 'Plashet School', year: 8, teachers: ['9mhdd'], students: 22},
  {name: 'Plashet School', year: 9, teachers: ['2c7db'], students: 20},
  {name: 'Plashet School', year: 10, teachers: ['t1bmm'], students: 17},
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
