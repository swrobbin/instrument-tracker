import '../App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar';
import { UserProvider } from '../context/user';
import Signup from './Signup'; 
import Login from './Login';
import Instruments from './Instruments'
import InstrumentForm from './InstrumentForm';
import Categories from './Categories';
import Category from './Category';
import Instrument from './Instrument';
import InstrumentEditForm from './InstrumentEditForm';



function App() {
  return (
    <div className="App">
      <UserProvider>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/instruments' element={<Instruments/>} />
        <Route exact path='/instruments/:id' element={<Instrument/>} />
        <Route exact path='/categories' element={<Categories/>} />
        <Route exact path='/categories/:id' element={<Category/>} />
        <Route exact path='/instruments/:id/edit' element={<InstrumentEditForm/>}/>
        <Route exact path='/instruments/new' element={<InstrumentForm/>} />
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
