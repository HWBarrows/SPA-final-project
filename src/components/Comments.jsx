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

    //const localStored = localStorage.setItem( "comments", JSON.stringify(userComments))
 
    let fetchedComments = localStorage.getItem("comments")
    const displayComments = [JSON.parse(fetchedComments)]
    console.log(displayComments);
    


    
    const handleOnChange = (e)=> {
        setUserComments(()=> ({
            ...userComments, content:e.target.value, article:props.posts,
        }))
    }

    const addToStorage = (e) => {
        e.preventDefault()
        if (!profile){
        alert("Please login to comment")
        }

        displayComments.push(userComments)
        // fetchedComments.push(preppedData)
        profile && userComments.content && localStorage.setItem("comments", JSON.stringify(displayComments))
    }

    // const addToArray =(e)=> {
    //     e.preventDefault()
    //     if (!profile){
    //     alert("Please login to comment")
    //     }
    //     // profile && userComments.content && setArrayOfComments([...arrayOfComments, userComments])
    //     // setUserComments(()=> ({
    //     //     ...userComments, content:''
    //     // }))
        
    //     // console.log(arrayOfComments);
    //     localStorage.setItem("comments", JSON.stringify(arrayOfComments))
    // }

    // const displayArray = displayComments.filter(item => item.article === props.posts)
    //console.log(displayArray);
    return (
        <div>
            <form>
            <input type="text" value={userComments.content} onChange={handleOnChange}/>
            <button type="submit" onClick={addToStorage}>I submit</button>
            </form>
        
             {/* {displayComments.map((item, index) => <li key={index}>{item.user}, {item.content}</li>)}
         */}
            {/* {arrayOfComments.map((item, index)=> <li key={index}>{item.user}, {item.content}</li>)} */}
            
        </div>
    )
}