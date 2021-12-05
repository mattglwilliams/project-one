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

var actionShuffledArr = function (actionMovieIds) {
    actionMovieIds.sort(() => Math.random() - 0.5);
}

var actionData = async function () {
    var ids = []
    var actionApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + actionValue;

    var data = await fetch(actionApiURL)
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
    actionShuffledArr(ids);
    console.log(ids);
    renderActionResults(ids)
}

actionBtn.addEventListener("click", actionData)

var renderActionResults = function (actionMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + actionMovieIds[i] + "&output_language=en", {
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
    }
}

var adventureShuffledArr = function (adventureMovieIds) {
    adventureMovieIds.sort(() => Math.random() - 0.5);
}

var adventureData = async function () {
    var ids = []
    var adventureApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + adventureValue;

    var data = await fetch(adventureApiURL)
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
    adventureShuffledArr(ids);
    console.log(ids);
    renderAdventureResults(ids)
}

adventureBtn.addEventListener("click", adventureData)

var renderAdventureResults = function (adventureMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + adventureMovieIds[i] + "&output_language=en", {
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
    }
}

var animationShuffledArr = function (animationMovieIds) {
    animationMovieIds.sort(() => Math.random() - 0.5);
}

var animationData = async function () {
    var ids = []
    var animationApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + animationValue;

    var data = await fetch(animationApiURL)
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
    animationShuffledArr(ids);
    console.log(ids);
    renderAnimationResults(ids)
}

animationBtn.addEventListener("click", animationData)

var renderAnimationResults = function (animationMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + animationMovieIds[i] + "&output_language=en", {
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
    }
}

var comedyShuffledArr = function (comedyMovieIds) {
    comedyMovieIds.sort(() => Math.random() - 0.5);
}

var comedyData = async function () {
    var ids = []
    var comedyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + comedyValue;

    var data = await fetch(comedyApiURL)
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
    comedyShuffledArr(ids);
    console.log(ids);
    renderComedyResults(ids)
}

comedyBtn.addEventListener("click", comedyData)

var renderComedyResults = function (comedyMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + comedyMovieIds[i] + "&output_language=en", {
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
    }
}

var crimeShuffledArr = function (crimeMovieIds) {
    crimeMovieIds.sort(() => Math.random() - 0.5);
}

var crimeData = async function () {
    var ids = []
    var crimeApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + crimeValue;

    var data = await fetch(crimeApiURL)
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
    crimeShuffledArr(ids);
    console.log(ids);
    renderCrimeResults(ids)
}

crimeBtn.addEventListener("click", crimeData)

var renderCrimeResults = function (crimeMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + crimeMovieIds[i] + "&output_language=en", {
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
    }
}

var documentaryShuffledArr = function (documentaryMovieIds) {
    documentaryMovieIds.sort(() => Math.random() - 0.5);
}

var documentaryData = async function () {
    var ids = []
    var documentaryApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + documentaryValue;

    var data = await fetch(documentaryApiURL)
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
    documentaryShuffledArr(ids);
    console.log(ids);
    renderDocumentaryResults(ids)
}

documentaryBtn.addEventListener("click", documentaryData)

var renderDocumentaryResults = function (documentaryMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + documentaryMovieIds[i] + "&output_language=en", {
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
    }
}

var dramaShuffledArr = function (dramaMovieIds) {
    dramaMovieIds.sort(() => Math.random() - 0.5);
}

var dramaData = async function () {
    var ids = []
    var dramaApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + dramaValue;

    var data = await fetch(dramaApiURL)
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
    dramaShuffledArr(ids);
    console.log(ids);
    renderDramaResults(ids)
}

dramaBtn.addEventListener("click", dramaData)

var renderDramaResults = function (dramaMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + dramaMovieIds[i] + "&output_language=en", {
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
    }
}

var familyShuffledArr = function (familyMovieIds) {
    familyMovieIds.sort(() => Math.random() - 0.5);
}

var familyData = async function () {
    var ids = []
    var familyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + familyValue;

    var data = await fetch(familyApiURL)
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
    familyShuffledArr(ids);
    console.log(ids);
    renderFamilyResults(ids)
}

familyBtn.addEventListener("click", familyData)

var renderFamilyResults = function (familyMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + familyMovieIds[i] + "&output_language=en", {
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
    }
}

var fantasyShuffledArr = function (fantasyMovieIds) {
    fantasyMovieIds.sort(() => Math.random() - 0.5);
}

var fantasyData = async function () {
    var ids = []
    var fantasyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + fantasyValue;

    var data = await fetch(fantasyApiURL)
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
    fantasyShuffledArr(ids);
    console.log(ids);
    renderFantasyResults(ids)
}

fantasyBtn.addEventListener("click", fantasyData)

var renderFantasyResults = function (fantasyMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + fantasyMovieIds[i] + "&output_language=en", {
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
    }
}

var historyShuffledArr = function (historyMovieIds) {
    historyMovieIds.sort(() => Math.random() - 0.5);
}

var historyData = async function () {
    var ids = []
    var historyApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + historyValue;

    var data = await fetch(historyApiURL)
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
    historyShuffledArr(ids);
    console.log(ids);
    renderHistoryResults(ids)
}

