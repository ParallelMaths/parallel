const path = require('path');
const serviceAccount = require(path.join(__dirname, '../../private/service-account.json'));

const PROJECT_ALIASES = {
  'parallel-beta-31dc4': 'beta',
  'parallel-cf800': 'prod',
};

const projectId = serviceAccount.project_id;
const databaseURL = `https://${projectId}.firebaseio.com`;
const projectAlias = PROJECT_ALIASES[projectId] || projectId;

module.exports = { projectId, databaseURL, projectAlias };
