import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE", 
            headers: { 'Content-Type' : 'application/json'}
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn) {
        return (
            <div>
                <h2>Instrument Tracker</h2>
                <br/>
                <br/>
                <Link to='/'  style={{ textDecoration: 'none', padding: "10px" }}>
                    Home   
                </Link>
                <Link to='/instruments' style={{ textDecoration: 'none' }}>
                     Instruments   
                </Link>
                <button  className="button" onClick={logoutUser}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
               <h1>Instrument Tracker</h1>
            </div>
        )
    }
    
}

export default Navbar
