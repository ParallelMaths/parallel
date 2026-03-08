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

const validateNumber = (value) => {
    if(typeof value === 'number') {
        return value;
    }
    return null
}

const validateBoolean = (value) => {
    if(typeof value === 'boolean') {
        return value;
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
        teacherCode: validateString(user.teacherCode),
        code: validateString(user.code),
        level: validateString(user.level),
        birthMonth: validateNumber(user.birthMonth),
        birthYear: validateNumber(user.birthYear),
        schoolName: validateString(user.schoolName),
        phoneNumber: validateString(user.phoneNumber),
        postCode: validateString(user.postCode),
        guardianEmail: validateString(user.guardianEmail),
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
