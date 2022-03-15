import { ProfileContext } from '../contexts/ProfileContext'
import { useContext, useState } from 'react'



export default function SaveComments(props){

    const [profile, setProfile ] = useContext(ProfileContext)

        
    const [userComments, setUserComments] = useState({
        user: !profile? "" : profile.login.username,
        userPic: !profile? "" : profile.picture.thumbnail,
        article:"",
        content:""
    });

 
    let fetchedComments = localStorage.getItem("comments")
    const displayComments = JSON.parse(fetchedComments)
    //console.log(displayComments);
    let array = displayComments ? [...displayComments] : []

    
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
        profile && userComments.content && array.push(userComments)
        localStorage.setItem("comments", JSON.stringify(array))
        setUserComments(()=> ({
            ...userComments, content:''
       }))
    }

    
            return (
                <div className="commentWrapper">
                    <h2>Share your thoughts</h2>
                    <form>
                    <input type="text" value={userComments.content} onChange={handleOnChange}/>
                    <button className="publishComment" type="submit" onClick={addToStorage}>Publish</button>
                    </form>
            
                    {displayComments && array.filter(item => item.article === props.posts).map((item, index) => (
                    <li className="commentList" key={index}><div><div className="avatar" style={{backgroundImage:`url(${item.userPic})`}}></div><h3>{item.user}</h3> <p>{item.content}</p></div>
                    </li>))}
                    
                </div>
            )
    
}