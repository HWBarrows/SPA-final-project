import { useContext } from "react"
import { UserContext } from "../contexts/UserContext.jsx"
import { ProfileContext } from "../contexts/ProfileContext.jsx"

export default function UserAccount(){

    //this is how we search for and add new users
    const [users, setUsers] = useContext(UserContext)

    //this is to dynamically personalize the profile component
    const [profile, setProfile] = useContext(ProfileContext)
        
    
//filter and then return : 
// login, email, picture, registered.age > 18
    // console.log(users)
    return (
        <div>
            <div className="profile">
                {/* {users.map(user => 
                    <p>{user.login.username}, {user.email}</p>
                )} */}

                PROFILE
            </div>
            
               
        </div>
    )
}