# Liri-node-app
[Deployed](https://1fungi99.github.io/Liri-node-app/)

This node based application is used to demonstrate the power of Node.js and NPMs. Simple tasks are used to collect useful data on movies, songs, artists, concert dates, and concert venues. This application is similar to Siri, why the app is called Liri. This is not a full Speech Translation engine, just a small data scraper for specific data.

# Technologies Used:
- Javascript
- Node.js
- Terminal/Command Prompt
- [Node-spotify-API](https://www.npmjs.com/package/node-spotify-api)
- [Axios](https://www.npmjs.com/package/axios)
- [OMDB API](http://www.omdbapi.com/)
- [Bands In Town API](https://artists.bandsintown.com/support/bandsintown-api)
- [DotEnv](https://www.npmjs.com/package/dotenv)

# Functionality
###   movie-this /movie name/
Looks up movies and gives relevent data.
`node .\liri.js movie-this clash of the titans`
###   concert-this /artist/band name/
Looks up upcoming events for a given artist.
`node .\liri.js concert-this Beartooth`
###   spotify-this-song /track name/
Gives data on a track.
`node .\liri.js spotify-this-song supermarket flowers`
###   spotify-this-artist /artist name
gives data on a given artist's name.
`node .\liri.js spotify-this-artist ed sheeran`
###   do-what-it-says
try this one out...


Video of App working: [Link](https://youtu.be/qspvFAM0sGY)
