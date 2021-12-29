import '../App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import { UserProvider } from '../context/user';
import Signup from './Signup' 
import Login from './Login'



function App() {
  return (
    <div className="App">
      <UserProvider>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/login' element={<Login/>} />
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
