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
  console.log(searchText);
})
