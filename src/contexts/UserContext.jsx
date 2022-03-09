import React, { useState, useEffect }from "react";
export const UserContext = React.createContext()
import userObject from '../components/data.json'




export function UsersContextProvider (props) {
    const editedUsers = userObject.filter((item, index)=> index <11)
    console.log(editedUsers);

    const [users, setUsers] = useState(userObject)
    console.log(users);
    
    //setUsers(userObject)

    // useEffect(function() {
       
        
    //     fetch("https://randomuser.me/api/?results=50")
    //         .then(response => response.json())
    //         // .then(response => {
    //         //     setUsers(response.results)
    //         // })
            
            
    // }, [])
    
   
    return(
        <UserContext.Provider value = {[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}