var fetchGenreData = function () {
    var currentApiURL = "https://api.themoviedb.org/3/genre/tv/list?api_key=2fad5e038a5d373957de8c81a2825905&language=en-US";

    fetch(currentApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

fetchGenreData();

var fetchTVData = function () {
    var currentApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";

    fetch(currentApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

fetchTVData();

// Function to fetch the genre data from TMDb
var fetchGenreList = function () {

}

// Function to render the collected genre data on the page so the user can select
// the genres they want.
var renderGenreList = function () {
// When the user selects genres, we need to save them in local storage so we can fetch them in
// the media.js file and render the movies/tv shows and their info.
}

// Function to fetch the genre data
var fetchBookData = function () {

}

// Function to render the book categories.
var renderGenreList = function () {
// When the user selects categories, we need to save them in local storage so we can fetch them
// in the book.js file and render the books and their info.
}


var fetchMovieInfo = function () {

}

var renderMovieInfo = function () {

}