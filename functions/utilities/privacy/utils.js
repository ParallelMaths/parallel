const firebase = require("firebase-admin");

const userDB = firebase.firestore().collection("users");

function generateGuardianPrivacyAuthToken() {
  return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    .replace(/x/g, () => (Math.random() * 36).toString(36)[0])
    .toLowerCase();
}

// const latestPrivacyVersion = 'privacy-sept-2025-001';
const latestPrivacyVersion = "privacy-testing-002";

const firstSeenKey = `${latestPrivacyVersion}-firstSeen`;
const userNeedsGuardianTouchKey = `${latestPrivacyVersion}-ng-touch`;
const guardianPrivacyAuthTokenKey = "guardianPrivacyAuthToken";
const acceptedKey = `${latestPrivacyVersion}-accepted`;
const acceptedByKey = `${latestPrivacyVersion}-acceptedBy`;

const getCleanNumber = (n) => {
  if (!n) return null;
  const parsed = parseInt(n);
  if (isNaN(parsed)) return null;
  return parsed;
};

const isUnderThirteen = (user) => {
  const birthYear = getCleanNumber(user?.birthYear) || new Date().getFullYear();
  const birthMonth = getCleanNumber(user?.birthMonth) || 1;

  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const earliestYear = nowYear - 13;

  if (birthYear < earliestYear) {
    return false;
  }

  if (birthYear == earliestYear && birthMonth < nowMonth) {
    return false;
  }

  return true;
};

const getPrivacyState = (email, user) => {
  if (
    !email.includes("@mcmill.co.uk") ||
    process.env.IS_FIREBASE_CLI == "true"
  ) {
    return {
      debug: 1,
      visible: false,
      mode: "none",
    };
  }

  if (user[acceptedKey]) {
    // User has already accepted
    return {
      debug: 2,
      visible: false,
      mode: "none",
    };
  }

  const isUnder13 = isUnderThirteen();

  if (!isUnder13) {
    // User is over 13 and has not accepted, but can accept themselves
    return {
      debug: 3,
      visible: true,
      mode: "accept",
    };
  }

  const firstSeen = user[firstSeenKey] || Date.now();

  if (Date.now() - firstSeen > 7 * 24 * 60 * 60 * 1000) {
    // if 7 days or more since first seen, show block
    return {
      debug: 4,
      visible: true,
      mode: "block",
    };
  }

  if (user[userNeedsGuardianTouchKey]) {
    // User is already waiting on guardian to accept
    return {
      debug: 5,
      visible: false,
      mode: "none",
    };
  }
  
  // User is under 13, but has not yet seen popup
  return {
    debug: 6,
    visible: true,
    mode: "delay",
  };
};

async function validateGuardianToken(req) {
  const token = req.params.token;

  const data = await userDB
    .where("guardianPrivacyAuthToken", "==", token)
    .limit(1)
    .get();
  const student = data.docs[0]?.data();

  if (student && student.guardianPrivacyAuthToken) {
    return { ...student, id: data.docs[0].id };
  }

  return null;
}

exports.getPrivacyState = getPrivacyState;
exports.generateGuardianPrivacyAuthToken = generateGuardianPrivacyAuthToken;
exports.firstSeenKey = firstSeenKey;
exports.userNeedsGuardianTouchKey = userNeedsGuardianTouchKey;
exports.guardianPrivacyAuthTokenKey = guardianPrivacyAuthTokenKey;
exports.acceptedKey = acceptedKey;
exports.acceptedByKey = acceptedByKey;
exports.latestPrivacyVersion = latestPrivacyVersion;
exports.validateGuardianToken = validateGuardianToken;
