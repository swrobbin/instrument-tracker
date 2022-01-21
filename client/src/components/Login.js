import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
    const { login } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userError, setUserError] = useState('')
    const [formFlag, setFormFlag] = useState(false)
    const navigate = useNavigate()


    const handleLoginSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST", 
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                username: username, 
                password: password
            })
        })
        .then(res => res.json())
        .then((user) => {
            if (user.error){
                setUserError(user.error)
                setFormFlag(true)
            } else {
                login(user)
                navigate('/')
            }
           
        })
    }
    return (
        <div className="login">
                <br/>
                <h3>Please Login</h3> 
                <form onSubmit={handleLoginSubmit}>
                    <label>Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <br/>  
                    <label>Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <br/>
                    <input id='add-button' type="submit"/>
                </form> 
                {userError.length > 1 ? <p style={{color:"red"}} >{userError}</p> : null}
                {formFlag ?  <Link to={'/signup'}><button>Create an Account</button></Link> : null}
            </div>
    )
}

export default Login
