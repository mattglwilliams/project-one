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
        getMovieResults(ids)
    });
  }
  

var getMovieResults = function (movieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + movieIds[i] + "&output_language=en", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
                "x-rapidapi-key": "fd9a215c8fmsh1b12b778dc43cfdp16b61cjsn3480cfe25268"
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                renderMovieResults(data)
            })
    }
}

var movieTitle = document.querySelector(".movie-title")

var renderMovieResults = function (data) {
    for (var i = 0; i < data.length; i++) {
        var movieTitleOne = data[0].originalTitle;
        movieTitle.textContent = movieTitleOne
    }
}





// var movieImage = data.posterPath
// var movieTitle = data.originalTitle
// var movieDescription = data.overview
// var movieAge = data.age
// var movieRating = data.imdbRating
// var mainContainer = document.querySelector('container')
// var cardContainer = document.createElement(div)
// cardContainer.setAttribute("class", "md:flex")
// mainContainer.appendChild(cardContainer)
// var individualCardContainer = document.createElement(div)
// individualCardContainer.setAttribute("class", "lg:flex lg:items-center")
// cardContainer.appendChild(individualCardContainer)
// var imageContainer = document.createElement(div)
// imageContainer.setAttribute("class", "lg:flex-shrink-0")
// individualCardContainer.appendChild(imageContainer)
// var individualMovieImage = document.createElement(img)
// individualMovieImage.setAttribute("class", "rounded-lg lg:w-64", "src", movieImage)
// imageContainer.appendChild(individualMovieImage)