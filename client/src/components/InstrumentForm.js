import React, { useState } from 'react'
import { UserContext } from "../context/user"

const InstrumentForm = () => {
    const { addInstrument, loggedIn } = useContext(UserContext);
    const [modelName, setModelName] = useState('')
    const [brandName, setBrandName] = useState('')
    const [description, setDescription] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault()
        addInstrument({
            modelName: modelName, 
            brandName: brandName, 
            description: description  
        })
    }



    if(loggedIn){
        return (
            <div>
                <br/>
            <p>Add a new instrument to your collection:</p>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Model Name</label>
                <br/>
                <input type="text" value={modelName} id="modelName" onChange={(e) => setModelName(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <label>Brand Name</label>
                <br/>
                <input type="text" value={brandName} id="brandName" onChange={(e) => setBrandName(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <label>Description</label>
                <br/>
                <textarea type="text" id="description" rows="10" cols="50" value={description}  onChange={(e) => setDescription(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
            </div>
        ) 
    } else {
        return (
            <div>
               <h3>Not Authorized!</h3> 
            </div>
        )
    }
    
}

export default InstrumentForm
