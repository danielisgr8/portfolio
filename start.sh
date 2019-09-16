cd ./spotify-song-range/server
pm2 start --name spotify-song-range npm -- start -- -r "https://danielschubert.dev/spotify-song-range/" -p 1001
cd ../../Spotify-Tracker
pm2 start --name spotify-tracker npm -- start -- -r "https://danielschubert.dev/spotify-tracker/callback/" -p 1002
cd ../Playlist-Art
pm2 start --name playlist-art npm -- start -- -r "https://danielschubert.dev/playlist-art/art/" -p 1003
cd ..
pm2 start --name proxy npm -- start
