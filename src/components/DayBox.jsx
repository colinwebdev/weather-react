import WeatherIcon from './WeatherIcon'
import HourBox from './HourBox'

function DayBox({ data, i }) {
    return (
        <div className={'dayBox flex flex-col ' + (i === 1 ? 'open' : 'closed')}>
            <div className={'top ' + (i === 0 ? ' topBox' : 'lowerBox')}>
                <div className='date'>
                    <h2>{data.short}</h2>
                    <h3>{data.date}</h3>
                </div>
                <div className="hiLo grow text-center">
                Hi Lo
                </div>
                <WeatherIcon icon={data.icon} />
            </div>
            <div className="hours">
                {data.chunks.map((item, j)=>{
                    return <HourBox key={j} data={item}/>
                })}
            </div>
        </div>
    )
}

export default DayBox
