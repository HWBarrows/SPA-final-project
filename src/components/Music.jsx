import { ProfileContext } from "../contexts/ProfileContext.jsx"
import { useState } from "react"
import {musicArray} from "../dataSources/musicNews.js"
import SaveComments from "./Comments.jsx"
import '../styles/MoreCont.scss'

export default function Music (){

    

        const [ posts, setPosts ] = useState(4)
        const [ displayPost, setDisplayPost ] = useState("5 Classical Music Albums You Can Listen to Right Now")
        const postLimit = musicArray.filter((item, index)=> index <= posts)
        const currentArticle = postLimit.filter(item=> item.title === displayPost)
        
        console.log(displayPost);
    
        return(
            <div className="moreContWrapper">
                <div className="flexWrapper">

                {currentArticle[0] != null &&  <div className='moreStyles'>
                
                    
                    <div className='moreContPhoto' style={{backgroundImage:`url(${currentArticle[0].urlToImage})`}}></div>
                                    <div className='mText'>
                                    <h3>{currentArticle[0].title}</h3>
                                    <p>{currentArticle[0].content}</p>
                                 </div>
                    <SaveComments posts={displayPost}/>
                </div>}
                <ul> 
                {postLimit.map((article, index) => <li key={index}onClick={(e)=> setDisplayPost(e.target.innerText)}>{article.title}</li>)}
                </ul>
                
                </div>
            </div>
        )
    }   
