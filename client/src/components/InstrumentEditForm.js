import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import { UserContext } from '../context/user'

const InstrumentEditForm = () => {
    const {loggedIn, instruments, onUpdate, categories } = useContext(UserContext)
    const { id } = useParams();
    const navigate = useNavigate();
    const [editedInstrument, setEditedInstrument] = useState("test")
    
        
    useEffect(() => {
            const instrumentToEdit = instruments.find((i) => i.id === parseInt(id))
            setEditedInstrument(instrumentToEdit);
    }, [instruments, categories, id, editedInstrument])
 
    const handleChange = (e) => {
        if (e.target.name === "categoryName"){
            setEditedInstrument({
                ...editedInstrument, category_attributes: {name: e.target.value}
            })
        } else {
            setEditedInstrument({
                ...editedInstrument, [e.target.name]: e.target.value
                })
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/instruments/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(editedInstrument)    
        })
        .then(r => r.json())
        .then(data => {
            onUpdate(data)
            navigate(`/instruments/${id}`)
        })
    }
   
    
    if(loggedIn && editedInstrument){
        const optionsList = categories.map((c) => {
            return (<option key={c.id} value={c.id}>{c.name}</option>)
            })
        return (
            <div>
                <p>Edit Instrument Below</p>
                <form onSubmit={handleSubmit}>
                <label>Model Name</label>
                <br/>
                <input type="text" value={editedInstrument.name} id="name" name="name" onChange={handleChange}/>
                <br/>
                <br/>
                <br/>
                <label>Brand Name</label>
                <br/>
                <input type="text" value={editedInstrument.brand} id="brand" name="brand" onChange={handleChange}/>
                <br/>
                <br/>
                <br/>
                <label>Description</label>
                <br/>
                <textarea type="text" id="description" name="description" rows="10" cols="50" value={editedInstrument.description}  onChange={handleChange}/>
                <br/>
                <br/>
                <h3>Choose from existing instrument categories or create a new category below:</h3>
                <br/>
                <label>New Category Name:</label>
                <br/>
                <input type="text" id="categoryName" name="categoryName" value={editedInstrument.categoryName} onChange={handleChange}  />
                <br/>
                <br/> 
                <label >Categories:</label>
                <br/>
                <select name="category_id" value={editedInstrument.category_id} id="categories" onChange={handleChange} >
                <option value="" disabled> -- select an option -- </option>
                    {optionsList}
                </select>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
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

export default InstrumentEditForm
