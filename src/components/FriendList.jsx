import React, { useContext } from 'react'
import { UserContext } from "../contexts/UserContext"

const FriendList = () => {
    const [users, setUsers] = useContext(UserContext)
 
    const friends = users.sort(() => Math.random() - Math.random()).slice(0, 5)
   
    return (
    <div>
        FriendList
        <ul>
        {friends.map((friend,i )=> <li key={i}> <img src= { friend.picture.thumbnail }/>  {friend.name.first} {friend.name.last} </li>)}
        </ul>
        
        </div>
    )
}

export default FriendList