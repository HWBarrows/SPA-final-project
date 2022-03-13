import { ProfileContext } from '../contexts/ProfileContext'
import { useContext, useState } from 'react'



export default function SaveComments(props){

    const [profile, setProfile ] = useContext(ProfileContext)
    const [ arrayOfComments, setArrayOfComments ] = useState([])

    // const [ newComment, setNewComment ] = useState("")

    //save comment array of objects to local storage.
    
    
    const [userComments, setUserComments] = useState({
       
        user: !profile? "" : profile.login.username,
        article:"",
        content:""
    });

    
    const handleOnChange = (e)=> {
        setUserComments(()=> ({
            ...userComments, content:e.target.value, article:props.posts,
        }))
    }

    const addToArray =(e)=> {
        e.preventDefault()
        if (!profile){
        alert("Please login to comment")
        }
        profile && userComments.content && setArrayOfComments([...arrayOfComments, userComments])
        setUserComments(()=> ({
            ...userComments, content:''
        }))
        
        console.log(arrayOfComments);
    }

    const displayArray = arrayOfComments.filter(item => item.article === props.posts)
    console.log(displayArray);
    return (
        <div>
            <form>
            <input type="text" value={userComments.content} onChange={handleOnChange}/>
            <button type="submit" onClick={addToArray}>I submit</button>
            </form>
        
             {displayArray.map((item, index) => <li key={index}>{item.user}, {item.content}</li>)}
        
            {/* {arrayOfComments.map((item, index)=> <li key={index}>{item.user}, {item.content}</li>)} */}
            
        </div>
    )
}