import { useState } from "react"
import { FaEye } from 'react-icons/fa'


export default function Login (){


   const [ show, setShow ] = useState('false') 
   

    return (
        <div>
            Hi from Login
            <input type="text" placeholder="Type your user name here"></input>
            <input type={show? "text" : "password"} placeholder="Type your password here"></input>
            <FaEye onMouseDown={()=> setShow(!show)}/>
            
        </div>
    )
}