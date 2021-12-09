var allGenreButtons = document.querySelectorAll('button[class^=btn]');
console.log("Found", allGenreButtons.length, "button which class starts with btn.");

var randomPage = Math.floor(Math.random() * 10)

var genreShuffledArr = function (tvIds) {
    tvIds.sort(() => Math.random() - 0.5);
}

for (var i = 0; i < allGenreButtons.length; i++) {
    allGenreButtons[i].addEventListener('click', async function () {
        var ids = []
        var btnValue = this.value
        var genreApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + btnValue;

        var data = await fetch(genreApiURL)
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                }
            })
        console.log(data.results);
        for (var i = 0; i < data.results.length; i++) {
            var tvId = data.results[i].id
            ids.push(tvId)
        }
        genreShuffledArr(ids);
        console.log(ids);
        getTvResultOne(ids)
        getTvResultTwo(ids)
        getTvResultThree(ids)
        getTvResultFour(ids)
        getTvResultFive(ids)
    });
}

var firstCard = document.querySelector(".first-card")
var secondCard = document.querySelector(".second-card")
var thirdCard = document.querySelector(".third-card")
var forthCard = document.querySelector(".forth-card")
var fifthCard = document.querySelector(".fifth-card")
var firstImage = document.querySelector(".image-one")
var secondImage = document.querySelector(".image-two")
var thirdImage = document.querySelector(".image-three")
var forthImage = document.querySelector(".image-four")
var fifthImage = document.querySelector(".image-five")
var firstTitle = document.querySelector(".first-card-title")
var secondTitle = document.querySelector(".second-card-title")
var thirdTitle = document.querySelector(".third-card-title")
var forthTitle = document.querySelector(".forth-card-title")
var fifthTitle = document.querySelector(".fifth-card-title")
var firstDesc = document.querySelector(".first-card-desc")
var secondDesc = document.querySelector(".second-card-desc")
var thirdDesc = document.querySelector(".third-card-desc")
var forthDesc = document.querySelector(".forth-card-desc")
var fifthDesc = document.querySelector(".fifth-card-desc")
var firstRating = document.querySelector(".first-card-rating")
var secondRating = document.querySelector(".second-card-rating")
var thirdRating = document.querySelector(".third-card-rating")
var forthRating = document.querySelector(".forth-card-rating")
var fifthRating = document.querySelector(".fifth-card-rating")
var firstImdbRating = document.querySelector(".first-rating")
var secondImdbRating = document.querySelector(".second-rating")
var thirdImdbRating = document.querySelector(".third-rating")
var forthImdbRating = document.querySelector(".forth-rating")
var fifthImdbRating = document.querySelector(".fifth-rating")
var firstStreaming = document.querySelector(".first-streaming-info")
var secondStreaming = document.querySelector(".second-streaming-info")
var thirdStreaming = document.querySelector(".third-streaming-info")
var forthStreaming = document.querySelector(".forth-streaming-info")
var fifthStreaming = document.querySelector(".fifth-streaming-info")

var getTvResultOne = function (tvIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + tvIds[0] + "&output_language=en", {
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
            firstCard.setAttribute("class", "card")
            firstImage.setAttribute("class", "card-img-top");
            firstImage.setAttribute("src", data.posterURLs.original);
            firstTitle.setAttribute("class", "card-title")
            firstTitle.textContent = data.originalTitle;
            firstDesc.setAttribute("class", "card-text")
            firstDesc.textContent = data.overview;
            firstRating.setAttribute("class", "card-text")
            firstRating.textContent = "iMDB Rating: "
            firstImdbRating.textContent = data.imdbRating
            if (data.imdbRating < 35) {
                firstImdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                firstImdbRating.setAttribute("class", "ok-rating")
            } else {
                firstImdbRating.setAttribute("class", "good-rating")
            }
            firstStreaming.setAttribute("class", "card-text")
            if (data.streamingInfo.netflix) {
                firstStreaming.setAttribute("href", streamingInfo.netflix[1].link)
                firstStreaming.textContent = "Stream it here!"
            } else {
                firstStreaming.textContent = "Not on streaming services right now"
            }
        })
}

