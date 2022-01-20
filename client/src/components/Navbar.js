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
            <div className="navbar">
                <h2 className="title" id="logo">Instrument Tracker</h2>
                <br/>
                <br/>
                <div id="navs"><strong>
                    <Link to='/'  style={{ textDecoration: 'none', padding: "40px"  }}>
                        Home   
                    </Link>
                    
                    <Link to='/instruments' style={{ fontWeight: "bold", textDecoration: 'none', padding: "30px" }}>
                        Instruments   
                    </Link>
                    <button  id='add-button' className="button" onClick={logoutUser}>Logout</button>
                    </strong>
                </div>
                
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
