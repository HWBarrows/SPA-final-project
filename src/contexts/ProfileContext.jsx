
import React, { useState, useEffect }from "react";

export const ProfileContext = React.createContext();

export function ProfileContextProvider(props){
    const [profile, setProfile] = useState([])

    return(
        <ProfileContext.Provider value = {[profile, setProfile]}>
            {props.children}
        </ProfileContext.Provider>
    )
}
