import { NavLink, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import '../styles/Home.scss'
import AccountDetailBox from "./AccountDetailBox.jsx"
import Nav from "./Nav.jsx"
import {mentalHealthArticles} from '../dataSources/mentalHealth.js'
import { beautyArray } from '../dataSources/beauty.js'



export default function Home() {

    const homeLocation = useLocation().pathname
    // console.log(homeLocation);

    //return conditional statement that renders a div of elements for landing page

    if (homeLocation ==="/home" || homeLocation ==="/") {
    return (
        <div className="homeWrapper">
            {/* <h1><NavLink to="home">Welcome home</NavLink></h1> */}
            <Nav />

            <div className="flexContainer">
                <div className="banner">
                    <div className="bannerPhoto"></div>
                    <NavLink to="aboutUs"><div className="bannerText">
                    <h1> About</h1>  
                    <p>Meet the creators, Hallie, Melanie, and Monika</p>  
                    </div></NavLink>
                </div>

                <div className="sidebar">
                    <NavLink to="beauty"><div className="cute">
                        <div className="cutePhoto" style={{backgroundImage:`url(${beautyArray[0].urlToImage})`}}></div>
                        <div className="cuteText">
                        <h3>{beautyArray[0].title}</h3>
                        </div>
                    </div></NavLink>

                    <NavLink to="mentalHealth"><div className="advice">
                        <div className="advicePhoto" style={{backgroundImage:`url(${mentalHealthArticles[0].urlToImage})`}}></div>
                        <div className="adviceText">
                        <h3>{mentalHealthArticles[0].title}</h3>  
                          
                        </div>
                    </div></NavLink>
                </div>
            </div>
                    {/* <div className="mergeContainers">
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
                    </div> */}
                
                    {/* <Footer/> */}
        </div>
    )
    } else {
        return (
            <div className="pageWrapper">
            <Nav />    
            {/* <Footer/> */}
            </div> 
        )
    }
}