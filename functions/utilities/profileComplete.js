function isProfileComplete(userData) {
    if(!userData) return false;
    if(!userData.birthMonth) return false;
    if(!userData.birthYear) return false;
    if(!userData.country) return false;
    if(!userData.studentPanelConsidered) return false;
  
    if(!userData.homeEducated) {
      if(!userData.schoolEmail) return false;
      if (userData.country === 'GB' && !userData.schoolPostcode) return false;
    }
  
    return true;
}

module.exports = isProfileComplete;
