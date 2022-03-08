import { NavLink, useLocation } from "react-router-dom"
import OurRoutes from "./OurRoutes.jsx"

export default function Home (){

    return(
        <div>Hi from Home
            <nav>
                <ul>
                    <li><NavLink to="blog">Blog</NavLink></li>
                    <li><NavLink to="userInfo">Account</NavLink></li>
                    <li><NavLink to="moreContent">More Content</NavLink></li>
                </ul>
            </nav>
            <OurRoutes/>
        </div>
    )
}