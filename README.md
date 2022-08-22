# Parallel

_Parallel_ is a weekly bulletin written by Simon Singh, author of No.1 bestseller Fermat’s Last Theorem.

Every week, participating students will receive an email that contains 60 minutes of interesting, fun and challenging maths that goes beyond school maths: mystery and history, activities and oddities, puzzles and problems.


## Getting started

This repo contains a static website that hosts the content of each week's
parallelogram. Using Firebase, students can create accounts, save their
progress and see their scores.

**Firstly clone the repository and enter the directory**

```bash
git clone git@github.com:ParallelMaths/parallel.git
cd parallel
```

**Next you need to setup your service account information**
```bash
mkdir private
touch private/service-account.json # put your service account json in here
```

**Then you can install the node dependancies using our version of Node**
```bash
nvm use # If you dont have nvm it can be installed here https://github.com/nvm-sh/nvm#installing-and-updating
npm install
```

**Finally you can start the app locally**
```bash
npm start
```

**You can access the local server on http://localhost:5000**

## Deployments

To deploy updates to the [live site](https://parallel.org.uk), use
`npm run deploy`. (This requires access to the linked Firebase account.)


## Adding a new Parallelogram

Adding a new parallelogram consists of three parts:

* Create a new file at `/pages/<name>.md` with the parallelogram content.
* Upload all required resources (e.g. images) to `/static/resources/<name>/`.
* Update `/pages/pages.yaml` with the new parallelogram and the required timings.
