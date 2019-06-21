// require installed packages
var axios = require("axios");
var Spotify = require('node-spotify-api');



var title = process.argv[3]
var operator = process.argv[2]

// run requests


    if(operator === "movie"){
        axios.get("http://www.omdbapi.com/?t="+ title +"&y=&plot=short&apikey=trilogy").then(
        function(response) {
            // console.log(response);
            console.log("The movie was released: " + response.data.Year);
            console.log("The movie's rating is: " + response.data.imdbRating);
        })
    };
    
    if(operator === "music"){
        var spotify = new Spotify({
            id:"4276b33108104780adc1e7b9cd3d1bd6",
            secret:"4904a18b733543d59d2c38278a02b608"
        });
            spotify.search({ type: 'track', query: title })
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            })
                
    }







// axios.get("http://www.omdbapi.com/?t="+ title +"&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     // console.log(response);
//     console.log("The movie was released: " + response.data.Year);
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   })