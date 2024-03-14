import { useContext } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import WeatherIcon from './WeatherIcon'

function Current() {
    let { current, dispatch } = useContext(WeatherContext)
    console.log(current)

    return (
        <div
            id='current'
            className='mx-auto w-1/2 p-5 rounded-full flex justify-center flex-col items-center text-white relative'
        >
            <div className={`wrap absolute icon${current.icon}`}>
                <WeatherIcon icon={current.icon} />
            </div>
            <h1 className='text-6xl'>{current.name}</h1>
            <div className='temp flex justify-center items-center text-6xl'>
                {current.temp}
                <span className='deg'>°F</span>
            </div>
            <div className='desc text-xl'>{current.desc}</div>
            <div className='hiLo text-center text-2xl flex absolute w-full mx-5'>
                <div className='hi'>
                    <p>HIGH</p>{' '}
                    <p>
                        {current.high}
                        <span className='deg'>°F</span>
                    </p>
                </div>
                <div className='lo'>
                    <p>LOW</p>{' '}
                    <p>
                        {current.low}
                        <span className='deg'>°F</span>
                    </p>
                </div>
            </div>

            <div className='dateTime flex flex-col justify-center items center text-center mt-3 text-3xl rounded-full p-5'>
                <div className='date p-2'>{current.date}</div>
                <div className='time p-2'>{current.time}</div>
            </div>
        </div>
    )
}

export default Current
