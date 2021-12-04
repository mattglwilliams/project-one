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
var actionBookValue = actionBookBtn.value
var adventureBookValue = adventureBookBtn.value
var comedyBookValue = comedyBookBtn.value
var crimeBookValue = crimeBookBtn.value
var fantasyBookValue = fantasyBookBtn.value
var historyBookValue = historyBookBtn.value
var horrorBookValue = horrorBookBtn.value
var kidsBookValue = kidsBookBtn.value
var musicBookValue = musicBookBtn.value
var mysteryBookValue = mysteryBookBtn.value
var nonFictionBookValue = nonFictionBookBtn.value
var politicsBookValue = politicsBookBtn.value
var romanceBookValue = romanceBookBtn.value
var sportBookValue = sportBookBtn.value
var thrillerBookValue = thrillerBookBtn.value
var warBookValue = warBookBtn.value
var westernBookValue = westernBookBtn.value



// to use in URL so a random page is returned from API
var randomNum = Math.floor(Math.random() * 10)



//functions for each genre button to return data from API
var fetchActionBookData = function () {

    var actionBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +actionBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(actionBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

actionBookBtn.addEventListener("click", fetchActionBookData)

var fetchAdventureBookData = function () {

    var adventureBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +adventureBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(adventureBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
    })
}

adventureBookBtn.addEventListener("click", fetchAdventureBookData)


var fetchComedyBookData = function () {

    var comedyBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +comedyBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(comedyBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

comedyBookBtn.addEventListener("click", fetchComedyBookData)

var fetchCrimeBookData = function () {

    var crimeBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +crimeBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(crimeBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

crimeBookBtn.addEventListener("click", fetchCrimeBookData)


var fantasyBookData = function () {

    var fantasyBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +fantasyBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(fantasyBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

fantasyBookBtn.addEventListener("click", fantasyBookData)

var historyBookData = function () {

    var historyBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" + historyBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(historyBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

historyBookBtn.addEventListener("click", historyBookData)

var horrorBookData = function () {

    var horrorBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +horrorBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';
    fetch(horrorBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

horrorBookBtn.addEventListener("click", horrorBookData)

var kidsBookData = function () {

  var kidsBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +kidsBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';
  fetch(kidsBookApiURL)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);
          displayBookEl.textContent="";
          for (var i = 0; i<=2;i++){
            var displayCard = document.createElement('div');
            var cardContainer = document.createElement('div');  
            var displayImage = document.createElement('div');
            var imageContainer = document.createElement('div');
            var bookImage = document.createElement('img');
            displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
            imageContainer.setAttribute("class","flex-shrink-0");
            var bookTitle = document.createElement('h4');
            var bookDescription = document.createElement('p');
            displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
            cardContainer.setAttribute("class", "flex-shrink-0");
            bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
            bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
            bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
            bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
            bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
            console.log(bookTitle);
                  
            displayImage.append(bookImage);
            
            displayCard.append(bookTitle);
            displayCard.append(bookDescription);
            displayBookEl.append(displayImage);
            displayBookEl.append(displayCard);
            displayBookEl.append(cardContainer);
           
            
        
      
            // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
            // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
            //       displayBookEl.append(bookImage);
            // }else{
            //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
            // }
    }
      })
}

kidsBookBtn.addEventListener("click", kidsBookData)



var musicBookData = function () {

    var musicBookApiURL = 'https:www.googleapis.com/books/v1/volumes?q=subject:' +musicBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(musicBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

musicBookBtn.addEventListener("click", musicBookData)

var mysteryBookData = function () {

    var mysteryBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +mysteryBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(mysteryBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

mysteryBookBtn.addEventListener("click", mysteryBookData)

var nonFictionBookData = function () {

  var nonFictionBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" +nonFictionBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

  fetch(nonFictionBookApiURL)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);
          displayBookEl.textContent="";
          for (var i = 0; i<=2;i++){
            var displayCard = document.createElement('div');
            var cardContainer = document.createElement('div');  
            var displayImage = document.createElement('div');
            var imageContainer = document.createElement('div');
            var bookImage = document.createElement('img');
            displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
            imageContainer.setAttribute("class","flex-shrink-0");
            var bookTitle = document.createElement('h4');
            var bookDescription = document.createElement('p');
            displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
            cardContainer.setAttribute("class", "flex-shrink-0");
            bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
            bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
            bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
            bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
            bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
            console.log(bookTitle);
                  
            displayImage.append(bookImage);
            
            displayCard.append(bookTitle);
            displayCard.append(bookDescription);
            displayBookEl.append(displayImage);
            displayBookEl.append(displayCard);
            displayBookEl.append(cardContainer);
           
            
        
      
            // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
            // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
            //       displayBookEl.append(bookImage);
            // }else{
            //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
            // }
    }
      })
}

nonFictionBookBtn.addEventListener("click", nonFictionBookData)

var politicsBookData = function () {

  var politicsBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" + politicsBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

  fetch(politicsBookApiURL)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);
          displayBookEl.textContent="";
          for (var i = 0; i<=2;i++){
            var displayCard = document.createElement('div');
            var cardContainer = document.createElement('div');  
            var displayImage = document.createElement('div');
            var imageContainer = document.createElement('div');
            var bookImage = document.createElement('img');
            displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
            imageContainer.setAttribute("class","flex-shrink-0");
            var bookTitle = document.createElement('h4');
            var bookDescription = document.createElement('p');
            displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
            cardContainer.setAttribute("class", "flex-shrink-0");
            bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
            bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
            bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
            bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
            bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
            console.log(bookTitle);
                  
            displayImage.append(bookImage);
            
            displayCard.append(bookTitle);
            displayCard.append(bookDescription);
            displayBookEl.append(displayImage);
            displayBookEl.append(displayCard);
            displayBookEl.append(cardContainer);
           
            
        
      
            // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
            // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
            //       displayBookEl.append(bookImage);
            // }else{
            //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
            // }
    }
      })
}

politicsBookBtn.addEventListener("click", politicsBookData)

var romanceBookData = function () {

    var romanceBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" + romanceBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(romanceBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

romanceBookBtn.addEventListener("click", romanceBookData)



var sportBookData = function () {

    var sportBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" + sportBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(sportBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

sportBookBtn.addEventListener("click", sportBookData)

var thrillerBookData = function () {

    var thrillerBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" + thrillerBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(thrillerBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

thrillerBookBtn.addEventListener("click", thrillerBookData)

var warBookData = function () {

    var warBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" + warBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(warBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
              var displayCard = document.createElement('div');
              var cardContainer = document.createElement('div');  
              var displayImage = document.createElement('div');
              var imageContainer = document.createElement('div');
              var bookImage = document.createElement('img');
              displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
              imageContainer.setAttribute("class","flex-shrink-0");
              var bookTitle = document.createElement('h4');
              var bookDescription = document.createElement('p');
              displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
              cardContainer.setAttribute("class", "flex-shrink-0");
              bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
              bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
              bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
              bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
              bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              console.log(bookTitle);
                    
              displayImage.append(bookImage);
              
              displayCard.append(bookTitle);
              displayCard.append(bookDescription);
              displayBookEl.append(displayImage);
              displayBookEl.append(displayCard);
              displayBookEl.append(cardContainer);
             
              
          
        
              // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
              // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
              //       displayBookEl.append(bookImage);
              // }else{
              //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
              // }
      }
        })
}

warBookBtn.addEventListener("click", warBookData)



var westernBookData = function () {

    var westernBookApiURL = "https://www.googleapis.com/books/v1/volumes?q=subject:" + westernBookValue+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';

    fetch(westernBookApiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayBookEl.textContent="";
            for (var i = 0; i<=2;i++){
                    var displayCard = document.createElement('div');
                    var cardContainer = document.createElement('div');  
                    var displayImage = document.createElement('div');
                    var imageContainer = document.createElement('div');
                    var bookImage = document.createElement('img');
                    displayImage.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl")   ;
                    imageContainer.setAttribute("class","flex-shrink-0");
                    var bookTitle = document.createElement('h4');
                    var bookDescription = document.createElement('p');
                    displayCard.setAttribute("class","max-w-sm mx-auto flex p-3 bg-white rounded-lg shadow-xl");
                    cardContainer.setAttribute("class", "flex-shrink-0");
                    bookTitle.setAttribute("class", "text-xl text-gray-900 displayBook");
                    bookDescription.setAttribute("class", "text-base text-gray-600 displayBook");
                    bookTitle= JSON.stringify(data.items[i].volumeInfo.title) ;
                    bookDescription.textContent = `Description: ${data.items[i].volumeInfo.description}`;
                    bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
                    console.log(bookTitle);
                          
                    displayImage.append(bookImage);
                    
                    displayCard.append(bookTitle);
                    displayCard.append(bookDescription);
                    displayBookEl.append(displayImage);
                    displayBookEl.append(displayCard);
                    displayBookEl.append(cardContainer);
                   
                    
                
              
                    // bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
                    // if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
                    //       displayBookEl.append(bookImage);
                    // }else{
                    //       bookImage.setAttribute("src", noImage.webp) //TODO - get a placeholder image for books with no thumbnail
                    // }
            }
           
        })
}

 westernBookBtn.addEventListener("click", westernBookData)




