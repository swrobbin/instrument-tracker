import React, {useContext, useEffect, useState }  from 'react';
import { UserContext } from '../context/user';
import {useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import InstrumentLink from './InstrumentLink';




const Category = (props) => {
    const {loggedIn, categories, instruments } = useContext(UserContext)
    const [catToRender, setCatToRender] = useState('')
    const [instrumentsToRender, setInstrumentsToRender] = useState([])
    let { id } = useParams();
    const categoryInstrumentList = instrumentsToRender.map((instrument) => {
        return (
         <div key={instrument.id} className="instrument-link">
         <InstrumentLink key={instrument.id} instrument={instrument}/>
         </div>
        ) 
     })

     useEffect(() => {
        const category = categories.find(c => c.id === parseInt(id));
        setCatToRender(category);
        const filteredInstruments = instruments.filter(i => i.category_id === catToRender.id);
        setInstrumentsToRender(filteredInstruments)
     }, [loggedIn, categories, catToRender, id, instruments])


    if(loggedIn && catToRender && instruments && categories && catToRender !== ''){
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h2>{catToRender.name}</h2>
                <Link to={'/instruments/new'}> 
                    <button>Add A New Instrument</button> 
                </Link>
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
