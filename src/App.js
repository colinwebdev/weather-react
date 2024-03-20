import { WeatherProvider } from './context/weather/WeatherContext'
import Main from './components/Main'

function App() {
    return (
        <WeatherProvider>
            <Main />
        </WeatherProvider>
    )
}

export default App
