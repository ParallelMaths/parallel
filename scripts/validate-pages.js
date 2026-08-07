const path = require('path');
const yaml = require('yamljs');

// -----------------------------------------------------------------------------
// Validates static/pages.yaml before deploying. Currently checks that every
// entry with a `deadline` has a `deadline` that is strictly after its
// `available` date (and that both dates are valid). Exits with a non-zero code
// if any problems are found, which blocks `firebase deploy`.

const PAGES_FILE = path.join(__dirname, '../static/pages.yaml');

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

      // `deadline` is optional (e.g. homework entries have none). Only validate
      // it against `available` when it is present.
      if (entry.deadline == null) continue;

      const available = new Date(entry.available);
      const deadline = new Date(entry.deadline);

      if (entry.available == null || Number.isNaN(available.getTime())) {
        errors.push(`${label}: invalid or missing "available" date (${entry.available})`);
        continue;
      }

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
