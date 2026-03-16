const {
    firstSeenKey,
    latestTouchKey,
    dueByKey,
    userNeedsGuardianTouchKey,
    guardianPrivacyAuthTokenKey,
    acceptedKey,
    acceptedByKey,
    variantModeKey
} = require('../utilities/privacy/privacyKeys');

const validateString = (value) => {
    if(typeof value === 'string') {
    return value;
    }
    return null
}

const getCleanNumber = (n) => {
  if (!n) return null;
  const parsed = parseInt(n);
  if (isNaN(parsed)) return null;
  return parsed;
};

const validateNumber = (value) => {
    if(typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        return getCleanNumber(value);
    }
    return null
}

const validateBoolean = (value) => {
    if(typeof value === 'boolean') {
        return value;
    }
    return null
}

const validateStringArray = (value) => {
    if(Array.isArray(value)) {
        return value.filter(s => typeof s === 'string' && s);
    }
    return null
}

const getGuardianEmails = (user) => {
    try {
      return [...new Set([user?.guardianEmail, ...(user?.emails?.filter(e => e?.type === 'guardian').map(e => e?.email) || [])])].filter(s => typeof s === 'string' && s)   
    } catch (error) {
        console.error('Error getting guardian emails:', error);
        return [];
    }
}

const getAdditionalStudentEmails = (user) => {
    try {
      return [...new Set([...(user?.emails?.filter(e => e?.type === 'student').map(e => e?.email) || [])])].filter(s => typeof s === 'string' && s)   
    } catch (error) {
        console.error('Error getting student emails:', error);
        return [];
    }
}

// This data gets passed through Graphql
// As firebase data is set client side, it can't always be trusted
// If a value is wrong type, it will be set to null
const getTypeSafeUser = (user) => {
    return {
        email: validateString(user.email),
        euclidAccountType: validateString(user.euclidAccountType),
        accountType: validateString(user.accountType),
        circlesDataType: validateString(user.circlesDataType),
        uid: validateString(user.uid),
        first: validateString(user.first),
        last: validateString(user.last),
        teacherCode: null, // deprecated - use teacherCodes array instead
        code: validateString(user.code),
        level: validateString(user.level),
        birthMonth: validateNumber(user.birthMonth),
        birthYear: validateNumber(user.birthYear),
        schoolName: validateString(user.schoolName),
        phoneNumber: validateString(user.phoneNumber),
        postCode: validateString(user.postCode),
        guardianEmail: null, // deprecated - use guardianEmails array instead
        guardianEmails: getGuardianEmails(user),
        privacy: user.privacy,
        privacyDebug: user.privacyDebug,
        acceptedTerms: validateBoolean(user.acceptedTerms),
        userReference: validateString(user.userReference),
        primaryEmailType: validateString(user.primaryEmailType),
        source: validateString(user.source),
        guardianName: validateString(user.guardianName),
        guardianPhone: validateString(user.guardianPhone),
        gender: validateString(user.gender),
        pupilPremium: validateBoolean(user.pupilPremium),
        schoolPostcode: validateString(user.schoolPostcode),
        acceptedEuclidTerms: validateBoolean(user.acceptedEuclidTerms),
        euclidEnrolYearGroup: validateString(user.euclidEnrolYearGroup),
        euclidEnrolTimestamp: validateNumber(user.euclidEnrolTimestamp),

        teacherCodes: validateStringArray(user.teacherCode),
        additionalStudentEmails: getAdditionalStudentEmails(user),
        ethnicity: validateString(user.ethnicity),
        country: validateString(user.country),
        ukCountry: validateString(user.ukCountry),
        homeEducated: validateBoolean(user.homeEducated),
        homeEducatedConfirm: validateBoolean(user.homeEducatedConfirm),
        schoolEmail: validateString(user.schoolEmail),

        privacyDebug: {
            firstSeen: validateNumber(user[firstSeenKey]),
            latestTouch: validateNumber(user[latestTouchKey]),
            dueBy: validateNumber(user[dueByKey]),
            userNeedsGuardianTouch: validateNumber(user[userNeedsGuardianTouchKey]),
            guardianPrivacyAuthToken: validateString(user[guardianPrivacyAuthTokenKey]),
            accepted: validateNumber(user[acceptedKey]),
            acceptedBy: validateString(user[acceptedByKey]),
            variantMode: validateString(user[variantModeKey])
        }
    }
}

module.exports = {
    getTypeSafeUser,
    getGuardianEmails
}
