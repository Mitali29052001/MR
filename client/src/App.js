import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Addpost from './pages/Addpost';


// eslint-disable-next-line no-unused-vars
import Profile from './pages/profile'
import Login from './pages/login';
import Register from './pages/register'
// eslint-disable-next-line no-unused-vars

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from './redux/actions/postAction';
import { getAllUsers } from "./redux/actions/userActions";

import Editprofile from './pages/editprofile';



function App() {
  const { loading } = useSelector((state) => state.alertsReducer);

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getAllPosts())
    dispatch(getAllUsers())
    
   
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route exact path="/profile/:userid" element={<PrivateRoute />}>
            <Route exact path="/profile/:userid" element={<Profile />} />
          </Route>
          <Route exact path='/Addpost' element={<PrivateRoute />}>
            <Route exact path='/Addpost' element={<Addpost />} />
          </Route>
          
          <Route exact path='/editprofile' element={<PrivateRoute />}>
            <Route exact path='/editprofile' element={<Editprofile />} />
          </Route>
      <Route path='/login' exact Component={Login}/>
      <Route path='/register' exact Component={Register}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
export const PrivateRoute = (props) => {
  const auth = null;
  if(localStorage.getItem('user')){
    return <Outlet{...props}/>
  }else{
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }  
}
