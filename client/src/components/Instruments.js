import React, { useContext, useState } from 'react'
import { UserContext } from "../context/user"
import { Link } from 'react-router-dom';
import InstrumentLink from './InstrumentLink';

const Instruments = () => {
    const { instruments, loggedIn } = useContext(UserContext);
    const [search, setSearch] = useState('')

    const filteredInstruments = instruments.filter(instrument => {
        if (search === ''){
            return instrument
        } else if (instrument.name.toLowerCase().includes(search.toLowerCase()) || instrument.brand.toLowerCase().includes(search.toLowerCase())){
            return instrument
        } else {
           return null}
        
    }) 

    const list = filteredInstruments.map((instrument) => {
        return (
         <div className="instrument-link">
         <InstrumentLink key={instrument.id} instrument={instrument}/>
         </div>
        ) 
     })


    if(loggedIn){
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h2>Instruments</h2>
                <Link to={'/instruments/new'} > <button>Add A New Instrument</button> </Link>
                <br/>
                <br/>
                <br/>
                <input type="text/" placeholder="Search Instruments..." id="search" value={search} onChange={event => setSearch(event.target.value)}/>
                <br/>
                <br/>
                <br/>
                <div className="grid-container">
                {list}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Not authorized!</h3>
                <p> <Link to={'/login'}> <button>Login</button></Link> to see your Instruments</p>
            </div>
        )
    }
    
}

export default Instruments
