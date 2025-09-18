const express = require("express");
const router = express.Router();
const firebase = require("firebase-admin");
const {
  firstSeenKey,
  dueByKey,
  guardianPrivacyAuthTokenKey,
  userNeedsGuardianTouchKey,
  acceptedKey,
  acceptedByKey,
  variantModeKey,
  isUnderThirteen,
  getPrivacyState,
  generateGuardianPrivacyAuthToken,
} = require("./utils");

// /api/privacy/student/ultra-secret/view (GET)
// /api/privacy/student/ultra-secret/reset (POST)

const userDB = firebase.firestore().collection("users");

const studentMiddleware = (req, res, next) => {
  if (!res?.locals?.user) {
    return res.status(200).send({ error: "not logged in" });
  }
  next();
};

const getViewData = (req) => {
  const allKeys = [
    firstSeenKey,
    dueByKey,
    userNeedsGuardianTouchKey,
    guardianPrivacyAuthTokenKey,
    acceptedKey,
    acceptedByKey,
    variantModeKey,
    "birthMonth",
    "birthYear",
  ];

  const data = {};

  allKeys.forEach((key) => {
    data[key] = req.user[key] || null;
  });

  data.privacyState = req.user.privacy || null;
  data.isUnderThirteen = isUnderThirteen(req.user);

  return data;
};

const getResponseBody = (req, updateBody) => {
  return {
    data: {
      ...getViewData(req),
      ...updateBody,
      privacyState: getPrivacyState(req.user.email, {
        ...req.user,
        ...updateBody,
      }),
      isUnderThirteen: isUnderThirteen({ ...req.user, ...updateBody }),
    },
  };
};

router.post("/reset", studentMiddleware, async (req, res) => {
  const updateBody = {
    [firstSeenKey]: req.body.firstSeen || null,
    [dueByKey]: req.body.dueBy || null,
    [guardianPrivacyAuthTokenKey]: req.body.guardianPrivacyAuthToken ? generateGuardianPrivacyAuthToken() : null,
    [userNeedsGuardianTouchKey]: req.body.userNeedsGuardianTouch || null,
    [acceptedKey]: req.body.acceptedKey || null,
    [acceptedByKey]: req.body.acceptedByKey || null,
    [variantModeKey]: req.body.variantMode || null,
    birthMonth: req.body.birthMonth || "1",
    birthYear: req.body.birthYear || "2025",
  };

  await userDB.doc(req.user.uid).update(updateBody);

  return res.status(200).send(getResponseBody(req, updateBody));
});

// const bodies = {
//   under13_new: {
//     birthMonth: "1",
//     birthYear: "2025",
//   },
//   over13_new: {
//     birthMonth: "1",
//     birthYear: "1990",
//   },
//   year8webinar_new: {
//     birthMonth: "1",
//     birthYear: "1990",
//     [dueByKey]: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
//     [variantModeKey]: 'year8webinar',
//   },
//   year8webinar_31daysago: {
//     [firstSeenKey]: Date.now() - 31 * 24 * 60 * 60 * 1000, // first seen was 31 days ago
//     [dueByKey]: Date.now() - 24 * 60 * 60 * 1000, // due date was 1 day ago
//     birthMonth: "1",
//     birthYear: "2025", // Age doesn't matter for this variant
//     [variantModeKey]: 'year8webinar',
//   },
//   under13_8daysago: {
//     [firstSeenKey]: Date.now() - 8 * 24 * 60 * 60 * 1000, // first seen was 8 days ago
//     [dueByKey]: Date.now() - 24 * 60 * 60 * 1000, // due date was 1 day ago
//     [userNeedsGuardianTouchKey]: Date.now() - 8 * 24 * 60 * 60 * 1000, // guardian touch was 8 days ago
//     [guardianPrivacyAuthTokenKey]: generateGuardianPrivacyAuthToken(),
//     birthMonth: "1",
//     birthYear: "2025",
//   },
//   over13_8daysago: {
//     [firstSeenKey]: Date.now() - 8 * 24 * 60 * 60 * 1000, // first seen was 8 days ago
//     [dueByKey]: Date.now() - 24 * 60 * 60 * 1000, // due date was 1 day ago
//     birthMonth: "1",
//     birthYear: "1990",
//   }
// }

router.get("/view", studentMiddleware, async (req, res) => {
  return res.status(200).send({ data: getViewData(req) });
});

module.exports = router;
