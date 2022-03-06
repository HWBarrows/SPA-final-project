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
    
   
    
    

    //filter and then return : 
    // login, email, picture, registered.age > 18
    //if (testProfile.login.username) {

       
           
        
         return( 
             <div className="profile">
                
                <div className="userDetails">
                    
                    {profile && <div className="userPhoto" style={{backgroundImage:`url(${profile.picture.large})`}}></div>}
                    {/* {profile.map(item => {
                    return <div><div className="userPhoto" style={{backgroundImage:`url(${item.picture.large})`}}></div>
                    <h1>{item.login.username}</h1><p>{item.login.password}</p></div>})} */}
                </div>
             </div>
         )
                

            
        
         
}