const initialState = {
    loading:false,
    likeorunlikeloading: false,
    followloading: false,
    addCommentLoading: false,

}

const alertsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOADING': return{
            ...state,
            loading : action.payload
        } 
        case 'FOLLOW_LOADING': return{
            ...state,
            followloading : action.payload
        } 
        case 'UNFOLLOW_LOADING': return{
            ...state,
            unfollowloading : action.payload
        }
        case 'ADD_COMMENT_LOADING': return{
            ...state,
            addCommentLoading : action.payload
        }
        default:
            return state;
            
    }
}


export default alertsReducer