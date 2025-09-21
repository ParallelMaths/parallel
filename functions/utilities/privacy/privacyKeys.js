const latestPrivacyVersion = 'privacy-sept-2025-001';

const firstSeenKey = `${latestPrivacyVersion}-firstSeen`;
const latestTouchKey = `${latestPrivacyVersion}-latestTouch`;
const dueByKey = `${latestPrivacyVersion}-dueBy`;
const userNeedsGuardianTouchKey = `${latestPrivacyVersion}-ng-touch`;
const guardianPrivacyAuthTokenKey = "guardianPrivacyAuthToken";
const acceptedKey = `${latestPrivacyVersion}-accepted`;
const acceptedByKey = `${latestPrivacyVersion}-acceptedBy`;
const variantModeKey = `${latestPrivacyVersion}-variant`;

module.exports = {
  firstSeenKey,
  latestTouchKey,
  dueByKey,
  userNeedsGuardianTouchKey,
  guardianPrivacyAuthTokenKey,
  acceptedKey,
  acceptedByKey,
  variantModeKey,
};
