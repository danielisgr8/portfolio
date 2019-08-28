cd ./spotify-song-range/server
npm start -- -r "https://danielschubert.dev/spotify-song-range/" -p 1001 &
cd ../../Spotify-Tracker
npm start -- -r "https://danielschubert.dev/spotify-tracker/callback/" -p 1002 &
cd ../Playlist-Art
npm start -- -r "https://danielschubert.dev/playlist-art/art/" -p 1003 &
cd ..
npm start
