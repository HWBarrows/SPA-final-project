import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext.jsx"
import { ProfileContext } from "../contexts/ProfileContext.jsx"
import '../styles/UserAccount.scss'

export default function UserAccount() {

    //this is how we search for and add new users
    const [users, setUsers] = useContext(UserContext)
    
    
    //this is to dynamically personalize the profile component
    const [profile] = useContext(ProfileContext)
    
    console.log(profile);
    
        
         return( 
             <div className="profile">
                
            {profile &&  <div className="userDetails">
                    
                    <div className="userPhoto" style={{backgroundImage:`url(${profile.picture.large})`}}></div>
                    <h3>{profile.name.first} {profile.name.last}</h3>
                    <p>{profile.login.username}</p>
                    <p>{profile.email}</p>
                    
                </div>}
             </div>
         )
                

            
        
         
}