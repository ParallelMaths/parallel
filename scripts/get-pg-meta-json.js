const fs = require('fs');
const path = require('path');
const yaml = require('yamljs');
const JSDom = require('jsdom').JSDOM;

const pageData = yaml.load(path.join(__dirname, '../static/pages.yaml'));

let pages = [...pageData.year6, ...pageData.year7, ...pageData.year8, ...pageData.year9, ...pageData.year10, ...pageData.year11];
pages = pages.filter(p => new Date(p.available) < Date.now());

async function run() {
  const questionData = {};

  for (let p of pages) {
    questionData[p.url] = {};
    const file = fs.readFileSync(path.join(__dirname, `../pages/${p.url}.md`), 'utf-8');
    const html = fs.readFileSync(path.join(__dirname, `../functions/build/${p.url}.html`), 'utf-8');
    const doc = (new JSDom(html)).window.document;

    const trimmed = file.split('\n').map(line => line.trim())
    const problems = trimmed.filter(line => line.includes('::: problem'));
    const hints = trimmed.filter(line => line.includes('^^^ hint'));

    for (let str of problems) {
      if (str) {
        const clean = str.replace(/\s/g, '');
        const [og, id, marks] = clean.includes('points') ? clean.match(/:::problemid=([\d_]+)points=([\d.]+)/) : clean.match(/:::problemid=([\d_]+)marks=([\d.]+)/);
        if(typeof id !== 'string' || typeof marks !== 'string') console.error('BAD STRING', str);

        const question = doc.getElementById(`p_${id}`);
        let solution = question?.dataset?.solution;

        if (!solution) {
          const questionInput = question.getElementsByTagName('input')[0];
          solution = questionInput?.dataset?.solution;
        }

        if (!solution && marks === '0') {
          solution = '--';
        }

        if (!solution) {
          console.error('Unknown answer', p.url, `p_${id}`);
          process.exit(1)
        }

        questionData[p.url][id] = {
          marks,
          sollution: Buffer.from(solution, 'base64').toString('ascii'),
          hints: {}
        };
      }
    }

    for (let str of hints) {
      if (str) {
        let clean = str.replace(/\s/g, '');
        if (!clean.includes('mark')) clean += 'marks=0';
        const [og, id, marks] = clean.match(/\^\^\^hintid=([\d_]+)marks=([\d\.]+)/);
        if(typeof id !== 'string' || typeof marks !== 'string') {
          console.error('BAD HINT STRING', str)
          process.exit(1);
        };

        const matchingQuestionKey = Object.keys(questionData[p.url]).find(questionKey => id === questionKey || id.startsWith(`${questionKey}_`));

        if(!matchingQuestionKey) {
          if(marks !== '0') {
            console.log('Unable to match hint to question', p.url, id);
            process.exit(1);
          }
        } else {
          questionData[p.url][matchingQuestionKey].hints[id] = marks;
        }

        
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, `../private/pgMeta.json`), JSON.stringify(questionData, null, 4));

  console.log('JSON saved')
  process.exit();
}

run();
