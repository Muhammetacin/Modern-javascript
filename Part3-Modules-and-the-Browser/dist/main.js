/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UNSPLASH_API_KEY\": () => (/* binding */ UNSPLASH_API_KEY),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst APIkey = \"c863e7658bfbe95e2049298afb62ccf5\";\r\nconst UNSPLASH_API_KEY = \"zUnlwOKlnWPBpz-PSowV3LpEUF5wuAkQ6HkssOpmaJQ\";\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIkey);\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/config.js?");

/***/ }),

/***/ "./src/fetch-image.js":
/*!****************************!*\
  !*** ./src/fetch-image.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\r\n\r\nconst fetchCityImage = async (cityName) => {\r\n    const url = \"https://api.unsplash.com/search/photos?query=\" + cityName + \"&client_id=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__.UNSPLASH_API_KEY;\r\n    const getImage = await fetch(url).then(response => response.json());\r\n    const image = getImage.results[0].urls.regular;\r\n    return image;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCityImage);\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/fetch-image.js?");

/***/ }),

/***/ "./src/fetch-temperatures.js":
/*!***********************************!*\
  !*** ./src/fetch-temperatures.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\r\n\r\nconst fetchCityTemperature5Days = async (cityName) => {\r\n    const apiString5Days = \"https://api.openweathermap.org/data/2.5/forecast?q=\" + cityName + \"&cnt=40&units=metric&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    const response5Days = await fetch(apiString5Days).then(response => response.json());\r\n\r\n    if(response5Days.city == undefined) {\r\n        showCityName.textContent = \"City not found\";\r\n        return;\r\n    }\r\n\r\n    const responseCityName = response5Days.city.name;\r\n\r\n    const weatherDescription = [\r\n        response5Days.list[0].weather[0].main,\r\n        response5Days.list[8].weather[0].main,\r\n        response5Days.list[16].weather[0].main,\r\n        response5Days.list[24].weather[0].main,\r\n        response5Days.list[32].weather[0].main,\r\n        response5Days.list[39].weather[0].main,\r\n    ];\r\n\r\n    const responseTemperatureValues = [\r\n        response5Days.list[0].main.temp,\r\n        response5Days.list[8].main.temp,\r\n        response5Days.list[16].main.temp,\r\n        response5Days.list[24].main.temp,\r\n        response5Days.list[32].main.temp,\r\n        response5Days.list[39].main.temp,\r\n    ];\r\n\r\n    return { responseCityName, weatherDescription, responseTemperatureValues };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCityTemperature5Days);\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/fetch-temperatures.js?");

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myChart\": () => (/* binding */ myChart),\n/* harmony export */   \"drawGraph\": () => (/* binding */ drawGraph),\n/* harmony export */   \"createGraphWithValues\": () => (/* binding */ createGraphWithValues)\n/* harmony export */ });\n/* harmony import */ var _set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-day-descr-temps.js */ \"./src/set-day-descr-temps.js\");\n\r\n\r\nlet myChart = null;\r\n\r\n// Get todays day\r\nconst todaysDate = new Date().getDay();\r\n\r\nconst drawGraph = (dayLabels, temperatureData) => {\r\n    const ctx = document.getElementById(\"myChart\").getContext(\"2d\");\r\n\r\n    if(myChart != null) {\r\n        myChart.destroy();\r\n    }\r\n\r\n    myChart = new Chart(ctx, {\r\n      type: \"line\",\r\n      data: {\r\n        labels: dayLabels,\r\n        datasets: [\r\n          {\r\n            label: \"Temperature\",\r\n            data: temperatureData,\r\n            backgroundColor: \"rgba(255, 99, 132, 0.2)\",\r\n            borderColor: \"rgba(255, 99, 132, 1)\",\r\n            borderWidth: 2,\r\n            fill: false,\r\n            tension: 0.1,\r\n          },\r\n        ],\r\n      },\r\n      options: {\r\n        scales: {\r\n          y: {\r\n            beginAtZero: true,\r\n          },\r\n        },\r\n      },\r\n    });\r\n};\r\n\r\nconst createGraphWithValues = (responseTemperatureValues) => {\r\n  const temperatures = (0,_set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_0__.setTemperatureOfDays)(responseTemperatureValues);\r\n  const dayLabels = (0,_set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_0__.setDayNames)(todaysDate);\r\n  dayLabels.pop();\r\n\r\n  drawGraph(dayLabels, temperatures);\r\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/graph.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph.js */ \"./src/graph.js\");\n/* harmony import */ var _set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-day-descr-temps.js */ \"./src/set-day-descr-temps.js\");\n/* harmony import */ var _visited_cities_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visited-cities-functions.js */ \"./src/visited-cities-functions.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\n/* harmony import */ var _fetch_temperatures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch-temperatures.js */ \"./src/fetch-temperatures.js\");\n/* harmony import */ var _fetch_image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch-image.js */ \"./src/fetch-image.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst capitalizeFirstLetter = (string) => {\r\n    return string.charAt(0).toUpperCase() + string.slice(1);\r\n};\r\n\r\nconst resetCityValues = () => {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_3__.cityProperties.children[1].innerHTML = \"-\";\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_3__.cityProperties.children[2].innerHTML = \"-\";\r\n\r\n    for(let j = 1; j < 3; j++) {\r\n        for(let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_3__.dayNamesOfWeek.children.length; i++) {\r\n            _variables_js__WEBPACK_IMPORTED_MODULE_3__.dayNamesOfWeek.children[i].children[j].innerHTML = \"-\";\r\n        }\r\n    }\r\n\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_3__.cityImage.src = \"\";\r\n};\r\n\r\nconst executeInput = () => {\r\n    let inputValue = capitalizeFirstLetter(_variables_js__WEBPACK_IMPORTED_MODULE_3__.cityNameInput.value);\r\n    let fetchCity = (0,_fetch_temperatures_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(inputValue);\r\n    (0,_fetch_image_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(inputValue).then(image => _variables_js__WEBPACK_IMPORTED_MODULE_3__.cityImage.src = image);\r\n\r\n    fetchCity.then(cityObject => (0,_set_day_descr_temps_js__WEBPACK_IMPORTED_MODULE_1__.setCityProperties)(cityObject.responseCityName, cityObject.responseTemperatureValues, cityObject.weatherDescription));\r\n    fetchCity.then(cityObject => (0,_graph_js__WEBPACK_IMPORTED_MODULE_0__.createGraphWithValues)(cityObject.responseTemperatureValues));\r\n    fetchCity.then(cityObject => (0,_visited_cities_functions_js__WEBPACK_IMPORTED_MODULE_2__.showVisitedCities)(cityObject.responseCityName));\r\n};\r\n\r\n\r\n\r\n// Events\r\n_variables_js__WEBPACK_IMPORTED_MODULE_3__.cityNameInput.addEventListener('keyup', (event) => {\r\n    resetCityValues();\r\n    \r\n    if(_graph_js__WEBPACK_IMPORTED_MODULE_0__.myChart != null)\r\n    _graph_js__WEBPACK_IMPORTED_MODULE_0__.myChart.destroy();\r\n    \r\n    if(event.key == \"Enter\") {\r\n        executeInput();\r\n    }\r\n});\r\n\r\n_variables_js__WEBPACK_IMPORTED_MODULE_3__.submitBtn.addEventListener('click', () => {\r\n    executeInput();\r\n});\r\n\r\nconsole.log(\"I am using WEBPACK now for my scripts!\");\r\nconsole.log(\"OMG I can't believe it!!!\");\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/index.js?");

