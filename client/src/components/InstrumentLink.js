import React from 'react'
import { Link } from 'react-router-dom';



const InstrumentLink = ({instrument}) => {
    return (
        <div>
            <Link to={`/instruments/${instrument.id}`} className="each-instrument-link" >
            {/* <br/> */}
            <h4>{instrument.brand} - {instrument.name}</h4>
            {/* <br/> */}
            </Link>
        </div>
    )
}

export default InstrumentLink
