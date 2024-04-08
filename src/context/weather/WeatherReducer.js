const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LOC':
            return {
                ...state,
                locData: action.payload,
                loading: false,
                error: null,
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        case 'SET_CURRENT':
            return {
                ...state,
                error: null,
                loading: false,
                current: action.payload,
            }
        case 'SET_FORECAST':
            return {
                ...state,
                error: null,
                loading: false,
                forecast: action.payload
            }
        case 'SET_OPEN':
            return {
                ...state,
                error: null,
                loading: false,
                openStatus: action.payload
            }
        default:
            return state
    }
}

export default weatherReducer
