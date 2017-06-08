# Parallel

_Parallel_ is a weekly bulletin written by [Dr Simon Singh](https://en.wikipedia.org/wiki/Simon_Singh), author of No.1 bestseller Fermat’s Last Theorem.

Every week, participating students will receive an email that contains 60 minutes of interesting, fun and challenging maths that goes beyond school maths: mystery and history, activities and oddities, puzzles and problems.

Parallel is designed for students in Year 7 and Year 8, and the pilot will run for four weeks, starting on June 30.


## Run locally

This repo contains all the content of Parallel, and a static website that allows students to register and save their progress.

To run the server locally, you need `npm`. Install all dependencies using `npm install`, and then start the server on port 8086 by running `npm start`.


## TODO List

- [Ed] __Save/load student's answers and feedback__
- [Phil] __On homepage, show all submissions, scores, and countdown__
- [Ed] __Convert all 4 chapters to markdown__
- [Ed] __After submission/deadline, show answers inline__
- [Phil] __Password forgotten/reset form__
- [Phil] __Faster page loading__
- After submitting, prevent editing/re-submitting
- Improve CSS for questions
- Disable pages in navigation which are not yet ready
- Loading state for forms, CSS for invalid fields
- Improve mobile display
- HTTPS
- Firebase db and hosting rules
- Reset scroll after login
