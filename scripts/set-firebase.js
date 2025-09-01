const fs = require("fs");
const serviceAccount = require("../private/service-account.json");

const isProdProject = !serviceAccount.project_id.includes("beta");

fs.writeFileSync(
  ".firebaserc",
  JSON.stringify(
    {
      projects: {
        main: isProdProject ? "parallel-cf800" : "parallel-beta-31dc4",
      },
    },
    null,
    2,
  ),
);
