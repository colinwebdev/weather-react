const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ZIP':
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        
        default:
            return state
    }
}

export default weatherReducer
