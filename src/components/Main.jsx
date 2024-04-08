import Zip from './Zip'
import Current from './Current'
import DayBox from './DayBox'
import { useContext, useState } from 'react'
import WeatherContext from '../context/weather/WeatherContext'

function Main() {
    let { current, forecast } = useContext(WeatherContext)
    let keys = Object.keys(current)

    return (
        <div
            id='main'
            className={'wrap flex ' + (keys.length === 0 ? 'getZip' : '')}
        >
            {/* <div className='leftBox flex flex-col'> */}
                <div className='fixedWrap'>
                    <Zip />
                    {keys.length > 0 && <Current />}
                </div>
            {/* </div> */}
            {keys.length > 0 && (
                <>
                    <div className='rightBox grow flex flex-col'>
                        {forecast.map((item, i) => {
                            return <DayBox data={item} key={i} i={i} />
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

export default Main
