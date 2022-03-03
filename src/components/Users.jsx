import { useState } from "react"


export default function Users (props) {
    const [userInfo, setUserInfo] = useState([])
    

    useEffect(function() {
       
        
        fetch("https://randomuser.me/api/?results=5000")
            .then(response => response.json())
            .then(response => {
                setUserInfo(response.results)
            })
            
            
    }, [])
    
    console.log(userInfo);
    return(
        <div>
            Hi from Sidebar
        </div>
    )
}