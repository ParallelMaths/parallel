const path = require('path');
const yaml = require('yamljs');

// -----------------------------------------------------------------------------
// Validates static/pages.yaml before deploying. Currently checks that every
// entry with a `deadline` has a `deadline` that is strictly after its
// `available` date (and that both dates are valid), and that every year6-11
// entry is released on a Thursday. Exits with a non-zero code if any problems
// are found, which blocks `firebase deploy`.

const PAGES_FILE = path.join(__dirname, '../static/pages.yaml');
const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const THURSDAY = 4;
const YEAR_SECTIONS = new Set(['year6', 'year7', 'year8', 'year9', 'year10', 'year11']);
// The first entry of each year (e.g. "6-01-...") is the start-of-term opener
// and is intentionally released on a different day, so it's exempt.
const FIRST_ENTRY_OF_YEAR = /^\d+-01-/;

function run() {
  const pageData = yaml.load(PAGES_FILE);

  if (!pageData || typeof pageData !== 'object') {
    console.error(`✗ Could not parse ${PAGES_FILE}`);
    process.exit(1);
  }

  const errors = [];

  for (const [section, entries] of Object.entries(pageData)) {
    if (!Array.isArray(entries)) continue;

    for (const entry of entries) {
      const label = `${section} › ${entry.url || '(missing url)'}`;

      const available = new Date(entry.available);

      if (entry.available == null || Number.isNaN(available.getTime())) {
        errors.push(`${label}: invalid or missing "available" date (${entry.available})`);
      } else if (YEAR_SECTIONS.has(section) && !FIRST_ENTRY_OF_YEAR.test(entry.url || '')) {
        const day = available.getDay();
        if (day !== THURSDAY) {
          errors.push(`${label}: "available" (${entry.available}) is not a Thursday (got ${WEEKDAY_NAMES[day]})`);
        }
      }

      // `deadline` is optional (e.g. homework entries have none). Only validate
      // it against `available` when it is present.
      if (entry.deadline == null) continue;

      if (entry.available == null || Number.isNaN(available.getTime())) continue;

      const deadline = new Date(entry.deadline);

      if (Number.isNaN(deadline.getTime())) {
        errors.push(`${label}: invalid "deadline" date (${entry.deadline})`);
        continue;
      }

      if (deadline <= available) {
        errors.push(`${label}: "deadline" (${entry.deadline}) is not after "available" (${entry.available})`);
      }

      if (section === 'test' && entry.password === true) {
        if (entry.answersVisibleFrom) {
             errors.push(`${label}: "answersVisibleFrom" should not be set for test entries with "password: true". This is set via the admin portal instead.`);
        }
      }
    }
  }

  if (errors.length) {
    console.error(`✗ static/pages.yaml validation failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`  - ${error}`);
    process.exit(1);
  }

  console.log('✓ static/pages.yaml validation passed.');
}

run();
