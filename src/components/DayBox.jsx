import WeatherIcon from './WeatherIcon'
// import HourBox from './HourBox'
import HourRow from './HourRow'
import { useContext } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import { setOpen } from '../context/weather/WeatherActions'

function DayBox({ data, i }) {
    let { openStatus, forecast, dispatch } = useContext(WeatherContext)

    async function handleClick(e) {
        e.preventDefault()
        let openData = await setOpen(i, forecast.length, openStatus[i])
        dispatch({ type: 'SET_OPEN', payload: openData })
        console.log(forecast[i])
    }

    // const zipRef = useRef(null)
    return (
        <div
            className={`dayBox flex flex-col${
                openStatus[i] ? ' open' : ' closed'
            }${!openStatus.includes(true) ? ' full' : ''}`}
            onClick={handleClick}
        >
            <div className='top'>
                <div className='date'>
                    <h2>{data.short}</h2>
                    <h3>{data.date}</h3>
                </div>
                <div className='hiLo grow flex justify-center items-center gap-3'>
                    <div className='hi tempBox'>
                        <p>High</p>
                        <p className='temp'>
                            {data.hi}
                            <span className='deg'>°F</span>
                        </p>
                    </div>
                    <div className='low tempBox'>
                        <p>Low</p>
                        <p className='temp'>
                            {data.lo}
                            <span className='deg'>°F</span>
                        </p>
                    </div>
                </div>
                <WeatherIcon icon={data.icon} />
            </div>
            <div className='hours'>
                <table className='table-auto'>
                    <tbody>
                        {data.chunks.map((item, j) => {
                            return <HourRow key={j} data={item} />
                        })}
                    </tbody>
                </table>
            </div>

            {/* <div className='hours'>
                {data.chunks.map((item, j) => {
                    return <HourBox key={j} data={item} />
                })}
            </div> */}
        </div>
    )
}

export default DayBox