historyBtn.addEventListener("click", historyData)

var renderHistoryResults = function (historyMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + historyMovieIds[i] + "&output_language=en", {
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
    }
}

var horrorShuffledArr = function (horrorMovieIds) {
    horrorMovieIds.sort(() => Math.random() - 0.5);
}

var horrorData = async function () {
    var ids = []
    var horrorApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + horrorValue;

    var data = await fetch(horrorApiURL)
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
    horrorShuffledArr(ids);
    console.log(ids);
    renderHorrorResults(ids)
}

horrorBtn.addEventListener("click", horrorData)

var renderHorrorResults = function (horrorMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + horrorMovieIds[i] + "&output_language=en", {
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
    }
}

var musicShuffledArr = function (musicMovieIds) {
    musicMovieIds.sort(() => Math.random() - 0.5);
}

var musicData = async function () {
    var ids = []
    var musicApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + musicValue;

    var data = await fetch(musicApiURL)
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
    musicShuffledArr(ids);
    console.log(ids);
    renderMusicResults(ids)
}

musicBtn.addEventListener("click", musicData)

var renderMusicResults = function (musicMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + musicMovieIds[i] + "&output_language=en", {
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
    }
}

var mysteryShuffledArr = function (mysteryMovieIds) {
    mysteryMovieIds.sort(() => Math.random() - 0.5);
}

var mysteryData = async function () {
    var ids = []
    var mysteryApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + mysteryValue;

    var data = await fetch(mysteryApiURL)
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
    mysteryShuffledArr(ids);
    console.log(ids);
    renderMysteryResults(ids)
}

mysteryBtn.addEventListener("click", mysteryData)

var renderMysteryResults = function (mysteryMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + mysteryMovieIds[i] + "&output_language=en", {
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
    }
}

var romanceShuffledArr = function (romanceMovieIds) {
    romanceMovieIds.sort(() => Math.random() - 0.5);
}

var romanceData = async function () {
    var ids = []
    var romanceApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + romanceValue;

    var data = await fetch(romanceApiURL)
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
    romanceShuffledArr(ids);
    console.log(ids);
    renderRomanceResults(ids)
}

romanceBtn.addEventListener("click", romanceData)

var renderRomanceResults = function (romanceMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + romanceMovieIds[i] + "&output_language=en", {
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
    }
}

var scienceFictionShuffledArr = function (scienceFictionMovieIds) {
    scienceFictionMovieIds.sort(() => Math.random() - 0.5);
}

var scienceFictionData = async function () {
    var ids = []
    var scienceFictionApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + scienceFictionValue;

    var data = await fetch(scienceFictionApiURL)
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
    scienceFictionShuffledArr(ids);
    console.log(ids);
    renderScienceFictionResults(ids)
}

scienceFictionBtn.addEventListener("click", scienceFictionData)

var renderScienceFictionResults = function (scienceFictionMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + scienceFictionMovieIds[i] + "&output_language=en", {
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
    }
}

var TVMovieShuffledArr = function (TVMovieMovieIds) {
    TVMovieMovieIds.sort(() => Math.random() - 0.5);
}

var TVMovieData = async function () {
    var ids = []
    var TVMovieApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + TVMovieValue;

    var data = await fetch(TVMovieApiURL)
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
    TVMovieShuffledArr(ids);
    console.log(ids);
    renderTVMovieResults(ids)
}

TVMovieBtn.addEventListener("click", TVMovieData)

var renderTVMovieResults = function (TVMovieMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + TVMovieMovieIds[i] + "&output_language=en", {
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
    }
}

var thrillerShuffledArr = function (thrillerMovieIds) {
    thrillerMovieIds.sort(() => Math.random() - 0.5);
}

var thrillerData = async function () {
    var ids = []
    var thrillerApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + thrillerValue;

    var data = await fetch(thrillerApiURL)
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
    thrillerShuffledArr(ids);
    console.log(ids);
    renderThrillerResults(ids)
}

thrillerBtn.addEventListener("click", thrillerData)

var renderThrillerResults = function (thrillerMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + thrillerMovieIds[i] + "&output_language=en", {
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
    }
}

var warShuffledArr = function (warMovieIds) {
    warMovieIds.sort(() => Math.random() - 0.5);
}

var warData = async function () {
    var ids = []
    var warApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + warValue;

    var data = await fetch(warApiURL)
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
    warShuffledArr(ids);
    console.log(ids);
    renderWarResults(ids)
}

warBtn.addEventListener("click", warData)

var renderWarResults = function (warMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + warMovieIds[i] + "&output_language=en", {
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
    }
}

var westernShuffledArr = function (westernMovieIds) {
    westernMovieIds.sort(() => Math.random() - 0.5);
}

var westernData = async function () {
    var ids = []
    var westernApiURL = "https://api.themoviedb.org/3/discover/movie?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + westernValue;

    var data = await fetch(westernApiURL)
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
    westernShuffledArr(ids);
    console.log(ids);
    renderWesternResults(ids)
}

westernBtn.addEventListener("click", westernData)

var renderWesternResults = function (westernMovieIds) {
    for (var i = 0; i < 5; i++) {
        fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" + westernMovieIds[i] + "&output_language=en", {
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
    }
}