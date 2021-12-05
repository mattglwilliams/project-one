var actionBtn = document.querySelector(".action")
var animationBtn = document.querySelector(".animation")
var comedyBtn = document.querySelector(".comedy")
var crimeBtn = document.querySelector(".crime")
var documentaryBtn = document.querySelector(".documentary")
var dramaBtn = document.querySelector(".drama")
var familyBtn = document.querySelector(".family")
var kidsBtn = document.querySelector(".kids")
var mysteryBtn = document.querySelector(".mystery")
var newsBtn = document.querySelector(".news")
var realityBtn = document.querySelector(".reality")
var scienceFictionBtn = document.querySelector(".science-fiction")
var soapBtn = document.querySelector(".soap")
var talkBtn = document.querySelector(".talk")
var warBtn = document.querySelector(".war")
var westernBtn = document.querySelector(".western")

var actionValue = actionBtn.value
var animationValue = animationBtn.value
var comedyValue = comedyBtn.value
var crimeValue = crimeBtn.value
var documentaryValue = documentaryBtn.value
var dramaValue = dramaBtn.value
var familyValue = familyBtn.value
var kidsValue = kidsBtn.value
var mysteryValue = mysteryBtn.value
var newsValue = newsBtn.value
var realityValue = realityBtn.value
var scienceFictionValue = scienceFictionBtn.value
var soapValue = soapBtn.value
var talkValue = talkBtn.value
var warValue = warBtn.value
var westernValue = westernBtn.value

var randomPage = Math.floor(Math.random() * 10)

var actionTVIds = []
var animationTVIds = []
var comedyTVIds = []
var crimeTVIds = []
var documentaryTVIds = []
var dramaTVIds = []
var familyTVIds = []
var kidsTVIds = []
var mysteryTVIds = []
var newsTVIds = []
var realityTVIds = []
var scienceFictionTVIds = []
var soapTVIds = []
var talkTVIds = []
var warTVIds = []
var westernTVIds = []

var actionShuffledArr = function (actionTVIds) {
    actionTVIds.sort(() => Math.random() - 0.5);
}

var actionData = function () {

    var actionApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + actionValue;

    fetch(actionApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        actionTVIds.push(movieId)
                    }
                    actionShuffledArr(actionTVIds);
                })
            }
        }) 
        console.log(actionTVIds)
}

actionBtn.addEventListener("click", actionData)

var animationShuffledArr = function (animationTVIds) {
    animationTVIds.sort(() => Math.random() - 0.5);
}

var animationData = function () {

    var animationApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + animationValue;

    fetch(animationApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        animationTVIds.push(movieId)
                    }
                    animationShuffledArr(animationTVIds);
                })
            }
        }) 
        console.log(animationTVIds)
}

animationBtn.addEventListener("click", animationData)

var comedyShuffledArr = function (comedyTVIds) {
    comedyTVIds.sort(() => Math.random() - 0.5);
}

var comedyData = function () {

    var comedyApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + comedyValue;

    fetch(comedyApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        comedyTVIds.push(movieId)
                    }
                    comedyShuffledArr(comedyTVIds);
                })
            }
        }) 
        console.log(comedyTVIds)
}

comedyBtn.addEventListener("click", comedyData)

var crimeShuffledArr = function (crimeTVIds) {
    crimeTVIds.sort(() => Math.random() - 0.5);
}

var crimeData = function () {

    var crimeApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + crimeValue;

    fetch(crimeApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        crimeTVIds.push(movieId)
                    }
                    crimeShuffledArr(crimeTVIds);
                })
            }
        }) 
        console.log(crimeTVIds)
}

crimeBtn.addEventListener("click", crimeData)

var documentaryShuffledArr = function (documentaryTVIds) {
    documentaryTVIds.sort(() => Math.random() - 0.5);
}

var documentaryData = function () {

    var documentaryApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + documentaryValue;

    fetch(documentaryApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        documentaryTVIds.push(movieId)
                    }
                    documentaryShuffledArr(documentaryTVIds);
                })
            }
        }) 
        console.log(documentaryTVIds)
}

documentaryBtn.addEventListener("click", documentaryData)

var dramaShuffledArr = function (dramaTVIds) {
    dramaTVIds.sort(() => Math.random() - 0.5);
}

var dramaData = function () {

    var dramaApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + dramaValue;

    fetch(dramaApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        dramaTVIds.push(movieId)
                    }
                    dramaShuffledArr(dramaTVIds);
                })
            }
        }) 
        console.log(dramaTVIds)
}

dramaBtn.addEventListener("click", dramaData)

