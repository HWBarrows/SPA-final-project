import { Route, Routes } from 'react-router-dom'
import Blog from './Blog.jsx'
import Header from './Header.jsx'
import MentalHealth from'./MentalHealth.jsx'
import Music from './Music.jsx'
import Beauty from './Beauty.jsx'

export default function OurRoutes(){

    return (
        <Routes>
            <Route index element={<div />}/>
            <Route path="home" element={<div />}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="userInfo" element={<Header/>}/>
            <Route path="music" element={<Music/>}/>
            {/* <Route path="moreContent" element={<MoreCont/>}/> */}
            <Route path="mentalHealth" element={<MentalHealth/>}/>
            <Route path="beauty" element={<Beauty/>}/>
        </Routes>
    )
}