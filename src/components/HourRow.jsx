import WeatherIcon from './WeatherIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function HourRow(data) {
    let hourData = data.data
    return (
        <tr className='hour w-full'>
            <td className='icon'>
                <WeatherIcon icon={hourData.icon} />
            </td>
            <td className='time'>{hourData.time}</td>
            <td className='temp'>
                <div className='tempWrap'>
                    <div className='lo tempBox'>
                        Lo
                        <p>
                            {hourData.low}
                            <span className='deg'>°F</span>
                        </p>
                    </div>
                    <div className='hi tempBox'>
                        Hi
                        <p>
                            {hourData.high}
                            <span className='deg'>°F</span>
                        </p>
                    </div>
                </div>
            </td>
            <td className='windBox'>
                <div className='wind'>
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
            </td>
        </tr>
    )
}

export default HourRow
