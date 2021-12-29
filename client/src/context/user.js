import React, { useState, useEffect } from "react";

// Create Context
const UserContext = React.createContext();

// Create Provider Component
function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    }, [])
const login = (user) => {
    setUser(user)
}
const logout = () => {
    
}
const signup = () => {
    
}

return (
    <UserContext.Provider value={{user, login, logout, signup}}>
        {children}
    </UserContext.Provider>
)
}
export { UserContext, UserProvider }; 