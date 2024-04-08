import WeatherIcon from './WeatherIcon'
import HourBox from './HourBox'
import { useContext } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import { setOpen } from '../context/weather/WeatherActions'

function DayBox({ data, i }) {
    let { openStatus, forecast, dispatch } = useContext(WeatherContext)

    async function handleClick(e) {
        e.preventDefault()
        let openData = await setOpen(i, forecast.length, openStatus[i])
        dispatch({ type: 'SET_OPEN', payload: openData })
    }

    // const zipRef = useRef(null)
    return (
        <div
            className={
                'dayBox flex flex-col ' + (openStatus[i] ? 'open' : 'closed')
            }
            onClick={handleClick}
        >
            <div className={'top ' + (i === 0 ? ' topBox' : 'lowerBox')}>
                <div className='date'>
                    <h2>{data.short}</h2>
                    <h3>{data.date}</h3>
                </div>
                <div className='hiLo grow text-center'>Hi Lo</div>
                <WeatherIcon icon={data.icon} />
            </div>
            <div className='hours'>
                {data.chunks.map((item, j) => {
                    return <HourBox key={j} data={item} />
                })}
            </div>
        </div>
    )
}

export default DayBox
