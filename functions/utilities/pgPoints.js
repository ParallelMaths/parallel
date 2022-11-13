const LEVELS = ['year6', 'year7', 'year8', 'year9',  'year10', 'year11'];

const getCleanAnswers = answers => Object.keys(answers).reduce((acc, key) => {
    const { submitted, score, time, sameWeek } = answers[key];
    const year = 'year' + key.split('-')[0];
    const afterMigration = time && time > 1661382000000 ? true : false;

    if (!submitted) return acc;
    if (!LEVELS.includes(year)) return acc;

    acc[year] = acc[year] || {};
    acc[year][key] = {
        score, time, sameWeek, afterMigration
    }

    return acc;
}, {});

const getBonus = (numberCompleted) => {
    let count = 0;
    for (let x = 0; x < numberCompleted; x++) {
        count += x + 1;
    }
    return count;
};

const isValidScore = (score) => {
    if (typeof score !== 'number') return false;
    if (score > 0 && score <= 100) return true;
    return false;
};

const getNumberAfterMigration = (answerGroup) =>
    Object.entries(answerGroup).reduce((acc, [, value]) => {
        if (value.afterMigration) return acc + 1;

        return acc;
    }, 0);

const getPoints = (answerGroup) =>
    Object.entries(answerGroup).reduce((acc, [, value]) => {
        if (value.score && isValidScore(value.score)) {
            if (!value.afterMigration) return acc;

            acc += value.score;

            if (value.sameWeek) {
                acc += 20 * (value.score / 100);
            }
        }
        return acc;
    }, 0);

const calculatePgYearPoints = (answerGroup, adjustment) => {
    const bonus = getBonus(Object.keys(answerGroup).length);

    // Remove bonus of PGs done premigration
    const negativeBonus = getBonus(
        Object.keys(answerGroup).length - getNumberAfterMigration(answerGroup)
    );

    const points = getPoints(answerGroup);

    return Math.ceil(bonus + points - negativeBonus) + (adjustment || 0);
};

const getPgPoints = (user) => {
    const awardAdjustments = user?.awardAdjustments || {};
    const cleanAnswers = getCleanAnswers(user?.answers || {})

    return LEVELS.reduce((acc, level) => {
        acc[level] = calculatePgYearPoints(cleanAnswers[level] || {}, awardAdjustments[level])
        return acc;
    }, {})
}

module.exports = {
    LEVELS,
    getPgPoints,
    getCleanAnswers
}