var familyShuffledArr = function (familyTVIds) {
    familyTVIds.sort(() => Math.random() - 0.5);
}

var familyData = function () {

    var familyApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + familyValue;

    fetch(familyApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        familyTVIds.push(movieId)
                    }
                    familyShuffledArr(familyTVIds);
                })
            }
        }) 
        console.log(familyTVIds)
}

familyBtn.addEventListener("click", familyData)

var kidsShuffledArr = function (kidsTVIds) {
    kidsTVIds.sort(() => Math.random() - 0.5);
}

var kidsData = function () {

    var kidsApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + kidsValue;

    fetch(kidsApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        kidsTVIds.push(movieId)
                    }
                    kidsShuffledArr(kidsTVIds);
                })
            }
        }) 
        console.log(kidsTVIds)
}

kidsBtn.addEventListener("click", kidsData)

var mysteryShuffledArr = function (mysteryTVIds) {
    mysteryTVIds.sort(() => Math.random() - 0.5);
}

var mysteryData = function () {

    var mysteryApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + mysteryValue;

    fetch(mysteryApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        mysteryTVIds.push(movieId)
                    }
                    mysteryShuffledArr(mysteryTVIds);
                })
            }
        }) 
        console.log(mysteryTVIds)
}

mysteryBtn.addEventListener("click", mysteryData)

var newsShuffledArr = function (newsTVIds) {
    newsTVIds.sort(() => Math.random() - 0.5);
}

var newsData = function () {

    var newsApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + newsValue;

    fetch(newsApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        newsTVIds.push(movieId)
                    }
                    newsShuffledArr(newsTVIds);
                })
            }
        }) 
        console.log(newsTVIds)
}

newsBtn.addEventListener("click", newsData)

var realityShuffledArr = function (realityTVIds) {
    realityTVIds.sort(() => Math.random() - 0.5);
}

var realityData = function () {

    var realityApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + realityValue;

    fetch(realityApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        realityTVIds.push(movieId)
                    }
                    realityShuffledArr(realityTVIds);
                })
            }
        }) 
        console.log(realityTVIds)
}

realityBtn.addEventListener("click", realityData)

var scienceFictionShuffledArr = function (scienceFictionTVIds) {
    scienceFictionTVIds.sort(() => Math.random() - 0.5);
}

var scienceFictionData = function () {

    var scienceFictionApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + scienceFictionValue;

    fetch(scienceFictionApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        scienceFictionTVIds.push(movieId)
                    }
                    scienceFictionShuffledArr(scienceFictionTVIds);
                })
            }
        }) 
        console.log(scienceFictionTVIds)
}

scienceFictionBtn.addEventListener("click", scienceFictionData)

var soapShuffledArr = function (soapTVIds) {
    soapTVIds.sort(() => Math.random() - 0.5);
}

var soapData = function () {

    var soapApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + soapValue;

    fetch(soapApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        soapTVIds.push(movieId)
                    }
                    soapShuffledArr(soapTVIds);
                })
            }
        }) 
        console.log(soapTVIds)
}

soapBtn.addEventListener("click", soapData)

var talkShuffledArr = function (talkTVIds) {
    talkTVIds.sort(() => Math.random() - 0.5);
}

var talkData = function () {

    var talkApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + talkValue;

    fetch(talkApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        talkTVIds.push(movieId)
                    }
                    talkShuffledArr(talkTVIds);
                })
            }
        }) 
        console.log(talkTVIds)
}

talkBtn.addEventListener("click", talkData)

var warShuffledArr = function (warTVIds) {
    warTVIds.sort(() => Math.random() - 0.5);
}

var warData = function () {

    var warApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + warValue;

    fetch(warApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        warTVIds.push(movieId)
                    }
                    warShuffledArr(warTVIds);
                })
            }
        }) 
        console.log(warTVIds)
}

warBtn.addEventListener("click", warData)

var westernShuffledArr = function (westernTVIds) {
    westernTVIds.sort(() => Math.random() - 0.5);
}

var westernData = function () {

    var westernApiURL = "https://api.themoviedb.org/3/discover/tv?api_key=2fad5e038a5d373957de8c81a2825905&language=en-UK&include_adult=false&page=" + randomPage + "&with_original_language=en&with_genres=" + westernValue;

    fetch(westernApiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    for (var i = 0; i < data.results.length; i++) {
                        var movieId = data.results[i].id
                        westernTVIds.push(movieId)
                    }
                    westernShuffledArr(westernTVIds);
                })
            }
        }) 
        console.log(westernTVIds)
}

westernBtn.addEventListener("click", westernData)