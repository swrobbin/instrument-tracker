import React, {useContext} from 'react'
import {useParams, useNavigate, Link} from "react-router-dom"
import { UserContext } from '../context/user';
import InstrumentEditLink from './InstrumentEditLink'



const Instrument = (props) => {
    const { loggedIn, instruments, categories, onDelete } = useContext(UserContext)
    let { id } = useParams();
    let navigate = useNavigate();
    
    const handleDelete = (e) => {
        onDelete(e.target.id) 
        navigate('/instruments')   
    }

    if(loggedIn && instruments.length > 0 && categories.length > 0){
        const instrument = instruments.find(i => i.id === parseInt(id))
        const filteredCategory = categories.filter(c => c.id === instrument.category_id)
    
        return (
            <div id='instrument'>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2 id='instrument-header'>{instrument.brand} {instrument.name}</h2>
                <br/>
                <br/>
                <h4 id='instrument-category-header'> Category: {filteredCategory[0].name}s</h4>
                <br/>
                <br/>
                {/* <h3>Description</h3> */}
                <p className="instrument_description">{instrument.description}</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <button><Link to='/instruments'>Back To All Instruments</Link></button> 
                <br/>
                <br/>
                <InstrumentEditLink instrument={instrument} />
                <br/>
                <button  className="delete-button" id={instrument.id} onClick={handleDelete}>Delete</button> 
                <br/>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Please <Link to='/login'>Login</Link> into your Instrument Tracker Account.</h3>
                <br/>
                <h5>New to Instrument Tracker? Signup <Link to='/signup'> <em>here</em></Link></h5>
            </div>
        )
    }
    
}

export default Instrument
