import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import "../styles/SignUp.scss";

const SignUp = ({showSignUpForm,setShowSignUpForm}) => {  
    const [users, setUsers] = useContext(UserContext)
    const [ data, setData ] = useState({})
    
    const [isUserRegistered, setIsUserRegistered] = useState(false)
    
    
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
        
        if(Object.keys(data).length > 0){
            setIsUserRegistered(true)  
            // setShowSignUpForm(false)

        }
    }

    // console.log(users);

  return (
    
    <> 
    {isUserRegistered ? 
    
            <div className='userSignedUp'>
            "thank you for signing up!"
            <button className='goBackToLogin' onClick={()=>setShowSignUpForm(false)}> Go back to Login</button>
            </div> :

            <div className='registrationForm'>
            <div className='top'>
                <h2>Sign Up</h2>
            </div>

            <div className='nameInputs'>
            <input onChange={(e)=>{setData({ ...data, firstName: e.target.value })}} type="text" placeholder='first name' />
            <input  onChange={(e)=>{setData({ ...data, lastName: e.target.value })}}  type="text" placeholder='last name' />
            </div>

            <input  onChange={(e)=>{setData({ ...data, username: e.target.value })}}  type="text" placeholder='username' />
            <input  onChange={(e)=>{setData({ ...data, email: e.target.value })}} type="email" placeholder='email' />
            <input  onChange={(e)=>{setData({ ...data, password: e.target.value })}} type="password" placeholder='password' />

            <input  onChange={(e)=>{setData({ ...data, dateOfBirth: e.target.value })}}  type="date" placeholder='date of birth' />


            <button className='signUpBtn' type="submit" onClick={signUp}>sign up</button>


            </div>

        } 

    </>
  )
}

export default SignUp