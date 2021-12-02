var actionBtn = document.querySelector(".action")
var adventureBtn = document.querySelector(".adventure")
var animationBtn = document.querySelector(".animation")
var comedyBtn = document.querySelector(".comedy")
var crimeBtn = document.querySelector(".crime")
var documentaryBtn = document.querySelector(".documentary")
var dramaBtn = document.querySelector(".drama")
var familyBtn = document.querySelector(".family")
var fantasyBtn = document.querySelector(".fantasy")
var historyBtn = document.querySelector(".history")
var horrorBtn = document.querySelector(".horror")
var musicBtn = document.querySelector(".music")
var mysteryBtn = document.querySelector(".mystery")
var romanceBtn = document.querySelector(".romance")
var scienceFictionBtn = document.querySelector(".science-fiction")
var TVMovieBtn = document.querySelector(".tv-movie")
var thrillerBtn = document.querySelector(".thriller")
var warBtn = document.querySelector(".war")
var westernBtn = document.querySelector(".western")

var actionValue = actionBtn.value
var adventureValue = adventureBtn.value
var animationValue = animationBtn.value
var comedyValue = comedyBtn.value
var crimeValue = crimeBtn.value
var documentaryValue = documentaryBtn.value
var dramaValue = dramaBtn.value
var familyValue = familyBtn.value
var fantasyValue = fantasyBtn.value
var historyValue = historyBtn.value
var horrorValue = horrorBtn.value
var musicValue = musicBtn.value
var mysteryValue = mysteryBtn.value
var romanceValue = romanceBtn.value
var scienceFictionValue = scienceFictionBtn.value
var TVMovieValue = TVMovieBtn.value
var thrillerValue = thrillerBtn.value
var warValue = warBtn.value
var westernValue = westernBtn.value

var randomPage = Math.floor(Math.random() * 10)

var fetchActionData = function () {

    var actionApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + actionValue;

    fetch(actionApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

actionBtn.addEventListener("click", fetchActionData)

var fetchAdventureData = function () {

    var adventureApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + adventureValue

    fetch(adventureApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

adventureBtn.addEventListener("click", fetchAdventureData)

var fetchAnimationData = function () {

    var animationApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + animationValue;

    fetch(animationApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

animationBtn.addEventListener("click", fetchAnimationData)

var fetchAnimationData = function () {

    var animationApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + animationValue;

    fetch(animationApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

animationBtn.addEventListener("click", fetchAnimationData)

var fetchComedyData = function () {

    var comedyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + comedyValue;

    fetch(comedyApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

comedyBtn.addEventListener("click", fetchComedyData)

var fetchCrimeData = function () {

    var crimeApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + crimeValue;

    fetch(crimeApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

crimeBtn.addEventListener("click", fetchCrimeData)

var fetchDocumentaryData = function () {

    var documentaryApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + documentaryValue;

    fetch(documentaryApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

documentaryBtn.addEventListener("click", fetchDocumentaryData)

var fetchDramaData = function () {

    var dramaApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + dramaValue;

    fetch(dramaApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

dramaBtn.addEventListener("click", fetchDramaData)

var fetchFamilyData = function () {

    var familyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + familyValue;

    fetch(familyApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

familyBtn.addEventListener("click", fetchFamilyData)

var fantasyFamilyData = function () {

    var fantasyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + fantasyValue;

    fetch(fantasyApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

fantasyBtn.addEventListener("click", fantasyFamilyData)

var historyData = function () {

    var historyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + historyValue;

    fetch(historyApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

historyBtn.addEventListener("click", historyData)

var horrorData = function () {

    var horrorApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + horrorValue;

    fetch(horrorApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

horrorBtn.addEventListener("click", horrorData)

var musicData = function () {

    var musicApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + musicValue;

    fetch(musicApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

musicBtn.addEventListener("click", musicData)

var mysteryData = function () {

    var mysteryApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + mysteryValue;

    fetch(mysteryApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

mysteryBtn.addEventListener("click", mysteryData)

var romanceData = function () {

    var romanceApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + romanceValue;

    fetch(romanceApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

romanceBtn.addEventListener("click", romanceData)

var scienceFictionData = function () {

    var scienceFictionApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + scienceFictionValue;

    fetch(scienceFictionApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

scienceFictionBtn.addEventListener("click", scienceFictionData)

var TVMovieData = function () {

    var TVMovieApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + TVMovieValue;

    fetch(TVMovieApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

TVMovieBtn.addEventListener("click", TVMovieData)

var thrillerData = function () {

    var thrillerApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + thrillerValue;

    fetch(thrillerApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

thrillerBtn.addEventListener("click", thrillerData)

var warData = function () {

    var warApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + warValue;

    fetch(warApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

warBtn.addEventListener("click", warData)

var westernData = function () {

    var westernApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + westernValue;

    fetch(westernApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

westernBtn.addEventListener("click", westernData)

fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + 580489 + "&output_language=en", {
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
})