const axios = require('axios');
var moment = require('moment');
moment().format();
var Spotify = require('node-spotify-api');
require('dotenv').config();

var query = process.argv[2];
var term = process.argv.splice(3).join(' ');

var spotify = new Spotify({
    id: "47bd0b1d4ecf465c8c060c20baa598ea",
    secret: '8efadefae2224ffa8732f91a50dd3b84',
});
//---------------------------------------------------------------------------------------------------------------------------------------------------
//OMDB API
//---------------------------------------------------------------------------------------------------------------------------------------------------
if (query == 'movie-this' && term) {
    movie();
}
else {
    term = 'Mr. Nobody'
    console.log('Whoops! Looks like you did not put in a movie...');
    console.log('Here is something you can watch! It is "Mr. Nobody" it is on Netflix!');
    movie();
}
//Bands In Town
//---------------------------------------------------------------------------------------------------------------------------------------------------
if (query == 'concert-this') {
    concert();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
// Spotify Query for track and artist data
//---------------------------------------------------------------------------------------------------------------------------------------------------
if (query == 'spotify-this-song') {
    song();
}

if (query == 'spotify-this-artist') {
    artist();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
//do-what-it-says
//---------------------------------------------------------------------------------------------------------------------------------------------------

if (query == 'do-what-it-says') {
    term = 'I Want it That Way'
    song()
}
//---------------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------------------




function concert() {
    axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp")
        .then(function (res) {
            console.log('Upcoming concerts for ' + term + '!\nHere\'s your list!');
            for (var i = 0; i < res.data.length; i++) {
                var data = res.data[i].datetime;
                var newData = Array.from(data).splice(0, 10).join("");
                var time = moment(newData).format('dddd, MMMM Do YYYY')
                var location = res.data[i].venue;

                console.log('--------------------------------------------------------');
                console.log('Venue: ' + location.name + ', ' + location.city + ', ' + location.region + ', ' + location.country);
                console.log('Date: ' + time)
            }
            console.log('--------------------------------------------------------');

            end();

        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function artist() {
    spotify
        .search({
            type: 'artist',
            query: term,
        }).then(function (res) {
            var answer = res.artists.items[0];

            console.log(' '); console.log('--------------------------------------------------------'); console.log(' ');
            console.log('Artists: ' + answer.name);
            console.log('Genres:  ' + answer.genres[1] + ' and ' + answer.genres[2])
            console.log(answer.followers.total + ' followers');
            console.log('Artist\'s link: ' + answer.href);
            console.log(' '); console.log('--------------------------------------------------------');

            end();

        }).catch(function (err) {
            console.log('Error: ' + err);
        });
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function song() {
    spotify
        .search({
            type: 'track',
            query: term,
        }).then(function (res) {
            var answer = res.tracks.items[1];

            console.log(' '); console.log('--------------------------------------------------------'); console.log(' ');
            console.log('Track name:    ' + answer.name);
            console.log('Artist:        ' + answer.artists[0].name);
            console.log('Album:         ' + answer.album.name);
            console.log('Release date:  ' + answer.album.release_date);
            console.log("Prieview Link: " + answer.preview_url);
            console.log(' '); console.log('--------------------------------------------------------');

            end();

        }).catch(function (err) {
            console.log('Error: ' + err);
        });
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
function movie() {
    axios.get("http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy")
        .then(function (res) {
            var data = res.data
            console.log('Results: ');
            console.log('--------------------------------------------------------');
            console.log('Title:                  ' + data.Title);
            console.log('Release Date:           ' + data.Year); //moment.js this shiiiiii
            console.log('IMDB Rating:            ' + data.Ratings[0].Value);
            console.log('Rotten Tomatoes Rating: ' + data.Ratings[1].Value);
            console.log('Produced in:            ' + data.Country);
            console.log('Language:               ' + data.Language);
            console.log('Plot:                   ' + data.Plot);
            console.log('Actors:                 ' + data.Actors);
            console.log('--------------------------------------------------------');
            end()
        });
}
function end() {
    console.log('    ┊┊┊┊⋆ ✧　 　 · 　 ✧　✵');
    console.log('┊┊┊☆ *　　 * ⋆');
    console.log('┊┊★ * Thank you for using the Liri Node App!');
    console.log('┊┊* . *　✦');
    console.log('┊☆ ° ✧　 　 ·');
    console.log('★*');
};