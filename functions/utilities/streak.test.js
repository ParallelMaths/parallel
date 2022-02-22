const { getStreak } = require("./streak");

const AprilFirstDate = "2022-04-01T11:00:00.000Z";
const MayFirstDate = "2022-05-01T11:00:00.000Z";
const JuneFirstDate = "2022-06-01T11:00:00.000Z";
const JuneFifteenth = "2022-06-15T11:00:00.000Z";

const MarchTenthUnix = 1646906400000;
const MarchTwentiethUnix = 1647770400000;

const AprilTenthUnix = 1649581200000;
const AprilTwentiethUnix = 1650445200000;

const MayTenthUnix = 1652173200000;
const MayTwentiethUnix = 1653037200000;

const JuneTenthUnix = 1654851600000;
const JuneTwentiethUnix = 1655715600000;

const AprilQuestion = "7-33-aluminium-can-engineering";
const MayQuestion = "7-34-pet-puzzle";
const JuneQuestion = "7-35-summer-sums";

const PAGES = {
  year7: [
    {
      url: JuneQuestion,
      available: JuneFirstDate,
      deadline: JuneFifteenth,
    },
    {
      url: MayQuestion,
      available: MayFirstDate,
    },
    {
      url: AprilQuestion,
      available: AprilFirstDate,
    },
  ],
};

describe("streak", () => {
  it("when student has running streak and next parallelogram not out yet", () => {
    const now = new Date(AprilTwentiethUnix);

    const req = {
      user: {
        level: "year7",
        answers: {
          [AprilQuestion]: {
            submitted: true,
            time: AprilTenthUnix,
          },
        },
      },
    };

    expect(getStreak(req, PAGES, now)).toEqual({
      motivator: "Come back for the next parallelogram to continue your streak!",
      multiplier: 0,
      next: "Next parallelogram: in 11 days",
      value: 1,
    });
  });

  it("when student has running streak and next parallelogram is out & not completed", () => {
    const now = new Date(MayTenthUnix);

    const req = {
      user: {
        level: "year7",
        answers: {
          [AprilQuestion]: {
            submitted: true,
            time: AprilTenthUnix,
          },
        },
      },
    };

    expect(getStreak(req, PAGES, now)).toEqual({
      motivator: "Complete the latest parallelogram to build up your multiplier!",
      multiplier: 0,
      next: "Next parallelogram is out!",
      value: 1,
    });
  });

  it("when student has no running streak", () => {
    const now = new Date(MayTenthUnix);

    const req = {
      user: {
        level: "year7",
        answers: {},
      },
    };

    expect(getStreak(req, PAGES, now)).toEqual({
      motivator: "Answer the latest parallelogram to start a score streak and earn a score multiplier!",
      multiplier: 0,
      next: undefined,
      value: 0,
    });
  });

  it("when student has no running streak and year hasnt started yet", () => {
    const now = new Date(MarchTenthUnix);

    const req = {
      user: {
        level: "year7",
        answers: {},
      },
    };

    expect(getStreak(req, PAGES, now)).toEqual({
      motivator: "Join us for a new year of parallelograms!",
      multiplier: 0,
      next: "Next parallelogram: in 22 days",
      value: 0,
    });
  });

  it("when student has a running streak and year has ended", () => {
    const now = new Date(JuneTwentiethUnix);

    const req = {
      user: {
        level: "year7",
        answers: {
          [JuneQuestion]: {
            submitted: true,
            time: JuneTenthUnix,
          },
          [MayQuestion]: {
            submitted: true,
            time: MayTenthUnix,
          },
        },
      },
    };

    expect(getStreak(req, PAGES, now)).toEqual({
      motivator: "Great final streak, come back next year to see if you can beat it!",
      multiplier: 5,
      next: undefined,
      value: 2,
    });
  });

  it("when student has no running streak and year has ended", () => {
    const now = new Date(JuneTwentiethUnix);

    const req = {
      user: {
        level: "year7",
        answers: {},
      },
    };

    expect(getStreak(req, PAGES, now)).toEqual({
      motivator: "Come back in August to build a streak and earn a score multiplier!",
      multiplier: 0,
      next: undefined,
      value: 0,
    });
  });

  it("when student has a running streak, has done the current parallelogram, and year is about to end", () => {
    const now = new Date(JuneTenthUnix);

    const req = {
      user: {
        level: "year7",
        answers: {
          [JuneQuestion]: {
            submitted: true,
            time: JuneTenthUnix,
          },
          [MayQuestion]: {
            submitted: true,
            time: MayTenthUnix,
          },
        },
      },
    };

    expect(getStreak(req, PAGES, now)).toEqual({
      motivator: "Great final streak, come back next year to see if you can beat it!",
      multiplier: 5,
      next: undefined,
      value: 2,
    });
  });
});
