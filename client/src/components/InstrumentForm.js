import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const InstrumentForm = () => {
    const { addInstrument, loggedIn, categories } = useContext(UserContext);
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault()
        addInstrument({ instrument:
            {name: name,
            brand: brand, 
            description: description,
            category_id: categoryId,
            category_attributes: {name: categoryName}}
        })
        navigate('/instruments')
    }

    const optionsList = categories.map((c) => {
        return (<option className="dropdown-content" key={c.id} value={c.id}>{c.name}</option>)
        })

    if(loggedIn){
        return (
            <div id='home'>
                <br/>
            <p>Add a new instrument to your collection:</p>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Model Name</label>
                <br/>
                <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <label>Brand Name</label>
                <br/>
                <input type="text" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <label>Description</label>
                <br/>
                <textarea type="text" id="description" rows="10" cols="50" value={description}  onChange={(e) => setDescription(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <h3>Choose from existing instrument categories or create a new category below:</h3>
                <br/>
                <label>New Category Name:</label>
                <br/>
                <input type="text" id="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                <br/>
                <br/>
                <label >Categories:</label>
                <br/>
                <select name="categories" defaultValue="" id="categories" onChange={(e) => setCategoryId(e.target.value)}>
                <option value="" disabled> -- select an option -- </option>
                    {optionsList}
                </select>
                <br/>
                <br/>
                <input id='add-button' type="submit"/>
            </form>
            </div>
        ) 
    } else {
        return (
            <div>
               <h3>Not Authorized!</h3> 
               <h3>Please <Link to='/login'>Login</Link> into your Instrument Tracker Account.</h3>
            </div>
        )
    }
    
}

export default InstrumentForm
