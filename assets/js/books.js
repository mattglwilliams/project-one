//variables for elements to render
var displayBookEl = document.querySelector('.displayBook')

// variables for buttons 
var actionBookBtn = document.querySelector(".action")
var adventureBookBtn = document.querySelector(".adventure")
var comedyBookBtn = document.querySelector(".comedy")
var crimeBookBtn = document.querySelector(".crime")
var fantasyBookBtn = document.querySelector(".fantasy")
var historyBookBtn = document.querySelector(".history")
var horrorBookBtn = document.querySelector(".horror")
var kidsBookBtn = document.querySelector(".kids")
var musicBookBtn = document.querySelector(".music")
var mysteryBookBtn = document.querySelector(".mystery")
var nonFictionBookBtn = document.querySelector(".non-fiction")
var politicsBookBtn = document.querySelector(".politics")
var romanceBookBtn = document.querySelector(".romance")
var sportBookBtn = document.querySelector(".sport")
var thrillerBookBtn = document.querySelector(".thriller")
var warBookBtn = document.querySelector(".war")
var westernBookBtn = document.querySelector(".western")

// variables to get value from buttons
// var actionBookValue = actionBookBtn.value
// var adventureBookValue = adventureBookBtn.value
// var comedyBookValue = comedyBookBtn.value
// var crimeBookValue = crimeBookBtn.value
// var fantasyBookValue = fantasyBookBtn.value
// var historyBookValue = historyBookBtn.value
// var horrorBookValue = horrorBookBtn.value
// var kidsBookValue = kidsBookBtn.value
// var musicBookValue = musicBookBtn.value
// var mysteryBookValue = mysteryBookBtn.value
// var nonFictionBookValue = nonFictionBookBtn.value
// var politicsBookValue = politicsBookBtn.value
// var romanceBookValue = romanceBookBtn.value
// var sportBookValue = sportBookBtn.value
// var thrillerBookValue = thrillerBookBtn.value
// var warBookValue = warBookBtn.value
// var westernBookValue = westernBookBtn.value


var allBookGenreButtons = document.querySelectorAll('button[class^=btn]');
var randomPage = Math.floor(Math.random() * 29)
var genreShuffledArr = function (bookIds) {
    bookIds.sort(() => Math.random() - 0.5);
}
for (var i = 0; i < allBookGenreButtons.length; i++) {
    allBookGenreButtons[i].addEventListener('click', async function () {
        
        var btnValue = this.value
        var bookGenreApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +btnValue+ '&orderBy=newest&startIndex='+randomPage +'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';
    
        var data = await fetch(bookGenreApiURL)
        .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data)
          displayBookEl.textContent="";
          
            for (var i=0;i<=2;i++){
          
            var displayCard = document.createElement('div');
            var cardContainer = document.createElement('div');  
            var displayImage = document.createElement('div');
            var imageContainer = document.createElement('div');
            var bookImage = document.createElement('img');
            var bookTitle = document.createElement('a');
            var bookDescription = document.createElement('p');
            //var smallDescription=document.createElement('p');

            displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
            imageContainer.setAttribute("class","flex-shrink-0");
            displayBookEl.setAttribute("class", "displayBook");
            displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
            cardContainer.setAttribute("class", "flex-shrink-0");
            bookTitle.setAttribute("class", "text-xl text-gray-900");
            //bookDescription.setAttribute("class", "text-base text-gray-600");
           // smallDescription.setAttribute("class", "text-base text-gray-600");
            bookTitle.setAttribute("href", data.items[i].volumeInfo.previewLink);
            bookTitle.setAttribute("target", "_blank");             
            bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
            bookTitle.textContent = (data.items[i].volumeInfo.title);           
            bookDescription.textContent = (data.items[i].volumeInfo.description);
            //console.log("desc " +bookDescription.textContent);
           // console.log(typeof bookDescription.textContent);
           // var descriptionSplit = bookDescription.textContent.split(" "); 
           // console.log(descriptionSplit);
           // smallDescription = descriptionSplit.slice(0,50);
           // console.log(smallDescription);
            //bookDescription = JSON.stringify();                        
            //console.log(typeof descriptionSplit);               
            displayImage.append(bookImage);             
            displayCard.append(bookTitle);
            displayCard.append(bookDescription);
            //displayCard.append(smallDescription);             
            displayBookEl.append(displayImage);
            displayBookEl.append(displayCard);
            displayBookEl.append(cardContainer);
           
            randomPage = Math.floor(Math.random() * 29)

        
            }
      })

       
    });
  }
  
 