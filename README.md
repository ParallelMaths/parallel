# Parallel

_Parallel_ is a weekly bulletin written by Simon Singh, author of No.1 bestseller Fermat’s Last Theorem.

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


## Adding a new Parallelogram

Adding a new parallelogram consists of three parts:

* Create a new file at `/pages/<name>.md` with the parallelogram content.
* Upload all required resources (e.g. images) to `/resources/<name>/`. Note that
  the names of the `.md` file and the resources directory have to match.
* Update `/pages/pages.yaml` with the new parallelogram and the required timings.
