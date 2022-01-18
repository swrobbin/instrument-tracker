import React from 'react'
import { Link } from 'react-router-dom';



const InstrumentLink = ({instrument}) => {
    return (
        <div >
            <Link to={`/instruments/${instrument.id}`}  >
            <h4>{instrument.brand} - {instrument.name}</h4>
            </Link>
        </div>
        // className="instrument-link"
    )
}

export default InstrumentLink
