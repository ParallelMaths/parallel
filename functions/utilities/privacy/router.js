const express = require("express");
const router = express.Router();
const firebase = require("firebase-admin");
const {
  generateGuardianPrivacyAuthToken,
  firstSeenKey,
  userNeedsGuardianTouchKey,
  guardianPrivacyAuthTokenKey,
  acceptedKey,
  acceptedByKey,
  validateGuardianToken,
} = require("./utils");

const userDB = firebase.firestore().collection("users");

// /api/privacy/student/update - (Under 13) Update guardian emails & mark as seen (triggers emails to be sent)
// /api/privacy/student/accept - (Over 13) Accept privacy policy
// /api/privacy/guardian/load/:token - Load student first name for guardian acceptance page
// /api/privacy/guardian/accept/:token - Accept privacy policy as guardian

// /api/privacy/student/ultra-secret/view
// /api/privacy/student/ultra-secret/reset

const studentMiddleware = (req, res, next) => {
  if (!res?.locals?.user) {
    return res
      .status(200)
      .send({ success: false, error: "not logged in", data: null });
  }

  if (res.locals.user[acceptedKey]) {
    return res.status(200).send({
      success: true,
      data: {
        previous: true,
        [acceptedKey]: res.locals.user[acceptedKey],
        [acceptedByKey]: res.locals.user[acceptedByKey],
      },
      error: null,
    });
  }

  next();
};

const guardianMiddleware = async (req, res, next) => {
  const student = await validateGuardianToken(req);
  const studentId = student?.id;

  if (!student || !studentId) {
    return res
      .status(200)
      .send({ success: false, error: "invalid token, not found", data: null });
  }

  res.locals.guardianStudent = student;

  next();
};

const cleanAndDeduplicateEmails = (emails) => {
  const emailSet = new Set();
  emails.forEach((email) => {
    if (typeof email === "string" && email.trim()) {
      emailSet.add(email.trim().toLowerCase());
    }
  });
  return Array.from(emailSet);
};

const getReqBodyGuardianEmails = (req) => {
  try {
    const body = JSON.parse(req.body);
    if (Array.isArray(body.guardianEmails)) {
      return body.guardianEmails;
    }
  } catch (error) {
    console.error("Error parsing request body for guardian emails:", error);
  }
  return [];
};

const mergeAccountEmailsWithReqBodyGuardianEmails = (req, res) => {
  const user = res?.locals?.user;

  try {
    const newEmails = getReqBodyGuardianEmails(req);

    const guardianEmails = cleanAndDeduplicateEmails(newEmails).map((e) => ({
      type: "guardian",
      email: e,
    }));

    if (guardianEmails.length === 0) {
      // Quick exit if no new guardian emails provided, avoid losing any existing ones
      return user.emails || [];
    }

    const studentEmails = (user.emails || []).filter(
      (e) => e?.type === "student",
    );

    return [...guardianEmails, ...studentEmails];
  } catch (error) {
    console.error("Error merging emails:", error);
  }

  return user.emails || [];
};

router.post("/student/update", studentMiddleware, async (req, res) => {
  try {
    const updateBody = {
      emails: mergeAccountEmailsWithReqBodyGuardianEmails(req, res),
      guardianEmail: null,
      [userNeedsGuardianTouchKey]: Date.now(),
      [guardianPrivacyAuthTokenKey]:
        req.user.guardianPrivacyAuthToken || generateGuardianPrivacyAuthToken(),
      [firstSeenKey]: req.user[firstSeenKey] || Date.now(),
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

router.get("/student/accept", studentMiddleware, async (req, res) => {
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

router.get("/guardian/load/:token", guardianMiddleware, async (req, res) => {
  res.status(200).send({
    success: true,
    error: null,
    data: {
      first: res.locals.guardianStudent.first,
    },
  });
});

router.get("/guardian/accept/:token", guardianMiddleware, async (req, res) => {
  if (res.locals.guardianStudent[acceptedKey]) {
    return res.status(200).send({
      success: true,
      data: {
        [acceptedKey]: res.locals.guardianStudent[acceptedKey],
        [acceptedByKey]: res.locals.guardianStudent[acceptedByKey],
      },
      error: null,
    });
  }

  try {
    const updateBody = {
      [acceptedKey]: Date.now(),
      [acceptedByKey]: "guardian",
    };

    await userDB.doc(res.locals.guardianStudent.id).update(updateBody);

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

router.get("/student/ultra-secret/reset", async (req, res) => {
  if (!res?.locals?.user) {
    return res
      .status(200)
      .send({ success: false, error: "not logged in", data: null });
  }

  try {
    const updateBody = {
      [firstSeenKey]: null,
      [userNeedsGuardianTouchKey]: null,
      [guardianPrivacyAuthTokenKey]: null,
      [acceptedKey]: null,
      [acceptedByKey]: null,
    };

    await userDB.doc(req.user.uid).update(updateBody);

    return res
      .status(200)
      .send({ success: true, data: updateBody, error: null });
  } catch (e) {
    console.error("Failed to secret reset", req.user.uid, e);
    return res.status(200).send({
      success: false,
      error: "Failed to secret reset",
      data: null,
    });
  }
});

router.get("/student/ultra-secret/view", async (req, res) => {
  if (!res?.locals?.user) {
    return res
      .status(200)
      .send({ success: false, error: "not logged in", data: null });
  }

  const allKeys = [
    firstSeenKey,
    userNeedsGuardianTouchKey,
    guardianPrivacyAuthTokenKey,
    acceptedKey,
    acceptedByKey,
  ];

  const data = {};
  allKeys.forEach((key) => {
    data[key] = req.user[key] || null;
  });

  data.privacyState = req.user.privacy || null;

  return res.status(200).send({ success: true, data, error: null });
});

module.exports = router;
