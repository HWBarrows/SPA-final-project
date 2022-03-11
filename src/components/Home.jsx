import { NavLink, useLocation } from "react-router-dom"
import { useContext } from "react"
import OurRoutes from "./OurRoutes.jsx"
import { ProfileContext } from '../contexts/ProfileContext.jsx'
import '../styles/Home.scss'
import Footer from "./Footer.jsx"


export default function Home() {

    const [profile, setProfile] = useContext(ProfileContext)
    console.log(profile);

    const homeLocation = useLocation().pathname
    console.log(homeLocation);

    //return conditional statement that renders a div of elements for landing page

    if (homeLocation ==="/home" || homeLocation ==="/") {
    return (
        <div className="homeWrapper">
            {/* <h1><NavLink to="home">Welcome home</NavLink></h1> */}
            <nav>
                <div className="navWrapper">
                <ul className="landingList">  
                
                    <li><h1><NavLink to="home">Welcome home</NavLink></h1></li>
               
                    <li><NavLink to="blog">Blog</NavLink></li>
                    <li><NavLink to="music">Music News</NavLink></li>
                    <li><NavLink to="moreContent">More Content</NavLink></li>
                    <li><NavLink to="userInfo">
                    {!profile && <div className="homeProfile">
                        <p>Account</p>
                        <div className="defaultProfile"></div>
                        </div>}

                    {profile && <div className="homeProfile">
                        <p>Account</p>
                        <div className="profilePic" style={{backgroundImage:`url(${profile.picture.thumbnail})`}}></div>
                        </div>}
                        </NavLink>
                    </li>
                </ul>
                
                <OurRoutes />
                </div>
            </nav>
            <div className="flexContainer">
                <div className="banner">
                    <div className="bannerPhoto"></div>
                    <div className="bannerText">
                    <h1>Lorem ipsum dolor sit amet.</h1>  
                    <p>Chupa chups liquorice soufflé lollipop croissant marshmallow. Carrot cake jelly chupa chups donut lemon drops. Croissant candy bear claw dessert oat cake cupcake pudding donut danish.</p>  
                    </div>
                </div>

                <div className="sidebar">
                    <div className="cute">
                        <div className="cutePhoto"></div>
                        <div className="cuteText">
                        <h3>Eye Bleach</h3>
                        <p>Cuteness overload, all the time</p>
                        </div>
                    </div>
                    <div className="advice">
                        <div className="advicePhoto"></div>
                        <div className="adviceText">
                        <h3>Ask an Auntie</h3>  
                        <p>Real answers to life's questions</p>  
                        </div>
                    </div>
                </div>
            </div>
                    <div className="mergeContainers">
                        <div className="moreCont">
                            <div className="morePhoto"></div>
                            <div className="moreText"></div>
                        </div>
                        <div className="moreCont">
                            <div className="morePhoto"></div>
                            <div className="moreText"></div>
                        </div>
                        <div className="moreCont">
                            <div className="morePhoto"></div>
                            <div className="moreText"></div>    
                        </div>
                    </div>
                
                    {/* <Footer/> */}
        </div>
    )
    } else {
        return (
            <div className="pageWrapper">
            <nav>
                <div className="navWrapper">
                <ul className="landingList">
                
                   <li><h1><NavLink to="home">Welcome home</NavLink></h1></li>
                
                    
                    <li><NavLink to="blog">Blog</NavLink></li>
                    <li><NavLink to="music">Music News</NavLink></li>
                    <li><NavLink to="moreContent">More Content</NavLink></li>
                    <li><NavLink to="userInfo">
                    {!profile && <div className="homeProfile">
                        <p>Account</p>
                        <div className="defaultProfile"></div>
                        </div>}

                    {profile && <div className="homeProfile">
                        <p>Account</p>
                        <div className="profilePic" style={{backgroundImage:`url(${profile.picture.thumbnail})`}}></div>
                        </div>}
                        </NavLink>
                    </li>                </ul>
                
                <OurRoutes />
                </div>
            </nav>    
            {/* <Footer/> */}
            </div>

            
        )
    }
}