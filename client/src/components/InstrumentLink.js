import React from 'react'
import { Link } from 'react-router-dom';


const InstrumentLink = ({instrument}) => {
    return (
        <div>
            <Link to={`/instruments/${instrument.id}`} className="each-instrument-link" >
            <br/>
            {instrument.name}
            <br/>
            </Link>
        </div>
    )
}

export default InstrumentLink