/***/ }),

/***/ "./src/set-day-descr-temps.js":
/*!************************************!*\
  !*** ./src/set-day-descr-temps.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDayNames\": () => (/* binding */ setDayNames),\n/* harmony export */   \"setTemperatureOfDays\": () => (/* binding */ setTemperatureOfDays),\n/* harmony export */   \"setWeatherDescriptionOfDays\": () => (/* binding */ setWeatherDescriptionOfDays),\n/* harmony export */   \"setCityProperties\": () => (/* binding */ setCityProperties)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/variables.js\");\n\r\n\r\nconst setDayNames = (today) => {\r\n    let daysOfWeek = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\r\n\r\n    // Rearrange the array\r\n    while(today != 0) {\r\n        let day = daysOfWeek.shift();\r\n        daysOfWeek.push(day);\r\n        today--;\r\n    }\r\n\r\n    // Show correct day names on page\r\n    for(let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children.length; i++) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children[i].children[0].innerHTML = daysOfWeek[i + 1];\r\n    }\r\n\r\n    return daysOfWeek;\r\n};\r\n\r\nconst setTemperatureOfDays = (temperatureData) => {\r\n    let temperatures = [];\r\n    \r\n    const todaysTemperature = Math.round(temperatureData[0]);\r\n    temperatures.push(todaysTemperature);\r\n\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.cityProperties.children[2].innerHTML = todaysTemperature + \"°\";\r\n    \r\n    for(let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children.length; i++) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children[i].children[2].innerHTML = Math.round(temperatureData[i + 1]) + \"°\";\r\n        temperatures.push(Math.round(temperatureData[i + 1]));\r\n    }\r\n\r\n    return temperatures;\r\n};\r\n\r\nconst setWeatherDescriptionOfDays = (weatherDescription) => {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.cityProperties.children[1].innerHTML = weatherDescription[0];\r\n\r\n    for(let i = 0; i < _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children.length; i++) {\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_0__.dayNamesOfWeek.children[i].children[1].innerHTML = weatherDescription[i + 1];\r\n    }\r\n};\r\n\r\nconst setCityProperties = (responseCityName, responseTemperatureValues, weatherDescription) => {\r\n    // Set all the weekdays in app correctly according to day\r\n    setDayNames(_variables_js__WEBPACK_IMPORTED_MODULE_0__.todaysDate);\r\n\r\n    // Show city name on top\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__.showCityName.textContent = responseCityName;\r\n\r\n    // Show temperature for all days\r\n    setTemperatureOfDays(responseTemperatureValues);\r\n\r\n    // Show sky description for all days\r\n    setWeatherDescriptionOfDays(weatherDescription);\r\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/set-day-descr-temps.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cityNameInput\": () => (/* binding */ cityNameInput),\n/* harmony export */   \"submitBtn\": () => (/* binding */ submitBtn),\n/* harmony export */   \"cityProperties\": () => (/* binding */ cityProperties),\n/* harmony export */   \"dayNamesOfWeek\": () => (/* binding */ dayNamesOfWeek),\n/* harmony export */   \"showCityName\": () => (/* binding */ showCityName),\n/* harmony export */   \"cityImage\": () => (/* binding */ cityImage),\n/* harmony export */   \"todaysDate\": () => (/* binding */ todaysDate)\n/* harmony export */ });\nconst cityNameInput = document.getElementById('inputField');\r\nconst submitBtn = document.getElementById('submit');\r\nconst cityProperties = document.getElementById('cityProperties');\r\nconst dayNamesOfWeek = document.getElementById('daysOfWeek');\r\nconst showCityName = document.getElementById('inputArea').children[0];\r\nconst cityImage = document.getElementById('cityImg');\r\n\r\n// Get todays day\r\nconst todaysDate = new Date().getDay();\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/variables.js?");

