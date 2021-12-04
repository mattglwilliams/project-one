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

var actionMovieIds = [];
var adventureMovieIds = [];
var animationMovieIds = [];
var comedyMovieIds = [];
var crimeMovieIds = [];
var documentaryMovieIds = [];
var dramaMovieIds = [];
var familyMovieIds = [];
var fantasyMovieIds = [];
var historyMovieIds = [];
var horrorMovieIds = [];
var musicMovieIds = [];
var mysteryMovieIds = [];
var romanceMovieIds = [];
var scienceFictionMovieIds = [];
var TVMovieMovieIds = [];
var thrillerMovieIds = [];
var warMovieIds = [];
var westernMovieIds = [];
var westernMovieIds = [];

var actionShuffledArr = function (actionMovieIds) {
    actionMovieIds.sort(() => Math.random() - 0.5);
}

var actionData = function () {

    var actionApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + actionValue;

    fetch(actionApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        actionMovieIds.push(movieId)
                    }
                    actionShuffledArr(actionMovieIds);
                })
            }
        }) 
        console.log(actionMovieIds)
}

actionBtn.addEventListener("click", actionData)

var adventureShuffledArr = function (adventureMovieIds) {
    adventureMovieIds.sort(() => Math.random() - 0.5);
}

var adventureData = function () {

    var adventureApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + adventureValue;

    fetch(adventureApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        adventureMovieIds.push(movieId)
                    }
                    adventureShuffledArr(adventureMovieIds);
                })
            }
        }) 
        console.log(adventureMovieIds)
}

adventureBtn.addEventListener("click", adventureData)

var animationShuffledArr = function (animationMovieIds) {
    animationMovieIds.sort(() => Math.random() - 0.5);
}

var animationData = function () {

    var animationApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + animationValue;

    fetch(animationApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        animationMovieIds.push(movieId)
                    }
                    animationShuffledArr(animationMovieIds);
                })
            }
        }) 
        console.log(animationMovieIds)
}

animationBtn.addEventListener("click", animationData)

var comedyShuffledArr = function (comedyMovieIds) {
    comedyMovieIds.sort(() => Math.random() - 0.5);
}

var comedyData = function () {

    var comedyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + comedyValue;

    fetch(comedyApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        comedyMovieIds.push(movieId)
                    }
                    comedyShuffledArr(comedyMovieIds);
                })
            }
        }) 
        console.log(comedyMovieIds)
}

comedyBtn.addEventListener("click", comedyData)

var crimeShuffledArr = function (crimeMovieIds) {
    crimeMovieIds.sort(() => Math.random() - 0.5);
}

var crimeData = function () {

    var crimeApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + crimeValue;

    fetch(crimeApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        crimeMovieIds.push(movieId)
                    }
                    crimeShuffledArr(crimeMovieIds);
                })
            }
        }) 
        console.log(crimeMovieIds)
}

crimeBtn.addEventListener("click", crimeData)

var documentaryShuffledArr = function (documentaryMovieIds) {
    documentaryMovieIds.sort(() => Math.random() - 0.5);
}

var documentaryData = function () {

    var documentaryApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + documentaryValue;

    fetch(documentaryApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        documentaryMovieIds.push(movieId)
                    }
                    documentaryShuffledArr(documentaryMovieIds);
                })
            }
        }) 
        console.log(documentaryMovieIds)
}

documentaryBtn.addEventListener("click", documentaryData)

var dramaShuffledArr = function (dramaMovieIds) {
    dramaMovieIds.sort(() => Math.random() - 0.5);
}

var dramaData = function () {

    var dramaApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + dramaValue;

    fetch(dramaApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        dramaMovieIds.push(movieId)
                    }
                    dramaShuffledArr(dramaMovieIds);
                })
            }
        }) 
        console.log(dramaMovieIds)
}

dramaBtn.addEventListener("click", dramaData)

var familyShuffledArr = function (familyMovieIds) {
    familyMovieIds.sort(() => Math.random() - 0.5);
}

var familyData = function () {

    var familyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + familyValue;

    fetch(familyApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        familyMovieIds.push(movieId)
                    }
                    familyShuffledArr(familyMovieIds);
                })
            }
        }) 
        console.log(familyMovieIds)
}

familyBtn.addEventListener("click", familyData)

var fantasyShuffledArr = function (fantasyMovieIds) {
    fantasyMovieIds.sort(() => Math.random() - 0.5);
}

var fantasyData = function () {

    var fantasyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + fantasyValue;

    fetch(fantasyApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        fantasyMovieIds.push(movieId)
                    }
                    fantasyShuffledArr(fantasyMovieIds);
                })
            }
        }) 
        console.log(fantasyMovieIds)
}

fantasyBtn.addEventListener("click", fantasyData)

