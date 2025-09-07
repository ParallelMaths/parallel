const express = require("express");
const router = express.Router();
const firebase = require("firebase-admin");
const {
  firstSeenKey,
  userNeedsGuardianTouchKey,
  guardianPrivacyAuthTokenKey,
  acceptedKey,
  acceptedByKey,
  isUnderThirteen,
  getPrivacyState,
  generateGuardianPrivacyAuthToken
} = require("./utils");

// /api/privacy/student/ultra-secret/view
// /api/privacy/student/ultra-secret/reset/under13/new
// /api/privacy/student/ultra-secret/reset/under13/8daysago
// /api/privacy/student/ultra-secret/reset/over13/new
// /api/privacy/student/ultra-secret/reset/over13/8daysago

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
    userNeedsGuardianTouchKey,
    guardianPrivacyAuthTokenKey,
    acceptedKey,
    acceptedByKey,
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
        privacyState: getPrivacyState(req.user.email, {...req.user, ...updateBody}),
      },
    }
}

router.get(
  "/reset/under13/new",
  studentMiddleware,
  async (req, res) => {
    const updateBody = {
      [firstSeenKey]: null,
      [userNeedsGuardianTouchKey]: null,
      [guardianPrivacyAuthTokenKey]: null,
      [acceptedKey]: null,
      [acceptedByKey]: null,
      birthMonth: '1',
      birthYear: '2025',
    };

    await userDB.doc(req.user.uid).update(updateBody);

    return res.status(200).send(getResponseBody(req, updateBody));
  },
);

router.get(
  "/reset/over13/new",
  studentMiddleware,
  async (req, res) => {
    const updateBody = {
      [firstSeenKey]: null,
      [userNeedsGuardianTouchKey]: null,
      [guardianPrivacyAuthTokenKey]: null,
      [acceptedKey]: null,
      [acceptedByKey]: null,
      birthMonth: '1',
      birthYear: '1990',
    };

    await userDB.doc(req.user.uid).update(updateBody);

    return res.status(200).send(getResponseBody(req, updateBody));
  },
);

router.get(
  "/reset/under13/8daysago",
  studentMiddleware,
  async (req, res) => {
    const updateBody = {
      [firstSeenKey]: Date.now() - (8 * 24 * 60 * 60 * 1000),
      [userNeedsGuardianTouchKey]: Date.now() - (8 * 24 * 60 * 60 * 1000),
      [guardianPrivacyAuthTokenKey]: generateGuardianPrivacyAuthToken(),
      [acceptedKey]: null,
      [acceptedByKey]: null,
      birthMonth: '1',
      birthYear: '2025',
    };

    await userDB.doc(req.user.uid).update(updateBody);

    return res.status(200).send(getResponseBody(req, updateBody));
  },
);

router.get(
  "/reset/over13/8daysago",
  studentMiddleware,
  async (req, res) => {
    const updateBody = {
      [firstSeenKey]: Date.now() - (8 * 24 * 60 * 60 * 1000),
      [userNeedsGuardianTouchKey]: null,
      [guardianPrivacyAuthTokenKey]: null,
      [acceptedKey]: null,
      [acceptedByKey]: null,
      birthMonth: '1',
      birthYear: '1990',
    };

    await userDB.doc(req.user.uid).update(updateBody);

    return res.status(200).send(getResponseBody(req, updateBody));
  },
);

router.get(
  "/view",
  studentMiddleware,
  async (req, res) => {
    return res.status(200).send({ data: getViewData(req) });
  },
);

module.exports = router;
