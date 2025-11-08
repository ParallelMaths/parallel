const { getPaginatedTableItems } = require("../utils/dynamodb");
const fs = require("fs");
const path = require("path");
const { format } = require("date-fns");

const tutorialsPath = path.join(__dirname, `../../private/blog-tutorials.json`);
const tutorialAttendancesPath = path.join(__dirname, `../../private/blog-tutorial-attendances.json`);
const circlesPath = path.join(__dirname, `../../private/blog-circles.json`);
const answerCountPath = path.join(__dirname, `../../private/blog-answer-count.json`);
const circleAttendancePath = path.join(__dirname, `../../private/blog-circle-attendance.json`);
const circleAttendanceCountPath = path.join(__dirname, `../../private/blog-circle-attendance-count.json`);

const download = async () => {
  const circles = await getPaginatedTableItems("prod-lives");
  const answerCount = await getPaginatedTableItems("prod-live_answer_count");
  const circleAttendance = await getPaginatedTableItems("prod-live_attendance");
  const circleAttendanceCount = await getPaginatedTableItems("prod-live_attendance_count");
  const tutorials = await getPaginatedTableItems("prod-euclid-tutorial");
  const tutorialAttendances = await getPaginatedTableItems("prod-euclid-attendance");

  fs.writeFileSync(tutorialsPath, JSON.stringify(tutorials, null, 2));
  fs.writeFileSync(tutorialAttendancesPath, JSON.stringify(await tutorialAttendances, null, 2));
  fs.writeFileSync(circlesPath, JSON.stringify(await circles, null, 2));
  fs.writeFileSync(answerCountPath, JSON.stringify(await answerCount, null, 2));
  fs.writeFileSync(circleAttendancePath, JSON.stringify(await circleAttendance, null, 2));
  fs.writeFileSync(circleAttendanceCountPath, JSON.stringify(await circleAttendanceCount, null, 2));
};

// const circles = JSON.parse(fs.readFileSync(circlesPath));
// const answerCount = JSON.parse(fs.readFileSync(answerCountPath));
// const circleAttendance = JSON.parse(fs.readFileSync(circleAttendancePath));
// const circleAttendanceCount = JSON.parse(fs.readFileSync(circleAttendanceCountPath));
// const tutorials = JSON.parse(fs.readFileSync(tutorialsPath));
// const tutorialAttendances = JSON.parse(fs.readFileSync(tutorialAttendancesPath));

const circlesAttendance = async () => {
  const circles = JSON.parse(fs.readFileSync(circlesPath));
  const circleAttendanceCount = JSON.parse(fs.readFileSync(circleAttendanceCountPath));

  const circleAttendanceCountsByLiveId = {};

  for (const attendanceCount of circleAttendanceCount) {
    if (!circleAttendanceCountsByLiveId[attendanceCount.liveId]) {
      circleAttendanceCountsByLiveId[attendanceCount.liveId] = [];
    }
    circleAttendanceCountsByLiveId[attendanceCount.liveId].push(attendanceCount);
  }

  const pastCircles = circles.filter((c) => c.startTimestamp < Date.now());

  let loggedInMinutes = 0;
  let anonymousMinutes = 0;
  let circleCount = 0;

  for (const circles of pastCircles) {
    const startTimestamp = circles.startTimestamp;
    let endTimestamp = circles.endTimestamp || startTimestamp + 60 * 60 * 1000;
    const duration = (endTimestamp - startTimestamp) / (60 * 1000); // in minutes

    const attendanceCountsForLive = (circleAttendanceCountsByLiveId[circles.id] || [])
      .map((ac) => ({ ...ac, total: ac.loggedInCount + ac.anonymousCount }))
      .sort((a, b) => b.total - a.total)
      .slice(0, duration);
    let individualMinutes = 0;

    for (const attendanceCount of attendanceCountsForLive) {
      loggedInMinutes += attendanceCount.loggedInCount || 0;
      anonymousMinutes += attendanceCount.anonymousCount || 0;
      individualMinutes += (attendanceCount.loggedInCount || 0) + (attendanceCount.anonymousCount || 0);
    }

    if (individualMinutes > 0) {
      circleCount++;
    }
  }

  console.log("\n\n\n");
  console.log("Circles\n");
  console.log(circleCount, "Circles");
  console.log(((loggedInMinutes / (anonymousMinutes + loggedInMinutes)) * 100).toFixed(2), "Percentage logged in");
  console.log(loggedInMinutes, "Logged in minutes of learning");
  console.log(anonymousMinutes, "Anonymous minutes of learning");
  const tot = loggedInMinutes + anonymousMinutes;
  console.log(tot, "Minutes of learning");
  console.log((tot / 60).toFixed(2), "Hours of learning");
  console.log((tot / 60 / 24).toFixed(2), "Days of learning");
  console.log((tot / 60 / 24 / 365).toFixed(2), "Years of learning");
  console.log("\n\n\n");
};

// download();
circlesAttendance();
