import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext.jsx'
import AccountDetailBox from "./AccountDetailBox.jsx"
import OurRoutes from "./OurRoutes.jsx"

const Nav = () => {

    const [profile, setProfile] = useContext(ProfileContext)
    const [displayAccountBox, setDisplayAccountBox] = useState(false)




  return (
    
    <nav>
                <div className="navWrapper">
                <ul className="landingList">  
                
                    <li><NavLink to="home"><div className="logo"></div></NavLink></li>
                    <li><NavLink to="aboutUs">About Us</NavLink></li>
                    <li><NavLink to="blog">Fashion</NavLink></li>
                    <li><NavLink to="music">Music</NavLink></li>
                    {/* <li><NavLink to="moreContent">More Content</NavLink></li> */}
                    <li><NavLink to="mentalHealth">Mind</NavLink></li>
                    <li><NavLink to="beauty">Beauty</NavLink></li>

                    {/* focus--------- */}
                    <li><NavLink to="userInfo">
                    {!profile && <div className="homeProfile">
                        <p>My Account</p>
                        <div className="defaultProfile"></div>
                        </div>}
                        </NavLink>
                    {profile && <div className="homeProfile">
                        {/* <p>Account</p> */}
                        <div className="profilePic" onClick={()=>setDisplayAccountBox(!displayAccountBox)} style={{backgroundImage:`url(${profile.picture.thumbnail})`}}></div>
                        {displayAccountBox && <AccountDetailBox /> }
                        </div>
                        }  
                    </li>
                    <li></li>
                </ul>
                
                <OurRoutes />




                </div>
            </nav>
    
  )
}

export default Nav