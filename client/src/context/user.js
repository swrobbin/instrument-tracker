import React, { useState, useEffect } from "react";

// Create Context
const UserContext = React.createContext();

// Create Provider Component
function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [instruments, setInstruments] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error){
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                fetchInstruments()
            }
            
            
        })
    }, [])

const fetchInstruments = () => {
    fetch('/instruments')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setInstruments(data)
    })
}

const addInstrument = (instrument) => {
    fetch('/instruments', {
        method: "POST",
        headers: { 'Content-Type': 'application.json'},
        body: JSON.stringify(instrument)
    })
    .then(res => res.json())
    .then(data => {
        setInstruments(...instruments, data)
    })
}

const login = (user) => {
    setUser(user)
    setLoggedIn(true)
}
const logout = () => {
    setUser(null)
    setLoggedIn(false)
}
const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
}

return (
    <UserContext.Provider value={{user, login, logout, signup, loggedIn, instruments, addInstrument}}>
        {children}
    </UserContext.Provider>
)
}
export { UserContext, UserProvider }; 