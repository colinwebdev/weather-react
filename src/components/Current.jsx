import { useContext } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import WeatherIcon from './WeatherIcon'

function Current() {
    let { current, dispatch } = useContext(WeatherContext)
    // console.log(current)

    return (
        <div
            id='current'
            className='flex flex-col text-white relative grow h-full'
        >
            <div className='inner p-5 h-full'>
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

                <div className='iconBox flex justify-center w-full'>
                    <WeatherIcon icon={current.icon} />
                </div>
            </div>

            <div className='dateTime text-xl mt-auto flex justify-between rounded-b-full px-8 pt-2 pb-5'>
                <div className='date'>
                    <strong>{current.short}</strong> {current.date}
                </div>
                <div className='time'>{current.time}</div>
            </div>
        </div>
    )
}

export default Current
