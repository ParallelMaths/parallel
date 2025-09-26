const firebase = require("firebase-admin");
const {
  firstSeenKey,
  latestTouchKey,
  dueByKey,
  acceptedKey,
  variantModeKey,
} = require("./privacyKeys");
const {
  getGuardianEmails
} = require("../getTypeSafeUser");

const userDB = firebase.firestore().collection("users");

function generateGuardianPrivacyAuthToken() {
  return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    .replace(/x/g, () => (Math.random() * 36).toString(36)[0])
    .toLowerCase();
}

const supportedCustomVariants = ['year8webinar']

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

  if (user.code) {
    return false; // assume teachers are over 13
  }

  return true;
};

const getPrivacyVariant = (user) => {
  try {
    const variant = user?.[variantModeKey];
    if (supportedCustomVariants.includes(variant)) {
      return variant;
    }
    return null;
  } catch {
    return null;
  }
}

const shouldRetryPopup = (lastTouched, isUnder13, guardianEmails) => {
  if (isUnder13 && guardianEmails.length) return false;

  try {
    if (!lastTouched) return false;
    const threeHoursAgo = Date.now() - (3 * 60 * 60 * 1000);
    return lastTouched < threeHoursAgo;
  } catch {
    return false;
  }
}

const getPrivacyState = (email, user) => {
  const isUnder13 = isUnderThirteen(user);
  const variant = getPrivacyVariant(user);
  const guardianEmails = getGuardianEmails(user);

  const useUnder13 = isUnder13 && variant !== 'year8webinar'

  if (user[acceptedKey]) {
    // User has already accepted
    return {
      debug: 2,
      visible: false,
      mode: "none",
      variant
    };
  }

  const firstSeen = user[firstSeenKey];
  const dueBy = user[dueByKey];
  const latestTouch = user[latestTouchKey];

  const shouldRetry = shouldRetryPopup(latestTouch, useUnder13, guardianEmails);

  const delayResponse = {
    visible: true,
    mode: useUnder13 ? "under-13-delay" : "over-13-delay",
    variant
  };

  if (firstSeen && dueBy) {
    // User has seen popup before

    if (Date.now() > dueBy) {
      // if 7 days or more since first seen, show block
      return {
        debug: 3,
        visible: true,
        mode: useUnder13 ? "under-13-block" : "over-13-block",
        variant
      };
    }

    if (shouldRetry) {
      // User has seen popup before and they should retry
      return {
        debug: 7,
        ...delayResponse,
      };
    }
 
    // User has seen popup before but within 7 days
    return {
      debug: 4,
      visible: false,
      mode: "none",
      variant
    };
  }

  // User has not seen popup before
  return {
    debug: 5,
    ...delayResponse
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
exports.validateGuardianToken = validateGuardianToken;
exports.isUnderThirteen = isUnderThirteen;
