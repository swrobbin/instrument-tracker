import React from 'react'
import { Link } from 'react-router-dom';


const InstrumentEditLink = ({instrument}) => {
    return (
        <div>
            <br/>
                <Link to={`/instruments/${instrument.id}/edit`}>
                   <button className='button'>Edit</button> 
                </Link>
            <br/> 
        </div>
    )
}

export default InstrumentEditLink
