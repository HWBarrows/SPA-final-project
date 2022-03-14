import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileContext } from '../contexts/ProfileContext.jsx'
import '../styles/AccountDetailBox.scss'


const AccountDetailBox = ({setDisplayAccountBox}) => {
    const [profile, setProfile] = useContext(ProfileContext);

    console.log(profile);

  return (
        <ul className='accountBox'>
            <li>Hi {profile.login.username}</li>
            <li onClick={()=>{setDisplayAccountBox(false)}}><NavLink to="userInfo">My Profile
                </NavLink>
            </li>
            <li><a style={{cursor:"pointer"}} onClick={()=> { setProfile(false) && setDisplayAccountBox(false)} }>Log out</a></li>
        </ul>



    )
}

export default AccountDetailBox