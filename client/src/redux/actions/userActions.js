import axios from "axios";
import {message} from 'antd'

export const userRegister =(values)=>async dispatch=>{
    
    dispatch({type:'LOADING' , payload:true})

    try {
        await axios.post('/api/users/register' , values)
        dispatch({type:'LOADING' , payload:false})
        message.success('User registered successfully')
        window.location.href='/login'
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('Invalid Credentials')
    }

}

export const userLogin =(values)=>async dispatch=>{
    
    dispatch({type:'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/login' , values)
        dispatch({type:'LOADING' , payload:false})
        message.success('Login success')
        localStorage.setItem('user' , JSON.stringify(response.data))
        window.location.href='/'
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('Invalid credentials')
    }

}

export const getAllUsers = (values) =>async dispatch=>{
    dispatch({type:'LOADING' , payload:true})

    try {
        const response = await axios.get('/api/users/getallusers')
        dispatch({type:'LOADING' , payload:false})
        dispatch({type:'GET_ALL_USERS' , payload:response.data})
        
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('something wrong')
    }

}
export const followUser = (values) =>async dispatch=>{
    dispatch({type:'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/followuser', values)
        dispatch({type:'LOADING' , payload:false})
        message.success('Successfully Followed')
        
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('something went wrong')
    }
    

}
export const unfollowUser = (values) =>async dispatch=>{
    dispatch({type:'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/unfollowuser', values)
        dispatch({type:'LOADING' , payload:false})
        message.success('Successfully Unfollowed')
        
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('something went wrong')
    }
    

}
export const editUser =(values)=>async dispatch=>{
    
    dispatch({type:'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/edit' , values)
        dispatch({type:'LOADING' , payload:false})
        message.success('User profile edit successfully')
        localStorage.setItem('user', JSON.stringify(response.data))
        window.location.href = `profile/${response.data._id}`
    } catch (error) {
        console.log(error)
        dispatch({type:'LOADING' , payload:false})
        message.error('Invalid Credentials')
    }

}
