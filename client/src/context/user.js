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
                // setLoggedIn(true)
            } else {
                fetchInstruments()
                fetchCategories()
                // debugger
                setLoggedIn(true)
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
    // .then(setLoggedIn(true))
}

const addInstrument = (instrument) => {
    const localInstrument = instrument.instrument.category_attributes.name
    fetch('/instruments', {
        method: "POST",
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(instrument)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setInstruments([...instruments, data])
        if (localInstrument){
            setCategories([...categories, {id: data.category_id, name:localInstrument}])
        } 
        
    })
}
const onDelete = (id) => {
    fetch(`/instruments/${id}`, 
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"}   
        })
        .then(() => {
            const instrument = instruments.find((i) => i.id === parseInt(id))
            const updatedInstruments = instruments.filter(i => i.id !== parseInt(instrument.id))
            setInstruments(updatedInstruments)
        })
}

const onUpdate = (editedInstrument) => {
    const editedInstruments = instruments;
    const updatedInstruments = editedInstruments.map((instrument) => {
        if (instrument.id !== editedInstrument.id){
            return instrument
        } else {
            return editedInstrument
        }
    })
    setInstruments(updatedInstruments)
}

const addCategory = (newCategory) => {
    setCategories([...categories, newCategory])
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
    <UserContext.Provider value={{onUpdate, onDelete, addCategory, user, categories, login, logout, signup, loggedIn, instruments, addInstrument}}>
        {children}
    </UserContext.Provider>
)
}
export { UserContext, UserProvider }; 