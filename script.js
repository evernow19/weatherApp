// Feature 1
let now = new Date();
let h2 = document.querySelector("h2");
let todayForecast = document.querySelector("#today-forecast");
let todayDateForecast = document.querySelector("#today-date-forecast");

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

h2.innerHTML = `${day}, ${month} ${date}`;
todayForecast.innerHTML = `${day},`;
todayDateForecast.innerHTML = `${month} ${date}`;

//Feature 2
let search = document.querySelector("#search-form");
search.addEventListener("submit", locationSearch);

function locationSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-form");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
  let apiKey = "83ac7d40a063dd98f0b2269f7f62cce5";
  let units = "metric";
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let todayTemperature = document.querySelector("#temperature");
  todayTemperature.innerHTML = `${temperature}°C`;
  let weatherDescription = document.querySelector("#description");
  let description = response.data.weather[0].main;
  weatherDescription.innerHTML = description;
  let feelsLike = document.querySelector("#feels-like");
  let feelsLikeTemperature = Math.round(response.data.main.feels_like);
  feelsLike.innerHTML = `${feelsLikeTemperature}°C`;
  let wind = document.querySelector("#wind");
  let windInfo = Math.round(response.data.wind.speed);
  wind.innerHTML = `${windInfo} mps`;
  let humidity = document.querySelector("#humidity");
  let humidityInfo = response.data.main.humidity;
  humidity.innerHTML = `${humidityInfo}%`;
  let pressure = document.querySelector("#pressure");
  let pressureInfo = response.data.main.pressure;
  pressure.innerHTML = `${pressureInfo} mb`;
  let highTemp = document.querySelector("#high-temp-first-day");
  let firstDayTemp = Math.round(response.data.main.temp_max);
  highTemp.innerHTML = `${firstDayTemp}°C`;
  let lowTemp = document.querySelector("#low-temp-first-day");
  let firstDayTempLow = Math.round(response.data.main.temp_min);
  lowTemp.innerHTML = `${firstDayTempLow}°C`;
}
