// var fetchMovieData = function () {
//     var currentApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&network_name=netflix&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=comedy&genres=action&with_watch_monetization_types=flatrate&with_original_language=en";

//     fetch(currentApiURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
// }

// fetchMovieData()

var fetchTVData = function () {
    var currentApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=netflix&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";

    fetch(currentApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

fetchTVData();

// var fetchNetwork = function () {
//     var currentApiURL = "https://api.themoviedb.org/3/network/49?api_key=2fad5e038a5d373957de8c81a2825905";

//     fetch(currentApiURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
// }

// fetchNetwork();