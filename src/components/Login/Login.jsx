import listOfUsers from './data.json'
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext.jsx"
import { FaEye } from 'react-icons/fa'
import UserAccount from "../UserAccount.jsx"



export default function Login (){
    const [ show, setShow ] = useState('false') 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [users, setUsers] = useContext(UserContext)
    const [ data, setData ] = useState({userName:"", password:""})
    // console.log(JSON.stringify(users.slice(0,20)));    

    const users = listOfUsers;
    console.log(users[0].login.password);
    console.log(users[0].login.username);
    

    function checkUserName(e){
        setData({...data,userName:e.target.value})    
    }

    function checkPassword(e){
        setData({...data,password:e.target.value})    
    }
    
    function submitLogin(e){
        
        e.preventDefault()
      
        const checkIfUserExist = users.find(user => (user.login.username === data.userName) && (user.login.password === data.password))
        checkIfUserExist && setIsLoggedIn(true)
    }

    return (
        <>
        {isLoggedIn ? <UserAccount/> : <div className="Login">
            Hi from Login
            <input onChange={checkUserName} type="text" placeholder="Type your user name here"></input>
            <input onChange={checkPassword} type={show? "text" : "password"} placeholder="Type your password here"></input>
            <FaEye onMouseDown={()=> setShow(!show)}/>
            <button type='submit' onClick={submitLogin}>Submit</button>    
        </div>}   
        </>
    )
}
