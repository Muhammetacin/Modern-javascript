import { myChart, createGraphWithValues } from './graph.js';
import { setDayNames, setWeatherDescriptionOfDays, setTemperatureOfDays, setCityProperties } from './set-day-descr-temps.js';
import { showVisitedCities } from './visited-cities-functions.js';
import { cityNameInput, cityImage, showCityName, todaysDate, cityProperties, dayNamesOfWeek, submitBtn } from './variables.js';
import fetchCityTemperature5Days from './fetch-temperatures.js';
import fetchCityImage from './fetch-image.js';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const resetCityValues = () => {
    cityProperties.children[1].innerHTML = "-";
    cityProperties.children[2].innerHTML = "-";

    for(let j = 1; j < 3; j++) {
        for(let i = 0; i < dayNamesOfWeek.children.length; i++) {
            dayNamesOfWeek.children[i].children[j].innerHTML = "-";
        }
    }

    cityImage.src = "";
};

// const setCityProperties = (responseCityName, responseTemperatureValues, weatherDescription) => {
//     // Set all the weekdays in app correctly according to day
//     setDayNames(todaysDate);

//     // Show city name on top
//     showCityName.textContent = responseCityName;

//     // Show temperature for all days
//     setTemperatureOfDays(responseTemperatureValues);

//     // Show sky description for all days
//     setWeatherDescriptionOfDays(weatherDescription);
// };

const executeInput = () => {
    let inputValue = capitalizeFirstLetter(cityNameInput.value);
    let fetchCity = fetchCityTemperature5Days(inputValue);
    fetchCityImage(inputValue).then(image => cityImage.src = image);

    fetchCity.then(cityObject => setCityProperties(cityObject.responseCityName, cityObject.responseTemperatureValues, cityObject.weatherDescription));
    fetchCity.then(cityObject => createGraphWithValues(cityObject.responseTemperatureValues));
    fetchCity.then(cityObject => showVisitedCities(cityObject.responseCityName));
};



// Events
cityNameInput.addEventListener('keyup', (event) => {
    resetCityValues();
    
    if(myChart != null)
    myChart.destroy();
    
    if(event.key == "Enter") {
        executeInput();
    }
});

submitBtn.addEventListener('click', () => {
    executeInput();
});