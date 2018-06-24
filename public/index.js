var app = function(){
  const url = "https://api.punkapi.com/v2/beers"
  // makeRequest(url, listRequestComplete)
  makeRequest(url, dropDownRequestComplete)
}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const dropDownRequestComplete = function() {
  if (this.status !== 200) return;
  const beers = JSON.parse(this.response);


  const select = document.querySelector('#beer-drop-down');
  populateDropDown(select, beers);

  select.addEventListener("change", function(){
    console.log("eventListener");
    displayBeerDetails(select, beers);
  })
};

const populateDropDown = function(select, beers) {
  beers.forEach(function(beer) {
    const option = document.createElement("option");
    option.text = beer.name;
    option.value = beers.indexOf(beer);

    appendOption(select, option);
  });

  showFirstBeer(beers);
}

const showFirstBeer = function(beers) {
  const div = document.querySelector("#beer-details");
  const selectedBeer = beers[0];
  createBeerTemplate(div, selectedBeer);
}

const displayBeerDetails = function(select, beers) {
  const div = document.querySelector("#beer-details");

  clearBeerDetails(div);
  console.log(select.value);
  const selectedBeer = beers[select.value];
  createBeerTemplate(div, selectedBeer);
}

const createBeerTemplate = function(div, selectedBeer){
  const beerName = document.createElement("h2")
  const beerImage = document.createElement("img")
  const strength = document.createElement("p")
  const description = document.createElement("p")
  const foodPairing = document.createElement("p")

  beerName.textContent = selectedBeer.name;
  beerImage.src = selectedBeer.image_url;
  beerImage.height = "200";
  strength.textContent = selectedBeer.abv + "%";
  description.textContent = selectedBeer.description;
  foodPairing.textContent = selectedBeer.food_pairing;

  appendBeerDetails(div, beerName, beerImage, strength, description, foodPairing)
}

const appendOption = function(select, option) {
  select.appendChild(option);
}

const appendBeerDetails = function(div, beerName, beerImage, strength, description, foodPairing) {
  div.appendChild(beerName);
  div.appendChild(beerImage);
  div.appendChild(strength);
  div.appendChild(description);
  div.appendChild(foodPairing);
}

const clearBeerDetails = function(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

window.addEventListener('load', app);

// const listRequestComplete = function() {
//   if (this.status !== 200) return;
//   const beers = JSON.parse(this.response);
//   populateList(beers);
// };

// const populateList = function(beers) {
//   beers.forEach(function(beer) {
//     const h2 = document.createElement("h2");
//     const img = document.createElement("img")
//     h2.textContent = beer.name;
//     img.src = beer.image_url;
//     img.width = "100";
//     img.height = "400";
//
//     appendItems(h2, img);
//   });
// }
//
// const appendItems = function(h2, img) {
//   const ul = document.querySelector('#beer-list');
//   ul.appendChild(h2);
//   ul.appendChild(img);
// }
