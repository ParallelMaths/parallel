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
  mentalMathsComment,
  abilityScore
) => {
  return fetch("https://api.parallel.org.uk/graphql", {
    headers: {
      authorization: auth_token,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: "euclidReportCommentAdminMutation",
      query:
        "mutation euclidReportCommentAdminMutation(\n  $input: EuclidReportCommentAdminInput!\n) {\n  updateEuclidReportCommentAdmin(input: $input) {\n    id\n    updatedAtTimestamp\n    reportId\n    userId\n    visibleFrom\n    tutorComment\n    attitudeScore\n    adminComment\n    mentalMathsComment\n    abilityScore\n    attendanceScore\n    attendanceScoreOverride\n    homeworkScore\n    homeworkScoreOverride\n  }\n}\n",
      variables: {
        input: {
          reportId: reportId,
          userId: userId,
          adminComment: adminComment,
          mentalMathsComment: mentalMathsComment.split('\n').join('\n'),
          abilityScore: abilityScore.toLowerCase(),
        },
      },
    }),
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((res) => {
        if(res.data.updateEuclidReportCommentAdmin.id && !res.error) {
            console.log("success", res.data.updateEuclidReportCommentAdmin.id)
        } else {
            process.exit();
        }

    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

const run = async () => {
  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const data = await csv().fromFile(
    "/Users/drew/Downloads/m1 drew dec17.csv"
  );

  const parsed = data.map((d) => {
    if (
      !d["Parallel email"] ||
      !d["Mental maths comment"] ||
      !d["Ability Grade"]
    ) {
      console.log("bad", d);
      process.exit();
    }

    const id = accounts.find((a) => a.email === d["Parallel email"]).localId;

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
      mentalMaths: d["Mental maths comment"],
      abilityGrade: d["Ability Grade"],
    };
  });

  for (const p of parsed) {
    await send(
      p.reportId,
      p.id,
      '',
      p.mentalMaths,
      p.abilityGrade,
    );
  }

  process.exit();
};

run();
