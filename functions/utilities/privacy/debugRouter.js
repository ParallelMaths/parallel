const express = require("express");
const router = express.Router();
const firebase = require("firebase-admin");
const {
  isUnderThirteen,
  getPrivacyState,
  generateGuardianPrivacyAuthToken,
} = require("./utils");
const {
  firstSeenKey,
  dueByKey,
  guardianPrivacyAuthTokenKey,
  userNeedsGuardianTouchKey,
  acceptedKey,
  acceptedByKey,
  variantModeKey,
  latestTouchKey,
  ageSetKey
} = require("./privacyKeys");
const {
  getGuardianEmails
} = require("../getTypeSafeUser");

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
    ageSetKey,
    "birthMonth",
    "birthYear",
  ];

  const data = {};

  allKeys.forEach((key) => {
    data[key] = req.user[key] || null;
  });

  data.guardianEmails = getGuardianEmails(req.user) || [];
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
    birthMonth: req.body.birthMonth || null,
    birthYear: req.body.birthYear || null,
  };

  if (req.body.emails) {
    updateBody.emails = req.body.emails;
    updateBody.guardianEmail = null;
  }

  await userDB.doc(req.user.uid).update(updateBody);

  return res.status(200).send(getResponseBody(req, updateBody));
});

router.get("/reset", studentMiddleware, async (req, res) => {
  const updateBody = {
    [firstSeenKey]: null,
    [dueByKey]: null,
    [guardianPrivacyAuthTokenKey]: null,
    [userNeedsGuardianTouchKey]: null,
    [acceptedKey]: null,
    [acceptedByKey]: null,
    [variantModeKey]: null,
    [latestTouchKey]: null,
  };

  await userDB.doc(req.user.uid).update(updateBody);

  return res.status(200).send(getResponseBody(req, updateBody));
});

router.get("/view", studentMiddleware, async (req, res) => {
  return res.status(200).send({ data: getViewData(req) });
});

module.exports = router;
