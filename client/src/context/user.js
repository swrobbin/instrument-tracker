import React, { useState, useEffect } from "react";

// Create Context
const UserContext = React.createContext();

// Create Provider Component
function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [instruments, setInstruments] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            // console.log(data, "from /me fetch")
            if (data.error){
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                fetchInstruments()
                fetchCategories()
            }
            
            
        })
    }, [])

const fetchInstruments = () => {
    fetch('/instruments')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setInstruments(data)
    })
}
const fetchCategories = () => {
    fetch('/categories')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setCategories(data)
    })
}

const addInstrument = (instrument) => {
    fetch('/instruments', {
        method: "POST",
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(instrument)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setInstruments([...instruments, data])
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
    <UserContext.Provider value={{user, categories, login, logout, signup, loggedIn, instruments, addInstrument}}>
        {children}
    </UserContext.Provider>
)
}
export { UserContext, UserProvider }; 