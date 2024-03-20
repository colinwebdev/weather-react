import { useContext } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import WeatherIcon from './WeatherIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Current() {
    let { current } = useContext(WeatherContext)
    // console.log(current)

    return (
        <div
            id='current'
            className='flex flex-col text-white relative grow'
        >
            <div className='inner p-5 grow'>
                <h1 className='text-4xl text-center'>{current.name}</h1>
                <div className='tempBox flex justify-center items-center'>
                    {current.temp}
                    <span className='deg'>°F</span>
                </div>
                <div className='desc text-3xl font-bold text-center py-3 my-3'>
                    {current.desc}
                </div>
                <div className='hiLo text-xl flex gap-5 items-center justify-center'>
                    <div className='hi'>
                        H: {current.high}
                        <span className='deg'>°F</span>
                    </div>
                    <div className='lo'>
                        L: {current.low}
                        <span className='deg'>°F</span>
                    </div>
                </div>
                <div className='wind flex gap-2 justify-center items-center'>
                    <div
                        className='arrowBox'
                        style={{
                            transform: `rotate(${current.deg}deg) scale(.75)`,
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </div>
                    <div className='text'>
                        {current.windSp}mph {current.windDir}
                    </div>
                </div>
                <div className='iconBox flex justify-center w-full'>
                    <WeatherIcon icon={current.icon} />
                </div>
            </div>

            <div className='dateTime '>
                <div className='date'>
                    <strong>{current.short}</strong> {current.date}
                </div>
                <div className='time'>{current.time}</div>
            </div>
        </div>
    )
}

export default Current
