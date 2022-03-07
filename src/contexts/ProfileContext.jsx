
import React, { useState }from "react";

export const ProfileContext = React.createContext();

export function ProfileContextProvider(props){
    const [profile, setProfile] = useState(false)

    return(
        <ProfileContext.Provider value = {[profile, setProfile]}>
            {props.children}
        </ProfileContext.Provider>
    )
}
