import UserAccount from "./UserAccount.jsx"
import Login from "../components/Login/Login.jsx"

export default function Header () {
    
    return (
        <div>
            Hi from Header
            <UserAccount/>
            <Login/>
        </div>
    )
}