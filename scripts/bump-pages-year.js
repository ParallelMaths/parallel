const fs = require('fs');
const path = require('path');

// -----------------------------------------------------------------------------
// Bumps `available` and `deadline` dates in static/pages.yaml forward by
// exactly 364 days (52 weeks) for the year6-year11 sections, ahead of a new
// school year. 364 days (rather than a calendar year) keeps each entry on the
// same day of the week. Only the year6-year11 sections are touched; homework,
// test, and test-archive are left alone.
//
// Usage: node scripts/bump-pages-year.js [--write]
//   (no flags)  dry run - prints a diff-like summary of what would change
//   --write     writes the changes back to static/pages.yaml

const PAGES_FILE = path.join(__dirname, '../static/pages.yaml');
const SECTIONS_TO_BUMP = new Set([
  'year6',
  'year7',
  'year8',
  'year9',
  'year10',
  'year11',
]);
const DAYS_TO_ADD = 364;

const DATE_LINE = /^(\s*(?:available|deadline):\s*)(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2})$/;
const SECTION_HEADER = /^([a-zA-Z0-9_-]+):\s*$/;

function bumpDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  // Use UTC to avoid local-timezone/DST shifting the calendar date.
  const d = new Date(Date.UTC(year, month - 1, day));
  d.setUTCDate(d.getUTCDate() + DAYS_TO_ADD);
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function run() {
  const write = process.argv.includes('--write');
  const lines = fs.readFileSync(PAGES_FILE, 'utf8').split('\n');

  let currentSection = null;
  let changedCount = 0;

  const output = lines.map((line) => {
    const headerMatch = line.match(SECTION_HEADER);
    if (headerMatch) {
      currentSection = headerMatch[1];
      return line;
    }

    if (!SECTIONS_TO_BUMP.has(currentSection)) return line;

    const dateMatch = line.match(DATE_LINE);
    if (!dateMatch) return line;

    const [, prefix, datePart, timePart] = dateMatch;
    const newDatePart = bumpDate(datePart);
    changedCount += 1;

    if (!write) {
      console.log(`  ${datePart}${timePart} -> ${newDatePart}${timePart}`);
    }

    return `${prefix}${newDatePart}${timePart}`;
  });

  console.log(`\n${changedCount} date(s) ${write ? 'updated' : 'would be updated'} in ${PAGES_FILE}`);

  if (write) {
    fs.writeFileSync(PAGES_FILE, output.join('\n'));
    console.log('Wrote changes. Run `node scripts/validate-pages.js` to double-check.');
  } else {
    console.log('Dry run only - re-run with --write to apply changes.');
  }
}

run();
