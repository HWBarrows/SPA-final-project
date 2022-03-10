import { Route, Routes } from 'react-router-dom'
import Blog from './Blog.jsx'
import Header from './Header.jsx'
import MoreCont from './MoreCont.jsx'
import UserAccount from './UserAccount.jsx'
import Home from './Home.jsx'

export default function OurRoutes(){

    return (
        <Routes>
            <Route index element={<div />}/>
            <Route path="home" element={<div />}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="userInfo" element={<Header/>}/>
            <Route path="moreContent" element={<MoreCont/>}/>
        </Routes>
    )
}