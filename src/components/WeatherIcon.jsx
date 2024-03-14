import img01d from '../assets/images/01d.png'
import img01n from '../assets/images/01n.png'
import img02d from '../assets/images/02d.png'
import img02n from '../assets/images/02n.png'
import img03d from '../assets/images/03d.png'
import img03n from '../assets/images/03n.png'
import img04d from '../assets/images/04d.png'
import img04n from '../assets/images/04n.png'
import img09d from '../assets/images/09d.png'
import img09n from '../assets/images/09n.png'
import img10d from '../assets/images/10d.png'
import img10n from '../assets/images/10n.png'
import img11d from '../assets/images/11d.png'
import img11n from '../assets/images/11n.png'
import img13d from '../assets/images/13d.png'
import img13n from '../assets/images/13n.png'
import img50d from '../assets/images/50d.png'
import img50n from '../assets/images/50n.png'

function WeatherIcon({ icon }) {
    let iconVar
    let alt
    switch (icon) {
        case '01d':
            iconVar = img01d
            alt = 'Clear'
            break
        case '01n':
            iconVar = img01n
            alt = 'Clear'
            break
        case '02d':
            iconVar = img02d
            alt = 'Partial Clouds'
            break
        case '02n':
            iconVar = img02n
            alt = 'Partial Clouds'
            break
        case '03d':
            iconVar = img03d
            alt = 'Light Clouds'
            break
        case '03n':
            iconVar = img03n
            alt = 'Light Clouds'
            break
        case '04d':
            iconVar = img04d
            alt = 'Cloudy'
            break
        case '04n':
            iconVar = img04n
            alt = 'Cloudy'
            break
        case '09d':
            iconVar = img09d
            alt = 'Rain'
            break
        case '09n':
            iconVar = img09n
            alt = 'Rain'
            break
        case '10d':
            iconVar = img10d
            alt = 'Rain with breaks'
            break
        case '10n':
            iconVar = img10n
            alt = 'Rain with breaks'
            break
        case '11d':
            iconVar = img11d
            alt = 'Thunderstorms'
            break
        case '11n':
            iconVar = img11n
            alt = 'Thunderstorms'
            break
        case '13d':
            iconVar = img13d
            alt = 'Snow'
            break
        case '13n':
            iconVar = img13n
            alt = 'Snow'
            break
        case '50d':
            iconVar = img50d
            alt = 'Fog'
            break
        case '50n':
            iconVar = img50n
            alt = 'Fog'
            break
        default:
            break
    }
    
    return <img src={iconVar} alt={alt} />
}

export default WeatherIcon
