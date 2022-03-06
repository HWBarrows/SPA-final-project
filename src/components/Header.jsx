import UserAccount from "./UserAccount.jsx"
import Login from "./Login.jsx"
import { ProfileContext } from "../contexts/ProfileContext.jsx"
import { UserContext } from "../contexts/UserContext.jsx"
import { useContext } from "react"

export default function Header () {
    const [profile, setProfile] = useContext(ProfileContext)
    const [users] = useContext(UserContext)

    const test = users.filter(item => item.login.username==="brownrabbit417")
    
    //console.log(profile)
    //setProfile(...test)
    

    return (
        // if user is logged in show log out button, if not show log in button
        
        
        <div>
            Hi from Header
            {profile ? <button>Log out</button> : <Login/>}   
        </div>
        
    )
}