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
            <div>
                <h2>Model: {instrument.name}</h2>
                <br/>
                <p>Brand: {instrument.brand}</p>
                <br/>
                <p>Category: {filteredCategory[0].name}</p>
                <br/>
                <br/>
                <h3>Description</h3>
                <p>{instrument.description}</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <InstrumentEditLink instrument={instrument} />
                <button  className="button" id={instrument.id} onClick={handleDelete}>Delete</button> 
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
