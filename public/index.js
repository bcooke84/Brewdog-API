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
  populateDropDown(beers);
};

const populateDropDown = function(beers) {
  const select = document.querySelector('#beer-drop-down');

  beers.forEach(function(beer) {
    const option = document.createElement("option");
    option.text = beer.name;
    option.value = beers.indexOf(beer);

    appendOption(select, option);
  });

  select.addEventListener("change", displayBeerDetails(beers))

}

const displayBeerDetails = function(beers) {
  return function() {

    const div = document.querySelector("#beer-details");
    while (div.firstChild){
      div.removeChild(div.firstChild);
    }

    const beerName = document.createElement("h2")
    const beerImage = document.createElement("img")
    const strength = document.createElement("p")
    const description = document.createElement("p")
    const foodPairing = document.createElement("p")

    const selectedBeer = beers[this.value];
console.log(selectedBeer);
    beerName.textContent = selectedBeer.name;
    beerImage.src = selectedBeer.image_url;
    beerImage.width = "50";
    beerImage.height = "200";
    strength.textContent = selectedBeer.abv + "%";
    description.textContent = selectedBeer.description;
    foodPairing.textContent = selectedBeer.food_pairing;

    appendBeerDetails(div, beerName, beerImage, strength, description, foodPairing)
  }
}

const appendOption= function(select, option) {
  select.appendChild(option);
}

const appendBeerDetails= function(div, beerName, beerImage, strength, description, foodPairing) {
  div.appendChild(beerName);
  div.appendChild(beerImage);
  div.appendChild(strength);
  div.appendChild(description);
  div.appendChild(foodPairing);
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
