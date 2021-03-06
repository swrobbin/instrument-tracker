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
            if (data.error){
                setLoggedIn(false)
            } else {
                fetchCategories()
                fetchInstruments()
                setLoggedIn(true)
            }
        })
    }, [])

const fetchInstruments = () => {
    fetch('/instruments')
    .then(res => res.json())
    .then(data => {
        setInstruments(data)
    })
    
}
const fetchCategories = () => {
    fetch('/categories')
    .then(res => res.json())
    .then(data => {
        setCategories(data)
    })
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
    fetchCategories()
    fetchInstruments()
    setLoggedIn(true)
}
const logout = () => {
    setLoggedIn(false)
    setUser(null)
}
const signup = (user) => {
    setUser(user)
    fetchCategories()
    fetchInstruments()
    setLoggedIn(true)
}

return (
    <UserContext.Provider value={{onUpdate, onDelete, addCategory, user, categories, login, logout, signup, loggedIn, instruments, addInstrument}}>
        {children}
    </UserContext.Provider>
)
}
export { UserContext, UserProvider }; 