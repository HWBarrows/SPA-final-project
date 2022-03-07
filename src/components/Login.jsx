import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { FaEye } from 'react-icons/fa'
import UserAccount from "./UserAccount"
import { ProfileContext } from "../contexts/ProfileContext"



export default function Login (){
    const [ show, setShow ] = useState(false) 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [users, setUsers] = useContext(UserContext)
    const [ data, setData ] = useState({userName:"", password:""})
    const [profile, setProfile] = useContext(ProfileContext)
    // console.log(JSON.stringify(users.slice(0,20)));    

    //const users = listOfUsers;
    console.log(users[0].login.password);
    console.log(users[0].login.username);
    

    function checkUserName(e){
        setData({...data,userName:e.target.value})    
    }

    function checkPassword(e){
        setData({...data,password:e.target.value})    
    }
    console.log(data);
    function submitLogin(e){
        
        e.preventDefault()

        //Can use to confirm checkIfUserExist is truly empty
        //if (array[index] != null) {
        // The == and != operators consider null equal to only null or undefined
        //}
          
      
        const checkIfUserExist = users.filter(user => (user.login.username === data.userName) && (user.login.password === data.password))
        checkIfUserExist.length>0 && setProfile(...checkIfUserExist)
        checkIfUserExist && setIsLoggedIn(true)
        
    }

    return (
        <>
        {isLoggedIn ? <UserAccount/> : <div className="Login">
            Hi from Login
            <input onChange={checkUserName} type="text" placeholder="Type your user name here"></input>
            <input onChange={checkPassword} type={show? "text" : "password"} placeholder="Type your password here"></input>
            <FaEye onMouseDown={()=> setShow(!show)}/>
            <button type='submit' onClick={submitLogin}>Log in</button>    
        </div>}   
        </>
    )
}