## Learning Objectives
- Practice making JavaScript requests and displaying the data in the page
- Practice traversing the data structure received from an API

## BrewDog API

## Tasks
- Make an XMLHttpRequest to get data on BrewDog beers back from this API: [`https://api.punkapi.com/v2/beers`](https://api.punkapi.com/v2/beers)

- The API can occasionally be unreliable, here's an alternate url - [https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json](https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json)
- Display a list of the names of the beers
  - try to use small, reuseable functions
     - for example, one to handle looping through all the data, then using a separate function to create and render each item into the list
- Add an `<img>` to each beer
  - there is an `"image_url"` key on the beer objects we get back from the API

## Extensions
- Create a drop down which allows the user to select a single beer
- Upon selecting a beer, the following should appear for each the selected beer: name, image, and description
