const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const fetch = require("node-fetch");

const auth_token = "";

const levelMap = {
  '1': 'year6',
  '2': 'year7',
  '3': 'year8',
  '4': 'year9',
  '5': 'year10',
  '6': 'year11',
}

const send = (
  userId,
  pgTargetStartTimestamp,
  pgTargetEndTimestamp,
  pgTarget,
  pgTargetLevel
) => {
  return fetch("https://api.parallel.org.uk/graphql", {
    headers: {
      authorization: auth_token,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: "updateDynamodbUserEuclidPGTargetMutation",
      query:
        "mutation updateDynamodbUserEuclidPGTargetMutation(\n $id: String!, $input: DynamodbUserEuclidPGTargetInput!\n) {\n  updateDynamodbUserEuclidPGTarget(id: $id, input: $input) {\n    id\n    }\n}\n",
      variables: {
        id: userId,
        input: {
          pgTargetStartTimestamp,
          pgTargetEndTimestamp,
          pgTarget,
          pgTargetLevel
        },
      },
    }),
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((res) => {
        if(res.data.updateDynamodbUserEuclidPGTarget.id && !res.error) {
            console.log("success", res.data.updateDynamodbUserEuclidPGTarget.id)
        } else {
            process.exit();
        }

    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

const parseDate = (date, hour) => {
  const [day, month, year] = date.split('/');
  const n = new Date('2045-02-13T01:00:00.000Z');
  n.setDate(day)
  n.setMonth(Number(month) - 1)
  n.setFullYear(year)
  n.setHours(hour);

  return n.getTime();;
}

const run = async () => {
  const file = path.join(__dirname, `../../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const data = await csv().fromFile(
    "/Users/drew/Downloads/hwktargetsfeb12.csv"
  );

  const parsed = data.map((d) => {
    if (
      !d["Parallel email address"] ||
      !d["Start date"] ||
      !d["End date"] ||
      !d["Target"] ||
      !d["Level"]
    ) {
      console.log("bad", d);
      process.exit();
    }

    const id = accounts.find((a) => a.email.toLowerCase() === d["Parallel email address"].toLowerCase()).localId;

    if (!id) {
      console.log("no id", d);
      process.exit();
    }

    return {
      userId: id,
      pgTargetStartTimestamp: parseDate(d["Start date"], 1), // 1am
      pgTargetEndTimestamp: parseDate(d["End date"], 23), // 11pm
      pgTarget: Number(d["Target"]),
      pgTargetLevel: levelMap[d["Level"]]
    };
  });

  for (const p of parsed) {

    // console.log(p);

    await send(
      p.userId,
      p.pgTargetStartTimestamp,
      p.pgTargetEndTimestamp,
      p.pgTarget,
      p.pgTargetLevel
    );
  }

  process.exit();
};

run();
