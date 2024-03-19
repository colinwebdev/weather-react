import { useContext } from 'react'
import WeatherContext from '../context/weather/WeatherContext'

function DayBox() {
    let { forecast, dispatch } = useContext(WeatherContext)
    // console.log(forecast)
  return (
    <div>
      Day
    </div>
  )
}

export default DayBox
