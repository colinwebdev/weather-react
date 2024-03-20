import weatherReducer from './WeatherReducer'
const API_KEY = process.env.REACT_APP_API_KEY
const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast'

function getTime(data) {
    const weekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    let date = new Date(data.dt * 1000)
    let hour = date.getHours()
    let minute = date.getMinutes()
    let currMin = String(minute).length === 1 ? `0${minute}` : minute
    let currHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    let amPm = hour >= 12 ? 'PM' : 'AM'
    let short = weekDays[date.getDay()].slice(0, 3)
    let dayObj = {
        month: months[date.getMonth()],
        weekday: weekDays[date.getDay()],
        day: date.getDate(),
        short: short,
        time: `${currHour}:${currMin} ${amPm}`,
    }
    return dayObj
}

function titleCase(text) {
    let firstLetter = text.charAt(0).toUpperCase()
    let newText = firstLetter + text.slice(1)
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === ' ') {
            let capLetter = text.charAt(i + 1).toUpperCase()
            newText = newText.slice(0, i + 1) + capLetter + newText.slice(i + 2)
        }
    }
    return newText
}

function getWind(data) {
    let wind = data.wind
    let deg = wind.deg
    let direction =
        deg >= 337 || deg < 22
            ? 'N'
            : deg >= 22 && deg < 56
            ? 'NE'
            : deg >= 56 && deg < 112
            ? 'E'
            : deg >= 112 && deg < 146
            ? 'SE'
            : deg >= 146 && deg < 202
            ? 'S'
            : deg >= 202 && deg < 247
            ? 'SW'
            : deg >= 247 && deg < 292
            ? 'W'
            : 'NW'
    return {
        speed: wind.speed,
        deg: deg,
        direction: direction
    }
}

export async function getGeo(zip) {
    let zipURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`
    let res = await fetch(zipURL)
    let data = await res.json()
    // console.log(data)
    return [data.lat, data.lon]
}

export async function getLoc(data) {
    return [data.lat, data.lon]
}

export async function getCurrent(locData) {
    let currentURL = `${baseURL}?lat=${locData[0]}&lon=${locData[1]}&appid=${API_KEY}&units=imperial`
    let res = await fetch(currentURL)
    let data = await res.json()
    if (data.cod !== 200) return 'Could not get current weather'
    // console.log(data)
    let main = data.main
    let weather = data.weather[0]

    let pressure = (main.pressure / 33.863886666667).toFixed(2)
    let wind = getWind(data)
    
    let time = getTime(data)
    let dataObj = {
        desc: titleCase(weather.description),
        icon: weather.icon,

        icon2x: `img2${weather.icon}@2x.png`,
        low: Math.round(main.temp_min),
        high: Math.round(main.temp_max),
        humidity: main.humidity,
        windSp: wind.speed,
        windDir: wind.direction,
        deg: wind.deg,
        pressure: `${pressure}inHg`,
        feels: Math.round(main.feels_like),
        temp: Math.round(main.temp),
        name: data.name,
        date: `${time.month} ${time.day}`,
        time: time.time,
        day: time.weekday,
        short: time.short,
    }
    return dataObj
}

export async function getForecast(locData) {
    let foreURL = `${forecastURL}?lat=${locData[0]}&lon=${locData[1]}&appid=${API_KEY}&units=imperial`
    let res = await fetch(foreURL)
    let data = await res.json()
    if (data.cod != 200) return 'Could not get weather forecast'
    let dataChunks = data.list
    let days = []
    let dayNum
    let dayData
    let daysData = []
    dataChunks.forEach((chunk) => {
        let date = new Date(chunk.dt * 1000)
        let day = date.getDate()

        // Calculate how many total days are included
        if (day !== dayNum) {
            dayData && days.push(dayData)
            dayNum = day
            dayData = []
        }
        dayData.push(chunk)
    })

    // Process each day
    days.forEach((day, i) => {
        let dayIconData = day.length === 8 ? day[4] : i === 0 ? day[0] : day[-1]
        let dayForecast = {
            icon: dayIconData.weather[0].icon,
            chunks: [],
        }
        day.forEach((dayItem, j) => {
            // console.log(dayItem)
            let time = getTime(dayItem)

            let main = dayItem.main
            let weather = dayItem.weather[0]
            // console.log(weather)
            if (j == 0) {
                dayForecast.date = `${time.month} ${time.day}`
                dayForecast.day = time.weekday
                dayForecast.short = time.short
            }
            let wind = getWind(dayItem)
            let dayItemObj = {
                desc: titleCase(weather.description),
                icon: weather.icon,
                low: Math.round(main.temp_min),
                high: Math.round(main.temp_max),
                humidity: main.humidity,
                windSp: wind.speed,
                windDir: wind.direction,
                deg: wind.deg,
                time: time.time,
            }
            dayForecast.chunks.push(dayItemObj)
        })
        daysData.push(dayForecast)
    })
    return daysData
}

export default weatherReducer
