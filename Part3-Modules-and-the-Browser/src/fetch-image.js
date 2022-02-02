import { UNSPLASH_API_KEY } from './config.js';

const fetchCityImage = async (cityName) => {
    const url = "https://api.unsplash.com/search/photos?query=" + cityName + "&client_id=" + UNSPLASH_API_KEY;
    const getImage = await fetch(url).then(response => response.json());
    const image = getImage.results[0].urls.regular;
    return image;
};

export default fetchCityImage;