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
  latestTouchKey,
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
    latestTouchKey,
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
    [latestTouchKey]: req.body.latestTouch || null,
    birthMonth: req.body.birthMonth || "1",
    birthYear: req.body.birthYear || "2025",
  };

  await userDB.doc(req.user.uid).update(updateBody);

  return res.status(200).send(getResponseBody(req, updateBody));
});

router.get("/view", studentMiddleware, async (req, res) => {
  return res.status(200).send({ data: getViewData(req) });
});

module.exports = router;
