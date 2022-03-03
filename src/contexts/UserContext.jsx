import React, { useState, useEffect }from "react";

export const UserContext = React.createContext();




export function UsersContextProvider (props) {
    const [users, setUsers] = useState([])
    

    useEffect(function() {
       
        
        fetch("https://randomuser.me/api/?results=5000")
            .then(response => response.json())
            .then(response => {
                setUsers(response.results)
            })
            
            
    }, [])
    
    
    return(
        <UserContext.Provider value = {[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}