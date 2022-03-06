import Header from './Header.jsx'
import Blog from './Blog.jsx'
import Sidebar from './Sidebar.jsx'
import MoreCont from './MoreCont.jsx'
import FriendList from './FriendList.jsx'
import Footer from './Footer.jsx'
import { UsersContextProvider } from '../contexts/UserContext.jsx'
import { ProfileContextProvider } from '../contexts/ProfileContext.jsx'



export default function App() {
    return (
            <UsersContextProvider>
                <ProfileContextProvider>
                    <Header />
                    <Blog/>
                    <FriendList />
                    <Sidebar/>
                    <MoreCont/>
                    <Footer/>
                </ProfileContextProvider>
            </UsersContextProvider>
    )
}