const mapping = {
    "11-07-colliding-vortexes": "11-08-colliding-vortexes",
    "11-08-borromean-rings": "11-09-borromean-rings",
    "11-09-a-cats-tale": "11-10-a-cats-tale",
    "11-10-hanging-a-picture": "11-11-hanging-a-picture",
    "11-11-fractals": "11-12-fractals",
    "11-12-gravity": "11-13-gravity",
    "11-13-twelve-days-christmas": "11-14-twelve-days-christmas",
    "10-08-map-mathematics": "10-09-map-mathematics",
    "10-09-paper-mysteries": "10-10-paper-mysteries",
    "10-10-other-hamilton": "10-11-other-hamilton",
    "10-11-waterfalls": "10-12-waterfalls",
    "10-12-gravitation-waves": "10-13-gravitation-waves",
    "10-13-chrismaths": "10-14-chrismaths",
    "10-14-proof": "10-18-proof",
    "10-15-optical-illusions": "10-19-optical-illusions",
    "10-16-hypatia": "10-20-hypatia",
    "10-17-monkey-magic": "10-21-monkey-magic",
    "10-18-smilla-sense-snow": "10-22-smilla-sense-snow",
    "10-19-tongue-twisters": "10-23-tongue-twisters",
    "10-20-earth-look-like": "10-24-earth-look-like",
    "10-21-pieces-of-eight": "10-25-pieces-of-eight",
    "10-22-evolution-rap": "10-26-evolution-rap",
    "10-23-chess-in-church": "10-27-chess-in-church",
    "10-24-easter-challlenges": "10-28-magic-hexagons",
    "10-25-asteroid-impact": "10-29-asteroid-impact",
    "10-26-ignobel-prize": "10-30-ignobel-prize",
    "10-27-alan-turing": "10-31-alan-turing",
    "10-28-mcnuggets": "10-32-mcnuggets",
    "10-29-slinky-physics": "10-33-slinky-physics",
    "10-30-a-trapped-knight": "10-34-a-trapped-knight",
    "10-31-pi": "10-35-pi",
    "10-32-lewis-carroll": "10-36-lewis-carroll",
    "10-33-juice-water": "10-37-juice-water",
    "10-34-revolutionary-riddles": "10-38-revolutionary-riddles",
    "9-08-checkmate": "9-09-checkmate",
    "9-09-clock-calculation": "9-10-clock-calculation",
    "9-10-beautiful-mind": "9-11-beautiful-mind",
    "9-11-kenken": "9-12-kenken",
    "9-12-prime-time": "9-13-prime-time",
    "9-13-chrismaths": "9-14-chrismaths",
    "9-15-bubble-solution": "9-19-bubble-solution",
    "9-16-puzzle-compendium": "9-20-puzzle-compendium",
    "9-17-shilling-thoughts": "9-21-shilling-thoughts",
    "9-18-mean-girls": "9-22-mean-girls",
    "9-19-collision-mystery": "9-23-collision-mystery",
    "9-20-four-colour-map-theorem": "9-24-four-colour-map-theorem",
    "9-21-pendulum-patterns": "9-25-pendulum-patterns",
    "9-22-bird-brain": "9-26-bird-brain",
    "9-23-more-water-jugs": "9-27-more-water-jugs",
    "9-24-easter-challenges": "9-28-venn-diagrams",
    "9-25-teachers-pets": "9-30-teachers-pets",
    "9-26-qi-mathematics": "9-31-qi-mathematics",
    "9-27-circle-mystery": "9-32-circle-mystery",
    "9-28-sphere-packing": "9-33-sphere-packing",
    "9-29-mathematical-timeline": "9-34-mathematical-timeline",
    "9-30-mathematical-plaques": "9-35-mathematical-plaques",
    "9-31-tangrams": "9-36-tangrams",
    "9-32-ham-sandwich-problem": "9-37-ham-sandwich-problem",
    "9-33-number-riddles": "9-38-number-riddles",
    "9-34-richard-feynman-superhero": "9-39-richard-feynman-superhero",
    "8-08-secret-maths-club": "8-09-secret-maths-club",
    "8-09-weird-shapes": "8-10-weird-shapes",
    "8-10-chikas-test-seven": "8-11-chikas-test-seven",
    "8-11-kenken": "8-12-kenken",
    "8-13-chrismaths": "8-14-chrismaths",
    "8-14-ma-kettle": "8-18-ma-kettle",
    "8-15-lou-costello": "8-19-lou-costello",
    "8-16-flag-of-flags": "8-20-flag-of-flags",
    "8-17-dripping-taps": "8-21-dripping-taps",
    "8-18-freezing-sports": "8-22-freezing-sports",
    "8-19-countdown-levitating-water": "8-23-countdown-levitating-water",
    "8-20-curious-bear-doctor-who": "8-24-curious-bear-doctor-who",
    "8-21-computer-music": "8-25-computer-music",
    "8-22-rattlebacks": "8-26-rattlebacks",
    "8-23-colour-code-challenge": "8-27-colour-code-challenge",
    "8-24-easter-challenges": "8-28-easter-challenges",
    "8-25-north-pole": "8-33-north-pole",
    "8-26-snake-mathematics": "8-34-snake-mathematics",
    "8-27-ada-lovelace": "8-35-ada-lovelace",
    "8-28-seven-bridges-konigsberg": "8-36-seven-bridges-konigsberg",
    "8-29-mathematical-timeline": "8-37-mathematical-timeline",
    "8-30-amazing-grace": "8-38-amazing-grace",
    "8-31-floppy-pizza": "8-39-floppy-pizza",
    "8-32-rules-critical-thinking": "8-40-rules-critical-thinking",
    "8-33-more-rules-critical-thinking": "8-41-more-rules-critical-thinking",
    "8-34-miracle-chocolate": "8-42-miracle-chocolate",
    "7-08-man-who-knew-infinity": "7-09-man-who-knew-infinity",
    "7-09-futurama-maths": "7-10-futurama-maths",
    "7-10-mercury-trivia": "7-11-mercury-trivia",
    "7-11-kenken": "7-12-kenken",
    "7-12-prime-time": "7-13-prime-time",
    "7-13-chrismaths": "7-14-chrismaths",
    "7-14-codes-physics": "7-18-codes-physics",
    "7-15-marie-curie": "7-19-marie-curie",
    "7-16-crosses-crosses": "7-20-crosses-crosses",
    "7-17-sundogs-random-dots": "7-21-sundogs-random-dots",
    "7-18-downhill-from-here": "7-22-downhill-from-here",
    "7-19-pie-charts": "7-23-pie-charts",
    "7-20-optimise-pizza-money": "7-24-optimise-pizza-money",
    "7-21-tricky-parking-problem": "7-25-tricky-parking-problem",
    "7-22-maths-jokes": "7-26-maths-jokes",
    "7-23-secret-happiness": "7-27-secret-happiness",
    "7-24-easter-challenges": "7-28-eleven-eleven",
    "7-25-a-matter-factorial": "7-33-a-matter-factorial",
    "7-26-good-will-hunting": "7-34-good-will-hunting",
    "7-27-hidden-figures": "7-35-hidden-figures",
    "7-28-blackboard-equation": "7-36-blackboard-equation",
    "7-29-mathematical-timeline": "7-37-mathematical-timeline",
    "7-30-josephs-machines": "7-38-josephs-machines",
    "7-31-top-of-the-league": "7-39-top-of-the-league",
    "7-32-number-sense": "7-40-number-sense",
    "7-33-aluminium-can-engineering": "7-41-aluminium-can-engineering",
    "7-34-pet-puzzle": "7-42-pet-puzzle",
}

const { data: users } = require('./private/cache-users.json');
const fs = require('fs');

for (const userId of Object.keys(users)) {
    const user = users[userId]

    for (const oldPGName of Object.keys(mapping)) {
        if(user.answers && user.answers[oldPGName]) {
            const newPGName = mapping[oldPGName];

            if(!(user.answers[newPGName] && user.answers[newPGName].submitted)) {
                user.answers[mapping[oldPGName]] = {
                    ...user.answers[oldPGName],
                    legacyPGName: oldPGName
                };

                user.NEWTOUCHED = true;

                delete user.answers[oldPGName]
            } else {
                console.log('already redone', oldPGName, userId)
            }
        }
    }
}

fs.writeFileSync('./private/transformed.json', JSON.stringify(users, null, 4))
