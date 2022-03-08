import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const SignUp = ({setShowSignUpForm}) => {  
    const [users, setUsers] = useContext(UserContext)
    const [ data, setData ] = useState({})
    
    function signUp(e){
        // take in the new username and password in a new-user object, and create a new user profile. 
        // console.log(users);
        e.preventDefault()
  


        setUsers([...users, {"login":
                                {"username":data.username, 
                                
                                "password":data.password}, 
                                "name": {
                                    "first": data.firstName,
                                    "last": data.lastName
                                },
                                    "email": data.email,
                            
                                "picture": 
                                    {"medium":"http://www.formasdigitales.mx/images/client.png",
                                    "large":"http://www.formasdigitales.mx/images/client.png",
                                    "thumbnail":"http://www.formasdigitales.mx/images/client.png"
                                    }
                            }
                            ])
        setShowSignUpForm(false)
               
    }

    

  return (
    <div className='registrationForm'>
        <input onChange={(e)=>{setData({ ...data, firstName: e.target.value })}} type="text" placeholder='first name' />
        <input  onChange={(e)=>{setData({ ...data, lastName: e.target.value })}}  type="text" placeholder='last name' />
        <input  onChange={(e)=>{setData({ ...data, dateOfBirth: e.target.value })}}  type="date" placeholder='date of birth' />
        <input  onChange={(e)=>{setData({ ...data, email: e.target.value })}} type="email" placeholder='email' />
        <input onChange={(e)=>{setData({ ...data, username: e.target.value })}}  type="text" placeholder='username' />
        <input  onChange={(e)=>{setData({ ...data, password: e.target.value })}} type="password" placeholder='password' />
        <button type="submit" onClick={signUp}>sign up</button>
        <button onClick={()=>setShowSignUpForm(false)}>Back</button>
    </div>
  )
}

export default SignUp