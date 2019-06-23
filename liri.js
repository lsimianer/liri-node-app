// require installed packages
require('dotenv').config()

var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');



var operator = process.argv[2]
var title = process.argv[3]
var artist = process.argv[4]

// run requests

// for (var i = 4; i < process.argv.length; i++) {
//     if (i > 4 && i < process.argv.length) {
//         userQuery += "+" + process.argv[i]; 
//     }
//     else {
//         userQuery += process.argv[i];
//     }
// }

// switch (operator) {
//     case "concert-Artist":
//         concertThis();
//         break;
//     case "spotify-Song-Title":
//         spotifyThis();
//         break;
//     case "movie-Title":
//         movies();
//         break;
//     case "do-it-now":
//         doThis();
//         break;
//     default:
//         logThis("Please enter a valid search term, such as {concert-Artist},");
//         logThis("{spotify-Song-Title}, {movie-Title}, or {do-it-now}");
//         break;

//         function movies() {

//             if (!userQuery) {
//                 userQuery = "Mr. Nobody";
//                 logThis("If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>");
//                 logThis("It's on Netflix!");
//             }
            
//             axios.get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=" + keys.movies.id)
//             .then(function(response) {
        
//                 logThis("Title: " + response.data.Title);
//                 logThis("Year Released: " + response.data.Year);
//                 logThis("IMDB rating: " + response.data.imdbRating);
//                 logThis("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
//                 logThis("Plot: " + response.data.Plot);
//                 logThis("Cast: " + response.data.Actors);
//             });
//         };
// }

// omdb movie query fx
    if(operator === "movie"){
        axios.get("http://www.omdbapi.com/?t="+ title +"&y=&plot=short&apikey=trilogy").then(
        function(response) {
            // console.log(response);
            console.log("The movie was released: " + response.data.Year);
            console.log("The movie's rating is: " + response.data.imdbRating);
            logThis("Title: " + response.data.Title +" " + '\n');
            logThis("Year Released: " + response.data.Year +" " + '\n');
            logThis("IMDB rating: " + response.data.imdbRating +" " + '\n');
            logThis("Plot: " + response.data.Plot +" " + '\n');
            logThis("Cast: " + response.data.Actors +" " + '\n');
        })
    };
    //spotify query fx
    if(operator === "music"){
        var spotify = new Spotify({
            id:"4276b33108104780adc1e7b9cd3d1bd6",
            secret:"4904a18b733543d59d2c38278a02b608"
        });
        spotify.search({type: "track", query: title}, function(err, data) {
            if (err) {
                logThis(err);
            }
            var userSong = data.tracks.items;
            console.log("Artist: " + userSong[0].artists[0].name)
            logThis("Artist: " + userSong[0].artists[0].name+" " + '\n');
            logThis("Song Name: " + userSong[0].name+" " + '\n');
            logThis("Preview Link: " + userSong[0].preview_url+" " + '\n');
            logThis("Album: " + userSong[0].album.name+" " + '\n');
        });
                
    };

    if(operator === "concert"){
        axios.get("https://rest.bandsintown.com/artists/" + title + "/events?app_id=" + keys.bands.id)
    .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {

            logThis("Venue Name: "+ response.data[i].venue.name);
            logThis("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            logThis("Date of the Event: " + moment(response.data[i].datetime).format("L"));
        }
    });

    }







    function logThis (logQuery) {

        console.log(logQuery);
    
        fs.appendFile("SearchAndResultLog.txt", logQuery, function(err) {
            if (err) {
                return logThis("Error: " + err);
            }
        });
    };