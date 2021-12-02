var fetchGenreData = function () {
    var currentApiURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=2fad5e038a5d373957de8c81a2825905&language=en-US";

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
    var currentApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + actionValue + "&with_watch_monetization_types=flatrate";

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


// Need event listeners on the movie and book buttons to trigger the correct functions above.
// Need to window.replace with these to render the next page

// Need a second set of event listeners if the user selects movie/tv shows that allows them to 
// select either movies or tv shows.