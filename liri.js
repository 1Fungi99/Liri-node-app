const axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');
require('dotenv').config();

var query = process.argv[2];
var term = process.argv.splice(3).join(' ');


// Spotify Query for track data
//---------------------------------------------------------------------------------------------------------------------------------------------------
var spotify = new Spotify({
    id: "47bd0b1d4ecf465c8c060c20baa598ea",
    secret: '8efadefae2224ffa8732f91a50dd3b84',
});


if (query == 'search_track') {
    spotify
        .search({
            type: 'track',
            query: term,
        }).then(function (res) {
            var answer = res.tracks.items[1];

            console.log(' '); console.log('--------------------------------------------------------'); console.log(' ');
            console.log('Track name:   ' + answer.name);
            console.log('Artist:       ' + answer.artists[0].name);
            console.log('Release date: ' + answer.album.release_date);
            console.log('Album:        ' + answer.album.name);
            console.log(' '); console.log('--------------------------------------------------------');

            end();

        }).catch(function (err) {
            console.log('Error: ' + err);
        });
}

if (query == 'search_artist') {
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
    //---------------------------------------------------------------------------------------------------------------------------------------------------
}

function end() {
    console.log('Thank you for using the Liri Node App!');
    console.log('--------------------------------------------------------'); console.log(' ');
}