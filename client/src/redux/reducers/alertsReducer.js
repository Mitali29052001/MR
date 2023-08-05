const initialState = {}

const alertsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOADING': return{
            ...state,
            loading : action.payload
        } 
        case 'FOLLOW_LOADING' : return{
            ...state,
            followLoading : action.payload
        }
        default:
            return state;
    }
}


export default alertsReducer