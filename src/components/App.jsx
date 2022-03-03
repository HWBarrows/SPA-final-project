import Header from './Header.jsx'
import Blog from './Blog.jsx'
import Sidebar from './Sidebar.jsx'
import MoreCont from './MoreCont.jsx'
import Footer from './Footer.jsx'
import { UsersContextProvider } from '../contexts/UserContext.jsx'



export default function App() {
    return (
            <UsersContextProvider>
            Hi from App
            <Header />
            <Blog/>
            <Sidebar/>
            <MoreCont/>
            <Footer/>
            </UsersContextProvider>
    )
}