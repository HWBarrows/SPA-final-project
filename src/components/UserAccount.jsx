import { useContext, useEffect } from "react"
import { UserContext } from "../contexts/UserContext.jsx"
import { ProfileContext } from "../contexts/ProfileContext.jsx"


export default function UserAccount() {

    //this is how we search for and add new users
    const [users, setUsers] = useContext(UserContext)
    
    
    const [profile, setProfile ] = useContext(ProfileContext)

    
    
     //console.log(profile.login);
    
        
         return( 
             <div className="profile">
                
            {profile &&  <div className="userDetails">
                    
                    <div className="userPhoto" style={{backgroundImage:`url(${profile.picture.large})`}}></div>
                    <h3>Name: {profile.name.first} {profile.name.last}</h3>
                    <p>Username: {profile.login.username}</p>
                    <p>Email: {profile.email}</p>
                    
                   
                </div>}

           
             </div>
         )
                

            
        
         
}