var getTvResultTwo = function (tvIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + tvIds[1] + "&output_language=en", {
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
            secondCard.setAttribute("class", "card")
            secondImage.setAttribute("class", "card-img-top");
            secondImage.setAttribute("src", data.posterURLs.original);
            secondTitle.setAttribute("class", "card-title")
            secondTitle.textContent = data.originalTitle;
            secondDesc.setAttribute("class", "card-text")
            secondDesc.textContent = data.overview;
            secondRating.setAttribute("class", "card-text")
            secondRating.textContent = "iMDB Rating: "
            secondImdbRating.textContent = data.imdbRating
            if (data.imdbRating < 35) {
                secondImdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                secondImdbRating.setAttribute("class", "ok-rating")
            } else {
                secondImdbRating.setAttribute("class", "good-rating")
            }
            secondStreaming.setAttribute("class", "card-text")
            if (data.streamingInfo.netflix) {
                secondStreaming.setAttribute("href", streamingInfo.netflix[1].link)
                secondStreaming.textContent = "Stream it here!"
            } else if (data.streamingInfo.disney) {
                    secondStreaming.setAttribute("href", streamingInfo.disney[1].link)
                    secondStreaming.textContent = "Stream it here!"
            } else if (data.streamingInfo.prime) {
                secondStreaming.setAttribute("href", streamingInfo.prime[1].link)
                secondStreaming.textContent = "Stream it here!"
            } else {
                secondStreaming.textContent = "Not on streaming services right now"
            }
        })
}

var getTvResultThree = function (tvIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + tvIds[2] + "&output_language=en", {
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
            thirdCard.setAttribute("class", "card")
            thirdImage.setAttribute("class", "card-img-top");
            thirdImage.setAttribute("src", data.posterURLs.original);
            thirdTitle.setAttribute("class", "card-title")
            thirdTitle.textContent = data.originalTitle;
            thirdDesc.setAttribute("class", "card-text")
            thirdDesc.textContent = data.overview;
            thirdRating.setAttribute("class", "card-text")
            thirdRating.textContent = "iMDB Rating: "
            thirdImdbRating.textContent = data.imdbRating
            if (data.imdbRating < 35) {
                thirdImdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                thirdImdbRating.setAttribute("class", "ok-rating")
            } else {
                thirdImdbRating.setAttribute("class", "good-rating")
            }
            thirdStreaming.setAttribute("class", "card-text")
            if (data.streamingInfo.netflix) {
                thirdStreaming.setAttribute("href", streamingInfo.netflix[1].link)
                thirdStreaming.textContent = "Stream it here!"
            } else {
                thirdStreaming.textContent = "Not on streaming services right now"
            }
        })
}

var getTvResultFour = function (tvIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + tvIds[3] + "&output_language=en", {
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
            forthCard.setAttribute("class", "card")
            forthImage.setAttribute("class", "card-img-top");
            forthImage.setAttribute("src", data.posterURLs.original);
            forthTitle.setAttribute("class", "card-title")
            forthTitle.textContent = data.originalTitle;
            forthDesc.setAttribute("class", "card-text")
            forthDesc.textContent = data.overview;
            forthRating.setAttribute("class", "card-text")
            forthRating.textContent = "iMDB Rating: "
            forthImdbRating.textContent = data.imdbRating
            if (data.imdbRating < 35) {
                forthImdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                forthImdbRating.setAttribute("class", "ok-rating")
            } else {
                forthImdbRating.setAttribute("class", "good-rating")
            }
            forthStreaming.setAttribute("class", "card-text")
            if (data.streamingInfo.netflix) {
                forthStreaming.setAttribute("href", streamingInfo.netflix[1].link)
                forthStreaming.textContent = "Stream it here!"
            } else {
                forthStreaming.textContent = "Not on streaming services right now"
            }
        })
}

var getTvResultFive = function (tvIds) {
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + tvIds[4] + "&output_language=en", {
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
            fifthCard.setAttribute("class", "card")
            fifthImage.setAttribute("class", "card-img-top");
            fifthImage.setAttribute("src", data.posterURLs.original);
            fifthTitle.setAttribute("class", "card-title")
            fifthTitle.textContent = data.originalTitle;
            fifthDesc.setAttribute("class", "card-text")
            fifthDesc.textContent = data.overview;
            fifthRating.setAttribute("class", "card-text")
            fifthRating.textContent = "iMDB Rating: "
            fifthImdbRating.textContent = data.imdbRating
            if (data.imdbRating < 35) {
                fifthImdbRating.setAttribute("class", "bad-rating")
            } else if (data.imdbRating < 60) {
                fifthImdbRating.setAttribute("class", "ok-rating")
            } else {
                fifthImdbRating.setAttribute("class", "good-rating")
            }
            fifthStreaming.setAttribute("class", "card-text")
            if (data.streamingInfo.netflix) {
                fifthStreaming.setAttribute("href", streamingInfo.netflix[1].link)
                fifthStreaming.textContent = "Stream it here!"
            } else {
                fifthStreaming.textContent = "Not on streaming services right now"
            }
        })
}