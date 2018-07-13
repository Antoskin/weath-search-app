import axios from 'axios';

const API_KEY = `77d52cc58d7dc3cd45a0968dc079057f`;

//const URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const URL  = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export const F_WEATHER = `FETCH_WEATHER`;
//const test = 'http://samples.openweathermap.org/data/2.5/forecast?q=Boston,us&appid=b6907d289e10d714a6e88b30761fae22';

export default function fetchWeather(cityName) {

    const city = `${URL}&q=${cityName},us`;

    const request = axios.get(city);
    console.log(`Action`, request);
    return {
        type: F_WEATHER,
        payload : request
    }
}