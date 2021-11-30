var fetchMovieData = function () {
    var currentApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=100&with_genres=comedy&genres=action&with_watch_monetization_types=flatrate";

    fetch(currentApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

fetchMovieData()

var fetchTVData = function () {
    var currentApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=500&with_genres=comedy&with_watch_monetization_types=flatrate";

    fetch(currentApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

fetchTVData();