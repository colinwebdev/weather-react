import { createContext, useReducer } from 'react'
import weatherReducer from './WeatherReducer'

let WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const initialState = {
        locData: [],
        current: {},
        forecast: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(weatherReducer, initialState)

    return (
        <WeatherContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext
