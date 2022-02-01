import Data from "./config.js";

const searchBar = document.querySelector("#searchBar");
const container = document.querySelector(".container");
const cityNameContainer = document.querySelector(".city-name");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const resetContainer = () => {
    // Removing all child elements from Container before creating new set of elements
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
};

const createElement = (element, cssClass, parent) => {
    const elem = document.createElement(element);
    elem.classList.add(cssClass);
    parent.appendChild(elem);

    return elem;
};

const createElemInnerHtml = (element, innerHtml, parent) => {
    const elem = document.createElement(element);
    elem.innerHTML = innerHtml;
    parent.appendChild(elem);

    return elem;
};

const createElemClassInnerHtml = (element, cssClass, innerHtml, parent) => {
    const elem = document.createElement(element);
    elem.classList.add(cssClass);
    elem.innerHTML = innerHtml;
    parent.appendChild(elem);

    return elem;
};

const addDay = (result, i) => {
    // Use the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)
    const date = new Date();
    let dayOfTheWeek = weekdays[(date.getDay() + i) % 7];
    const data = result.daily[i];
    const temperature = data.temp;

    // Create the elements with Data
    const card = createElement('div', 'card', container);
    const imageBox = createElement('div', 'imgBx', card);

    const cardImg = document.createElement("img");
    cardImg.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    imageBox.appendChild(cardImg);

    const contentBox = createElement('div', 'contentBx', card);

    const cardHeader = createElemInnerHtml('h2', dayOfTheWeek, contentBox);

    const tempDescription = createElemInnerHtml('h4', data.weather[0].description, contentBox);

    const currentTempBox = createElement('div', 'color', contentBox);

    const currentTempHeader = createElemInnerHtml('h3', 'Temp:', currentTempBox);

    const currentTemp = createElemClassInnerHtml('span', 'current-temp', temperature.day + "°C", currentTempBox);

    const minMaxTemperatures = createElement('div', 'details', contentBox);

    const minMaxTempHeader = createElemInnerHtml('h3', 'More:', minMaxTemperatures);

    const minTemp = createElemClassInnerHtml('span', 'min-temp', temperature.min + "°C", minMaxTemperatures);
    
    const maxTemp = createElemClassInnerHtml('span', 'max-temp', temperature.max + "°C", minMaxTemperatures);
};
  
const fetchDataWithLatLon = (lat, lon) => {
    // Fetching final data according to the coordinates
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon 
      + "&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=" + Data.key)
      .then((response) => response.json())
      .then((result) => {
        console.log("Welcome to this basic weather app. this is not a product but the product of an academic exercise.");
        
        resetContainer();
  
        // Looping through 5 days of weather data
        for (let i = 0; i < 5; i++) {
          addDay(result, i);
        }
      });
};

const fetchWeather = (event) => {
    // Store target in variable
    const thisCity = event.currentTarget.value.toLowerCase();
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/?q=" + thisCity + "&appid=" + Data.key;
    event.currentTarget.value = "";

    // Fetching first api to get the City coordinates
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const lon = data.city.coord.lon;
        const lat = data.city.coord.lat;

        cityNameContainer.innerHTML = data.city.name;

        fetchDataWithLatLon(lat, lon);
      })
      .catch((error) => {
        // If there are errors, send out an error message
        console.error("Error:", "not a place!");
        resetContainer();
        return alert("Are you sure you aren't holding your map upside down?");
      });
};

const keyPressed = (event) => {
    // checking the action for specific key (Enter)
    if (event.key === "Enter") {
      fetchWeather(event);
    }
};

// Event will start on a keyup action
searchBar.addEventListener("keyup", keyPressed);