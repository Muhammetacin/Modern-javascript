import APIkey from './config.js';

const fetchCityTemperature5Days = async (cityName) => {
    const apiString5Days = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&cnt=40&units=metric&appid=" + APIkey;
    const response5Days = await fetch(apiString5Days).then(response => response.json());

    if(response5Days.city == undefined) {
        showCityName.textContent = "City not found";
        return;
    }

    const responseCityName = response5Days.city.name;

    const weatherDescription = [
        response5Days.list[0].weather[0].main,
        response5Days.list[8].weather[0].main,
        response5Days.list[16].weather[0].main,
        response5Days.list[24].weather[0].main,
        response5Days.list[32].weather[0].main,
        response5Days.list[39].weather[0].main,
    ];

    const responseTemperatureValues = [
        response5Days.list[0].main.temp,
        response5Days.list[8].main.temp,
        response5Days.list[16].main.temp,
        response5Days.list[24].main.temp,
        response5Days.list[32].main.temp,
        response5Days.list[39].main.temp,
    ];

    return { responseCityName, weatherDescription, responseTemperatureValues };
};

export default fetchCityTemperature5Days;