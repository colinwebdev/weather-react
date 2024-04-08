import WeatherIcon from './WeatherIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function HourBox(data) {
    let hourData = data.data
    return (
        <div className='hour flex justify-between'>
            <WeatherIcon icon={hourData.icon} />
            <div className='time'>{hourData.time}</div>
            <div className='lo'>L: {hourData.low}</div>
            <div className='hi'>H: {hourData.high}</div>
            <div className='wind flex gap-2'>
                <div
                    className='arrowBox'
                    style={{
                        transform: `rotate(${hourData.deg}deg) scale(.75)`,
                    }}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
                <div className='text'>
                    {hourData.windSp}mph {hourData.windDir}
                </div>
            </div>
        </div>
    )
}

export default HourBox
