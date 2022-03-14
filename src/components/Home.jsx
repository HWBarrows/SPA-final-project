import { NavLink, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import '../styles/Home.scss'
import AccountDetailBox from "./AccountDetailBox.jsx"
import Nav from "./Nav.jsx"



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
                    <div className="bannerText">
                    <h1> About us</h1>  
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
            <Nav />    
            {/* <Footer/> */}
            </div> 
        )
    }
}