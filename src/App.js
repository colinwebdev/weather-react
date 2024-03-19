import { WeatherProvider } from './context/weather/WeatherContext'
import Zip from './components/Zip'
import Current from './components/Current'

function App() {
    return (
        <WeatherProvider>
            <div className='wrap p-5 h-screen'>
                <div className='leftBox w-1/3 flex flex-col'>
                    <Zip />
                    <Current />
                </div>
                <div className="rightBox">
                
                </div>
            </div>
        </WeatherProvider>
    )
}

export default App
