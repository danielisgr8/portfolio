# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

