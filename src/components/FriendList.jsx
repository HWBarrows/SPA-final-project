import React, { useContext, useState } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import { UserContext } from "../contexts/UserContext"
import ChatBox from './ChatBox.jsx'

const FriendList = () => {
    const [users, setUsers] = useContext(UserContext)
    const [profile] = useContext(ProfileContext)
    const [friendsToChat, setFriendsToChat] = useState([])
 
    const friends = users.slice(5,10) //.sort(() => Math.random() - Math.random()).slice(0, 5)

    

    function openChatBox(friend){

        // if that friend already exists on the array, dont keep on adding it double triple times. 
        // console.log(friendsToChat);
        // console.log(friend);
        const existingFriend = friendsToChat.find((item) => item.email === friend.email)
        // "friend"

        // if exisitingFriend { return }
        
        if(!existingFriend){
        setFriendsToChat([...friendsToChat, friend])
        }
        // ["monika ghimire", "dipesh gatuam"]

        // e.target.innerText
 

    }

    
    

    return (

        <>
        
        {profile && <div className='friends'> 
                        <h3>Besties</h3>
                        <ul className='friendlist'>
                        {friends.map((friend,i ) => 
                            <li onClick={()=>{openChatBox(friend)}} key={i}> 
                                <img src= { friend.picture.thumbnail }/>  
                                {friend.name.first} {friend.name.last} 
                                
                                {/* { if chatbox state is true, create ChatBox component.   } */}



                            </li>)}
                        </ul>
                        <div style={{display:"flex", flexDirection:"row"}} className='chatContainerArea'>
                        {friendsToChat.map((friend,i)=> <ChatBox key={i} name={friend.name.first} />)}
                        </div>
                    </div>}


                    
        </>
    )
}


export default FriendList