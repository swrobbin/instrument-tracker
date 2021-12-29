import React, { useState } from 'react'
import { UserContext } from "../context/user"

const Instruments = () => {
    const { instruments, loggedIn } = useContext(UserContext);


    if(loggedIn){
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h2>Instruments</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Not authorized!</h3>
                <p> Login to see your nstruments</p>
            </div>
        )
    }
    
}

export default Instruments
