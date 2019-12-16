// create html (boilerplate)
// link js and css
// create search form 
// capture the form data 
// create the xhr request. upto => send
// test our Api call
// add an event listener to Submit
// add result to HTML
// Event listener on Movie
// create new Xhr to get movie details
// add html/css displaying movie details.

let searchBox = document.querySelector('#searchText');
let searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click',(event) => {
  event.preventDefault();

  let searchText = searchBox.value;
  let requestUrl = `https://www.omdbapi.com/?s=${searchText}&apikey=52df55e5`;
  
  // create xhr request
  // OMDB API http://www.omdbapi.com/?i=tt3896198&apikey=52df55e5
  let request = new XMLHttpRequest();

  request.open('GET', requestUrl);

  request.onload = () => {
    let requestResponse = JSON.parse(request.responseText);

    console.log(requestResponse);

    requestResponse.Search.forEach((element) => {

      //display search results on the page
      if (element.Genre !== undefined) {
        document.body.insertAdjacentHTML('beforeend', `<div>
        <p>${element.Title}</p>
        <p>${element.Genre}</p>
        <img src=${element.Poster}>
        </div>`);
      } else {
        document.body.insertAdjacentHTML('beforeend', `<div>
        <p>${element.Title}</p>
        <img src=${element.Poster}>
        </div>`);
      }

      //add an event listener to the poster and title to show actors, plot
      // metascore, ratings, release date
      })
    };

    request.send();

  });

 

