import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileContext } from '../contexts/ProfileContext.jsx'


const AccountDetailBox = () => {
    const [profile, setProfile] = useContext(ProfileContext)

  return (
        // profile  cha... 
        <ul>
            <li>{profile.login.username}</li>
            <li><NavLink to="userInfo">My Profile
                </NavLink>
            </li>
            <li><a style={{cursor:"pointer"}} onClick={()=> { setProfile(false) } }>Log out</a></li>
        </ul>



    )
}

export default AccountDetailBox