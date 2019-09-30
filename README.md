# Portfolio
A project to host my e-portfolio.

A slew of my other applications have been added to this project as submodules. Each application is run on a separate port and reached through reverse proxying.

## Building
Each submodule has its own instructions for building, which can be found in each of their READMEs.

Building the client of this respository itself (which is essentially just the homepage) can be done with the npm script "build": `npm run build`.

## Running
Running `start.sh` will serve the `public/` directory, run all demo projects using pm2, and run the reverse proxy system for accessing those projects within https://danielschubert.dev. Demo projects must be built *prior* to running `start.sh`.

## Local Development
Each demo project can locally be run individually using command-line arguments defined in its respective README. Currently, there is no way to run the entire `portfolio` project locally. This is caused by `main.js` forcing a specific SSL certificate to be used that only I have. A future feature will be to allow for local running of the project.
