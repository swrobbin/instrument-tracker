import React from 'react'
import { Link } from 'react-router-dom';



const InstrumentLink = ({instrument}) => {
    

    return (
        <div >
            <Link to={`/instruments/${instrument.id}`}  >
            <h4><b>{instrument.brand}</b></h4>
            <h4>{instrument.name}</h4>
            </Link>
        </div>
    )
    // id="instr-link"
}

export default InstrumentLink
