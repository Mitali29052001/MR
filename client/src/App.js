// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Addpost from './pages/Addpost';
import profile from './pages/profile';
import login from './pages/login';
import register from './pages/register'
// eslint-disable-next-line no-unused-vars
import Default from './components/Default'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from './redux/actions/postAction';
import AllUsers from './pages/AllUsers';


function App() {
  const { loading , likeOrUnlikeLoading} = useSelector((state) => state.alertsReducer);

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getAllPosts())
    
   
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/Profile' exact Component={profile}/>
      <Route path='/Addpost' exact Component={Addpost}/>
      <Route path='/login' exact Component={login}/>
      <Route path='/register' exact Component={register}/>
      <Route path='/allusers' exact Component={AllUsers}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;