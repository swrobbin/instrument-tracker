import React, {useContext}  from 'react'
import { UserContext } from '../context/user';
import {useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import InstrumentLink from './InstrumentLink';




const Category = (props) => {
    const {loggedIn, categories, instruments } = useContext(UserContext)
    let { id } = useParams();
    // let navigate = useNavigate();
    const category = categories.find(c => c.id === parseInt(id))
    const filteredInstruments = instruments.filter(i => i.category_id === category.id )
    const categoryInstrumentList = filteredInstruments.map((instrument) => {
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
                <h2>{category.name}</h2>
                <Link to={'/instruments/new'} > <button>Add A New Instrument</button> </Link>

                {categoryInstrumentList}
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

export default Category
