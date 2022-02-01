import { cityProperties, dayNamesOfWeek, showCityName, todaysDate } from "./variables.js";

export const setDayNames = (today) => {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Rearrange the array
    while(today != 0) {
        let day = daysOfWeek.shift();
        daysOfWeek.push(day);
        today--;
    }

    // Show correct day names on page
    for(let i = 0; i < dayNamesOfWeek.children.length; i++) {
        dayNamesOfWeek.children[i].children[0].innerHTML = daysOfWeek[i + 1];
    }

    return daysOfWeek;
};

export const setTemperatureOfDays = (temperatureData) => {
    let temperatures = [];
    
    const todaysTemperature = Math.round(temperatureData[0]);
    temperatures.push(todaysTemperature);

    cityProperties.children[2].innerHTML = todaysTemperature + "°";
    
    for(let i = 0; i < dayNamesOfWeek.children.length; i++) {
        dayNamesOfWeek.children[i].children[2].innerHTML = Math.round(temperatureData[i + 1]) + "°";
        temperatures.push(Math.round(temperatureData[i + 1]));
    }

    return temperatures;
};

export const setWeatherDescriptionOfDays = (weatherDescription) => {
    cityProperties.children[1].innerHTML = weatherDescription[0];

    for(let i = 0; i < dayNamesOfWeek.children.length; i++) {
        dayNamesOfWeek.children[i].children[1].innerHTML = weatherDescription[i + 1];
    }
};

export const setCityProperties = (responseCityName, responseTemperatureValues, weatherDescription) => {
    // Set all the weekdays in app correctly according to day
    setDayNames(todaysDate);

    // Show city name on top
    showCityName.textContent = responseCityName;

    // Show temperature for all days
    setTemperatureOfDays(responseTemperatureValues);

    // Show sky description for all days
    setWeatherDescriptionOfDays(weatherDescription);
};