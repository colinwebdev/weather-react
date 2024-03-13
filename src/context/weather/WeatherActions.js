import axios from "axios"
const API_KEY = process.env.REACT_APP_API_KEY
const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast'
let geoURL = 'http://api.openweathermap.org/geo/1.0/zip'


export async function getGeo(zip) {
    let zipURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`
    let res = await fetch(zipURL)
    let data = await res.json()
    console.log(data)
    return data
}
