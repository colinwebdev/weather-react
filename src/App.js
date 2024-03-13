import { WeatherProvider } from './context/weather/WeatherContext'
import Zip from './components/Zip'
import Current from './components/Current'

function App() {
    return (
        <WeatherProvider>
            <div className='wrap p-5 h-screen'>
                
                <Zip />
                <Current />
            </div>

        </WeatherProvider>
    )
}

export default App
