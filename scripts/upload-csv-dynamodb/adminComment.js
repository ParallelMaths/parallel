const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const fetch = require("node-fetch");

const reportMap = {
  fPaBZtnOS4QfuxrGQ3DQjGhKGbP2: "ER-0c02c88a-78b9-4614-a004-19036cfbb2f5",
};

const auth_token = "";

const send = (
  reportId,
  userId,
  adminComment,
) => {
  return fetch("https://api.parallel.org.uk/graphql", {
    headers: {
      authorization: auth_token,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: "euclidReportCommentAdminCommentMutation",
      query:
        "mutation euclidReportCommentAdminCommentMutation(\n  $input: EuclidReportCommentAdminCommentInput!\n) {\n  updateEuclidReportCommentAdminComment(input: $input) {\n    id\n    }\n}\n",
      variables: {
        input: {
          reportId: reportId,
          userId: userId,
          adminComment: adminComment
        },
      },
    }),
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((res) => {
        if(res.data.updateEuclidReportCommentAdminComment.id && !res.error) {
            console.log("success", res.data.updateEuclidReportCommentAdminComment.id)
        } else {
            process.exit();
        }

    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

const key = 'Director\'s comment'

const run = async () => {
  const file = path.join(__dirname, `../../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const data = await csv().fromFile(
    "/Users/drew/Downloads/m3+directorcomments drew.csv"
  );

  const parsed = data.map((d) => {
    if (
      !d["Parallel email"] ||
      !d[key]
    ) {
      console.log("bad", d);
      process.exit();
    }

    const id = accounts.find((a) => a.email.toLowerCase() === d["Parallel email"].toLowerCase()).localId;

    if (!id) {
      console.log("no id", d);
      process.exit();
    }

    const reportId = reportMap[id];

    if (!reportId) {
      console.log("no report", d);
      process.exit();
    }

    return {
      id,
      reportId,
      adminComment: d[key],
    };
  });

  for (const p of parsed) {
    await send(
      p.reportId,
      p.id,
      p.adminComment
    );
  }

  process.exit();
};

run();
