import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'


const Login = () => {
    const { login } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userError, setUserError] = useState('')


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
            } else {
                login(user)
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
                    <label>Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form> 
                {userError.length > 1 ? <p style={{color:"red"}} >{userError}</p> : null}
            </div>
    )
}

export default Login
