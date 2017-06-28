# Parallel

_Parallel_ is a weekly bulletin written by [Dr Simon Singh](https://en.wikipedia.org/wiki/Simon_Singh), author of No.1 bestseller Fermat’s Last Theorem.

Every week, participating students will receive an email that contains 60 minutes of interesting, fun and challenging maths that goes beyond school maths: mystery and history, activities and oddities, puzzles and problems.

Parallel is designed for students in Year 7 and Year 8, and the pilot will run for four weeks, starting on June 30.


## Getting started

This repo contains a static website that hosts the content of each week's
parallelogram. Using Firebase, students can create accounts, save their
progress and see their scores.

To run the server locally, you need `npm`. Install all dependencies using
`npm install`, and then start the server on port 5000 by running `npm start`.

To deploy updates to the [live site](https://parallel.org.uk), use
`npm run deploy`. (This requires access to the linked Firebase account.)


## TODO List

- __Fix about page and # links__
- __Fix contact page__
- __Slightly nicer CSS for login form__

- __Show status in navigation: locked/countdown/score__
- __Fix hints__
- __Enable feedback form__

- Evaluate score and show in table on My Scores page
- Firebase db rules, real time updating
- Build password forgotten/reset form
- Loading state for forms, CSS for invalid fields
- Alert when submitting without answering everything
- Improve mobile design
- Faster page loading
