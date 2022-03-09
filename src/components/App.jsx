import Header from './Header.jsx'
import Blog from './Blog.jsx'
import Sidebar from './Sidebar.jsx'
import MoreCont from './MoreCont.jsx'
import FriendList from './FriendList.jsx'
import Footer from './Footer.jsx'
import { UsersContextProvider } from '../contexts/UserContext.jsx'
import { ProfileContextProvider } from '../contexts/ProfileContext.jsx'
import '../styles/App.scss'
import Home from './Home.jsx'



export default function App() {
    return (
            <UsersContextProvider>
                <ProfileContextProvider>
                    {/* Change <Header/> to home and will contain blog & sidebar*/}
                    <Home/>
                    {/*<Header />
                     <Blog/>
                    <FriendList/>
                    <Sidebar/>
                    <MoreCont/> */}
                    <Footer/>
                </ProfileContextProvider>
            </UsersContextProvider>
    )
}