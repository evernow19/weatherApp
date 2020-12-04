// Feature 1
let now = new Date();
let h2 = document.querySelector("h2");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes}`;


//Feature 2

function locationSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-form");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
  }

let search = document.querySelector("#search-form");
search.addEventListener("submit", locationSearch);

//bonus feature

function celciusDegree(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = "17";
}

let celcius = document.querySelector("#celcius-link");
celcius.addEventListener("click", celciusDegree);
 
function fahrenheitDegree(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = "63";
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", fahrenheitDegree);
 

























