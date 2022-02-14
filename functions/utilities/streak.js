const isNextStreak = (currentPage, nextPage, answers) => {
  const answer = answers[currentPage?.url];

  if (answer && answer.submitted && answer.time) {
    if (
      answer.time > new Date(currentPage.available).getTime() &&
      answer.time < new Date(nextPage ? nextPage.available : currentPage.deadline).getTime()
    ) {
      return true;
    }
  }

  return false;
};

const getStreakMultiplier = (streak) => {
  if (typeof streak !== "number" || streak < 2) return 0;
  return (streak - 1) * 5;
};

const millisecondsInDay = 1000*60*60*24;

const getNextReadableTime = (target, todayDate) => {
  if(!target){
    return undefined;
  }

  const prefix = 'Next parallelogram: '
  const targetDate = new Date(target);

  if(isNaN(targetDate.getTime())) return undefined;

  if (todayDate > targetDate) return undefined;

  const differenceMillisecond = targetDate.getTime() - todayDate.getTime();

  const daysAway = differenceMillisecond / millisecondsInDay;

  const lessThan24HoursAway = (daysAway) < 1;

  if (todayDate.getDate() === targetDate.getDate() && lessThan24HoursAway) {
    const hours = targetDate.getHours();

    if (hours === 12) return prefix + `${hours}pm today`;
    if (hours < 12) return prefix + `${hours}am today`;
    if (hours > 12) return prefix + `${hours - 12}pm today`;
  }

  if (lessThan24HoursAway) {
    return prefix + `tomorrow`;
  }

  return prefix + `in ${Math.floor(daysAway)} days`;
};

const getStreakValue = (activePageIndex, levels, answers) => {
  const userHasCompletedCurrentlyActive = !!answers[levels[activePageIndex]?.url]

  const adjustedActivePageIndex = userHasCompletedCurrentlyActive ? activePageIndex : activePageIndex + 1;

  const activePage = activePageIndex > 0 ? levels[adjustedActivePageIndex] : undefined;
  const nextPage = levels[adjustedActivePageIndex - 1];

  let streak = isNextStreak(activePage, nextPage, answers) ? 1 : 0;
  

  while (
    isNextStreak(
      levels[adjustedActivePageIndex + streak],
      levels[adjustedActivePageIndex - 1 + streak],
      answers
    )
  ) {
    streak++;
  }

  return {streak, userHasCompletedCurrentlyActive};
}

const getStreak = (req, PAGES, now) => {
  const levelName = req?.user?.level;

  if (!levelName || req?.user?.code) {
    return undefined;
  }

  const activePageIndex = PAGES[levelName].findIndex(({ available }) => now > new Date(available));

  const yearHasNotStartedYet = activePageIndex == -1;

  const userHasCompletedLastOfYear = !!req?.user?.answers[PAGES[levelName][activePageIndex]?.url];
  const yearHasEnded = activePageIndex === 0 && (new Date(PAGES[levelName][activePageIndex].deadline) < now || userHasCompletedLastOfYear);
  
  const { streak, userHasCompletedCurrentlyActive } = getStreakValue(activePageIndex, PAGES[levelName], req?.user?.answers)

  if (yearHasNotStartedYet) {
    return {
      value: 0,
      multiplier: 0,
      next: getNextReadableTime(PAGES[levelName][PAGES[levelName].length - 1]?.available, now),
      motivator: 'Join us for a new year of parallelograms!'
    }
  }

  if (yearHasEnded) {
    return {
      value: streak,
      multiplier: getStreakMultiplier(streak),
      next: undefined,
      motivator: streak ? 'Great final streak, come back next year to see if you can beat it!' : 'Come back in August to build a streak and earn a score multiplier!'
    }
  }

  if(streak && userHasCompletedCurrentlyActive){
    return {
      value: streak,
      multiplier: getStreakMultiplier(streak),
      next: getNextReadableTime(PAGES[levelName][activePageIndex - 1]?.available, now),
      motivator: 'Come back for the next parallelogram to continue your streak!'
    }
  } else if(streak) {
    return {
      value: streak,
      multiplier: getStreakMultiplier(streak),
      next: `Next parallelogram is out!`,
      motivator: 'Complete the latest parallelogram to build up your multiplier!'
    }
  }

  return {
    value: 0,
    multiplier: 0,
    next: undefined,
    motivator: 'Answer the latest parallelogram to start a score streak and earn a score multiplier!'
  };
};

exports.getStreak = getStreak;
