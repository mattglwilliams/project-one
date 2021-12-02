var bookCardEl = document.querySelector('.bookCard');
var bookButtonEl=document.querySelector('.bookButton');
var searchAgainEl=document.querySelector('.searchAgain');
var displayBookEl = document.querySelector('.displayBook');

function getBook() {


var genreEl = document.querySelector('.genre');
var genreEl2 = document.querySelector('.genre2');
var genreEl3 = document.querySelector('.genre3');
var genreName = genreEl.value.trim();
var genreName2 = genreEl2.value.trim();
var genreName3 = genreEl3.value.trim();
var randomNum = Math.floor(Math.random() * 20);


var genreUrl = ['https://www.googleapis.com/books/v1/volumes?q=subject:' +genreName+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU','https://www.googleapis.com/books/v1/volumes?q=subject:' +genreName2+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU','https://www.googleapis.com/books/v1/volumes?q=subject:' +genreName3+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&language:en&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU'];
  for (var i=0;i<=genreUrl.length;i++){
    fetch(genreUrl[i])
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data);
      for (var i = 0; i<=2;i++){
        var bookTitle = document.createElement('p');
        var bookImage =document.createElement('img');
        displayBookEl.appendChild(bookTitle);

        bookTitle.textContent= `Title: ${data.items[i].volumeInfo.title}`;
        
        bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
          if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
            
            displayBookEl.appendChild(bookImage);
          }else{
            bookImage.setAttribute("src", noImage.webp)
          }
        }
     

      }
      
    );


  }
   
  
};

// var genreUrl = 'https://www.googleapis.com/books/v1/volumes?q=subject:' +genreName+ '&orderBy=newest&startIndex='+randomNum+'&country:GB&key=AIzaSyA_lIqrTexQ5k7tVp1cuAOHbptlInieZKU';
//   fetch(genreUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {

//       console.log(data);
//       for (var i = 0; i<=5;i++){
//         var bookTitle = document.createElement('p');
//         var bookImage =document.createElement('img');
//         displayBookEl.appendChild(bookTitle);

//         bookTitle.textContent= `Title: ${data.items[i].volumeInfo.title}`;
        
//         bookImage.setAttribute("src", data.items[i].volumeInfo.imageLinks.smallThumbnail);
//           if (data.items[i].volumeInfo.imageLinks.smallThumbnail){
            
//             displayBookEl.appendChild(bookImage);
//           }else{
//             bookImage.setAttribute("src", ball.jpg)
//           }
//         }
     

//       }
      
//     );
  
// };

bookButtonEl.addEventListener('click',getBook);