var historyShuffledArr = function (historyMovieIds) {
    historyMovieIds.sort(() => Math.random() - 0.5);
}

var historyData = function () {

    var historyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + historyValue;

    fetch(historyApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        historyMovieIds.push(movieId)
                    }
                    historyShuffledArr(historyMovieIds);
                })
            }
        }) 
        console.log(historyMovieIds)
}

historyBtn.addEventListener("click", historyData)

var horrorShuffledArr = function (horrorMovieIds) {
    horrorMovieIds.sort(() => Math.random() - 0.5);
}

var horrorData = function () {

    var horrorApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + horrorValue;

    fetch(horrorApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        horrorMovieIds.push(movieId)
                    }
                    horrorShuffledArr(horrorMovieIds);
                })
            }
        }) 
        console.log(horrorMovieIds)
}

horrorBtn.addEventListener("click", horrorData)

var musicShuffledArr = function (musicMovieIds) {
    musicMovieIds.sort(() => Math.random() - 0.5);
}

var musicData = function () {

    var musicApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + musicValue;

    fetch(musicApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        musicMovieIds.push(movieId)
                    }
                    musicShuffledArr(musicMovieIds);
                })
            }
        }) 
        console.log(musicMovieIds)
}

musicBtn.addEventListener("click", musicData)

var mysteryShuffledArr = function (mysteryMovieIds) {
    mysteryMovieIds.sort(() => Math.random() - 0.5);
}

var mysteryData = function () {

    var mysteryApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + mysteryValue;

    fetch(mysteryApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        mysteryMovieIds.push(movieId)
                    }
                    mysteryShuffledArr(mysteryMovieIds);
                })
            }
        }) 
        console.log(mysteryMovieIds)
}

mysteryBtn.addEventListener("click", mysteryData)

var romanceShuffledArr = function (romanceMovieIds) {
    romanceMovieIds.sort(() => Math.random() - 0.5);
}

var romanceData = function () {

    var romanceApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + romanceValue;

    fetch(romanceApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        romanceMovieIds.push(movieId)
                    }
                    romanceShuffledArr(romanceMovieIds);
                })
            }
        }) 
        console.log(romanceMovieIds)
}

romanceBtn.addEventListener("click", romanceData)

var scienceFictionShuffledArr = function (scienceFictionMovieIds) {
    scienceFictionMovieIds.sort(() => Math.random() - 0.5);
}

var scienceFictionData = function () {

    var scienceFictionApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + scienceFictionValue;

    fetch(scienceFictionApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        scienceFictionMovieIds.push(movieId)
                    }
                    scienceFictionShuffledArr(scienceFictionMovieIds);
                })
            }
        }) 
        console.log(scienceFictionMovieIds)
}

scienceFictionBtn.addEventListener("click", scienceFictionData)

var TVMovieShuffledArr = function (TVMovieMovieIds) {
    TVMovieMovieIds.sort(() => Math.random() - 0.5);
}

var TVMovieData = function () {

    var TVMovieApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + TVMovieValue;

    fetch(TVMovieApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        TVMovieMovieIds.push(movieId)
                    }
                    TVMovieShuffledArr(TVMovieMovieIds);
                })
            }
        }) 
        console.log(TVMovieMovieIds)
}

TVMovieBtn.addEventListener("click", TVMovieData)

var thrillerShuffledArr = function (thrillerMovieIds) {
    thrillerMovieIds.sort(() => Math.random() - 0.5);
}

var thrillerData = function () {

    var thrillerApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + thrillerValue;

    fetch(thrillerApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        thrillerMovieIds.push(movieId)
                    }
                    thrillerShuffledArr(thrillerMovieIds);
                })
            }
        }) 
        console.log(thrillerMovieIds)
}

thrillerBtn.addEventListener("click", thrillerData)

var warShuffledArr = function (warMovieIds) {
    warMovieIds.sort(() => Math.random() - 0.5);
}

var warData = function () {

    var warApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + warValue;

    fetch(warApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        warMovieIds.push(movieId)
                    }
                    warShuffledArr(warMovieIds);
                })
            }
        }) 
        console.log(warMovieIds)
}

warBtn.addEventListener("click", warData)

var westernShuffledArr = function (westernMovieIds) {
    westernMovieIds.sort(() => Math.random() - 0.5);
}

var westernData = function () {

    var westernApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + westernValue;

    fetch(westernApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        westernMovieIds.push(movieId)
                    }
                    westernShuffledArr(westernMovieIds);
                })
            }
        }) 
        console.log(westernMovieIds)
}

westernBtn.addEventListener("click", westernData)

// fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + 838189 + "&output_language=en", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
// 		"x-rapidapi-key": "fd9a215c8fmsh1b12b778dc43cfdp16b61cjsn3480cfe25268"
// 	}
// })
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
// })