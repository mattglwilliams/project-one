var allGenreButtons = document.querySelectorAll('button[class^=btn]');
console.log("Found", allGenreButtons.length, "button which class starts with btn.");

var randomPage = Math.floor(Math.random() * 10)

var genreShuffledArr = function (movieIds) {
    movieIds.sort(() => Math.random() - 0.5);
}

for (var i = 0; i < allGenreButtons.length; i++) {
    allGenreButtons[i].addEventListener('click', async function () {
        var ids = []
        var btnValue = this.value
        var genreApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + btnValue;

        var data = await fetch(genreApiURL)
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                }
            })
        console.log(data.results);
        for (var i = 0; i < data.results.length; i++) {
            var movieId = data.results[i].id
            ids.push(movieId)
        }
        genreShuffledArr(ids);
        console.log(ids);
        getMovieResultOne(ids)
        getMovieResultTwo(ids)
        getMovieResultThree(ids)
        getMovieResultFour(ids)
        getMovieResultFive(ids)
    });
}

var firstTitle = document.querySelector(".movie-title-one")
var secondTitle = document.querySelector(".movie-title-two")
var thirdTitle = document.querySelector(".movie-title-three")
var forthTitle = document.querySelector(".movie-title-four")
var fifthTitle = document.querySelector(".movie-title-five")
var firstImage = document.querySelector(".image-one")
var secondImage = document.querySelector(".image-two")
var thirdImage = document.querySelector(".image-three")
var forthImage = document.querySelector(".image-four")
var fifthImage = document.querySelector(".image-five")
var firstDesc = document.querySelector(".desc-one")
var secondDesc = document.querySelector(".desc-two")
var thirdDesc = document.querySelector(".desc-three")
var forthDesc = document.querySelector(".desc-four")
var fifthDesc = document.querySelector(".desc-five")
var firstRating = document.querySelector(".first-rating")
var secondRating = document.querySelector(".second-rating")
var thirdRating = document.querySelector(".third-rating")
var forthRating = document.querySelector(".forth-rating")
var fifthRating = document.querySelector(".fifth-rating")
var firstStreaming = document.querySelector(".first-streaming-info")
var secondStreaming = document.querySelector(".second-streaming-info")
var thirdStreaming = document.querySelector(".third-streaming-info")
var forthStreaming = document.querySelector(".forth-streaming-info")
var fifthStreaming = document.querySelector(".fifth-streaming-info")

var getMovieResultOne = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[0] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "b47074264amshfad7f61fb6d89e0p10c33bjsn75adba8fcd32"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            firstTitle.textContent = data.originalTitle;
            firstImage.setAttribute("src", data.posterURLs.original);
            firstDesc.textContent = data.overview;
            firstRating.textContent = "iMDB Rating: " + data.imdbRating
        })
}

var getMovieResultTwo = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[1] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "b47074264amshfad7f61fb6d89e0p10c33bjsn75adba8fcd32"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            secondTitle.textContent = data.originalTitle;
            secondImage.setAttribute("src", data.posterURLs.original);
            secondDesc.textContent = data.overview;
            secondRating.textContent = "iMDB Rating: " + data.imdbRating
        })
}

var getMovieResultThree = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[2] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "b47074264amshfad7f61fb6d89e0p10c33bjsn75adba8fcd32"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            thirdTitle.textContent = data.originalTitle;
            thirdImage.setAttribute("src", data.posterURLs.original);
            thirdDesc.textContent = data.overview;
            thirdRating.textContent = "iMDB Rating: " + data.imdbRating
        })
}

var getMovieResultFour = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[3] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "b47074264amshfad7f61fb6d89e0p10c33bjsn75adba8fcd32"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            forthTitle.textContent = data.originalTitle;
            forthImage.setAttribute("src", data.posterURLs.original);
            forthDesc.textContent = data.overview;
            forthRating.textContent = "iMDB Rating: " + data.imdbRating
        })
}

var getMovieResultFive = function (movieIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[4] + "&output_language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "b47074264amshfad7f61fb6d89e0p10c33bjsn75adba8fcd32"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            fifthTitle.textContent = data.originalTitle;
            fifthImage.setAttribute("src", data.posterURLs.original);
            fifthDesc.textContent = data.overview;
            fifthRating.textContent = "iMDB Rating: " + data.imdbRating
        })
}