/***/ }),

/***/ "./src/visited-cities-functions.js":
/*!*****************************************!*\
  !*** ./src/visited-cities-functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showVisitedCities\": () => (/* binding */ showVisitedCities)\n/* harmony export */ });\n// Global because it'll keep the city names as long as the app is running\r\nlet visitedCities = [];\r\n\r\nconst createVisitedCitiesListItem = (visitedCities) => {\r\n    const list = document.getElementById('visitedCities').children[1];\r\n    \r\n    // Remove all list items\r\n    let child = list.lastElementChild;\r\n\r\n    while(child) { \r\n        list.removeChild(child); \r\n        child = list.lastElementChild; \r\n    }\r\n\r\n    // Update list with unique cities\r\n    visitedCities.forEach(city => {\r\n        let listItem = document.createElement('li');\r\n        listItem.appendChild(document.createTextNode(city));\r\n        list.appendChild(listItem);\r\n    });\r\n};\r\n\r\nconst showVisitedCities = (responseCityName) => {\r\n    visitedCities.push(responseCityName);\r\n    visitedCities = visitedCities.filter((value, index, city) => city.indexOf(value) === index);\r\n\r\n    createVisitedCitiesListItem(visitedCities);\r\n};\n\n//# sourceURL=webpack://part3-modules-and-the-browser/./src/visited-cities-functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;