import React, { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import { UserContext } from "../contexts/UserContext"

const FriendList = () => {
    const [users, setUsers] = useContext(UserContext)
    const [profile] = useContext(ProfileContext)
 
    const friends = users.sort(() => Math.random() - Math.random()).slice(0, 5)
    // console.log(friends);
   
    return (

        <>
        
        {profile && <div className='friends'> 
                        <p>Besties</p>
                        <ul>
                        {friends.map((friend,i )=> <li key={i}> <img src= { friend.picture.thumbnail }/>  {friend.name.first} {friend.name.last} </li>)}
                        </ul>
        
                    </div>}
                    
        </>
    )
}

export default FriendList