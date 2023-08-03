import axios from "axios";

export const userRegister =(values)=>async dispatch=>{ 
    dispatch({type:'LOADING', payload:true}) //we are using redux thunk, values receive from ui
    try {
        await axios.post('/api/users/register', values)
        dispatch({type :'LOADING', payload:false})

    } catch (error) {
        console.log(error)
        dispatch({type :'LOADING', payload:false})

    }
}
export const userLogin =(values)=>async dispatch=>{ 
    dispatch({type:'LOADING', payload:true}) //we are using redux thunk, values receive from ui
    try {
        await axios.post('/api/users/login', values)
        dispatch({type :'LOADING', payload:false})

    } catch (error) {
        console.log(error)
        dispatch({type :'LOADING', payload:false})

    }
}