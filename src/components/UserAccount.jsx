import { useContext } from "react"
import { UserContext } from "../contexts/UserContext.jsx"

export default function UserAccount(){

    const [users, setUsers] = useContext(UserContext);

    
    
//filter and then return : 
// login, email, picture, registered.age > 18
    console.log(users)
    return (
        <div>
            <div className="profile">
                {users.map(user => 
                    <p>{user.login.username}, {user.email}</p>
                )}
            </div>
            
               
        </div>
    )
}