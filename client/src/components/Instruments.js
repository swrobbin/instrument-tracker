import React, { useContext } from 'react'
import { UserContext } from "../context/user"
import { Link } from 'react-router-dom';
import InstrumentLink from './InstrumentLink';

const Instruments = () => {
    const { instruments, loggedIn } = useContext(UserContext);

    const list = instruments.map((instrument) => {
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
                {list}
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
