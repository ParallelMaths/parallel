const express = require("express");
const router = express.Router();
const firebase = require("firebase-admin");
const {
  generateGuardianPrivacyAuthToken,
  firstSeenKey,
  userTouchKey,
  guardianPrivacyAuthTokenKey,
  acceptedKey,
  acceptedByKey,
  validateGuardianToken,
} = require("./utils");

const userDB = firebase.firestore().collection("users");

router.get("/student/update", async (req, res) => {
  if (!res?.locals?.user) {
    return res
      .status(200)
      .send({ success: false, error: "not logged in", data: null });
  }

  const guardianPrivacyAuthToken =
    req.user.guardianPrivacyAuthToken || generateGuardianPrivacyAuthToken();

  const firstSeenTime = req.user[firstSeenKey] || Date.now();

  try {
    const updateBody = {
      [userTouchKey]: Date.now(),
      [guardianPrivacyAuthTokenKey]: guardianPrivacyAuthToken,
      [firstSeenKey]: firstSeenTime,
    };

    await userDB.doc(req.user.uid).update(updateBody);

    return res
      .status(200)
      .send({ success: true, data: updateBody, error: null });
  } catch (e) {
    console.error("Failed to update privacy guardians", req.user.uid, e);
    return res.status(200).send({
      success: false,
      error: "Failed to update privacy guardians",
      data: null,
    });
  }
});

router.get("/student/accept", async (req, res) => {
  if (!res?.locals?.user) {
    return res
      .status(200)
      .send({ success: false, error: "not signed in", data: null });
  }

  try {
    const updateBody = {
      [acceptedKey]: Date.now(),
      [acceptedByKey]: "student",
    };

    await userDB.doc(req.user.uid).update(updateBody);

    return res
      .status(200)
      .send({ success: true, data: updateBody, error: null });
  } catch (e) {
    console.error("Failed to accept privacy", req.user.uid, e);
    return res
      .status(200)
      .send({ success: false, error: "failed to accept privacy", data: null });
  }
});

router.get("/guardian/load/:token", async (req, res) => {
  const student = await validateGuardianToken(req);

  if (!student) {
    return res
      .status(200)
      .send({ success: false, error: "invalid token, not found", data: null });
  }

  res.status(200).send({
    success: true,
    error: null,
    data: {
      first: student.first,
    },
  });
});

router.get("/guardian/accept/:token", async (req, res) => {
  const student = await validateGuardianToken(req);
  const studentId = student?.id;

  console.log("student", student, studentId);

  if (!student || !studentId) {
    return res
      .status(200)
      .send({ success: false, error: "invalid token, not found", data: null });
  }

  try {
    const updateBody = {
      [acceptedKey]: Date.now(),
      [acceptedByKey]: "guardian",
    };

    await userDB.doc(studentId).update(updateBody);

    return res
      .status(200)
      .send({ success: true, data: updateBody, error: null });
  } catch (e) {
    console.error("Failed to accept privacy", req.user.uid, e);
    return res
      .status(200)
      .send({ success: false, error: "failed to accept privacy", data: null });
  }
});

module.exports = router;
