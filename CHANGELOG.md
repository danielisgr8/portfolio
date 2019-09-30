# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2019-09-29
### Added
- JSDoc type definitions for a `Project` and `Section`

### Changed
- `App` now takes in a `sections` prop instead of using a hard-coded variable
- Directory rename for clarity: `public/gifs/` -> `public/imgs/`
- All section/project JSON is now in a separate file, `public/sections.js` to reduce rebuilding code
- `Project` property name change: `gifLink` -> `imgSrc` for clarity
- `Project` property name change: `githubLink` -> `repoLink` for versatility

## [1.2.4] - 2019-09-29
### Added
- "Professional Experience" section
  - Spreetail, IERO, Workiva
- New points added to existing projects

### Changed
- Header rename: "Other Projects" -> "Other Personal Projects"
- Minor CSS change

## [1.2.3] - 2019-09-25
### Added
- Added a message for when no project is selected

## [1.2.2] - 2019-09-25
### Added
- New project: [Portfolio](https://github.com/danielisgr8/portfolio)
- New project: Adventurous Art

### Changed
- All h2 elements under other h2 elements have been switched to h3 for consistency
- Project title font size in sections have also been lowered for the same reason

### Removed
- WIP section has been removed since almost all projects have now been added

## [1.2.1] - 2019-09-25
### Added
- A new section, "Other Projects", that currently contains [Spotify Console](https://github.com/danielisgr8/Spotify-Console).
- Project descriptions now support GitHub repo links.

### Changed
- Reworked the projects list on the homepage
  - New sections can now be added much easier.

## [1.2.0] - 2019-09-24
### Changed
- The body of the homepage is now rendered through React.

## [1.1.1] - 2019-09-24
Palindrome version number!

### Changed
- The homepage is now build using Babel. This is an intermediate step towards using React in the homepage.
  - As a result, the built version of client-src/main.js, public/main.js, is ignored by git. It can be generated with the added "build" npm script.

## [1.1.0] - 2019-09-24
### Added
- The homepage now uses the Express static middleware to server the public/ directory.
  - Currently contains Spotify Song Rang,e Spotify Tracker, and Playlist Art, each with a gif and link to its demo.

## [1.0.0] - 2019-08-28
### Added
- General architecture of reverse proxy.

#### Applications
- [Spotify Song Range](https://github.com/danielisgr8/spotify-song-range)
- [Spotify Tracker](https://github.com/danielisgr8/Spotify-Tracker)
- [Playlist Art](https://github.com/danielisgr8/Playlist-Art)

