import { ProfileContext } from "../contexts/ProfileContext.jsx"
import { useState } from "react"
import {musicArray} from "../dataSources/musicNews.js"
import '../styles/MoreCont.scss'

export default function Music (){

    

        const [ posts, setPosts ] = useState(5)
        const [ displayPost, setDisplayPost ] = useState("5 Classical Music Albums You Can Listen to Right Now")
        const postLimit = musicArray.filter((item, index)=> index <= posts)
        const currentArticle = postLimit.filter(item=> item.title === displayPost)
        
    // copy line 16-35, 
        return(
            <div className="moreContWrapper">
                <div className="flexWrapper">

                {currentArticle[0] != null &&  <div className='moreStyles'>
                
                    {/* <h3>{currentArticle[0].title}</h3> */}
                    <div className='moreContPhoto' style={{backgroundImage:`url(${currentArticle[0].urlToImage})`}}></div>
                                    <div className='mText'>
                                    <h3>{currentArticle[0].title}</h3>
                                    <p>{currentArticle[0].content}</p>
                                 </div>
                
                </div>}
                <ul> 
                {postLimit.map(article => <li onClick={(e)=> setDisplayPost(e.target.innerText)}>{article.title}</li>)}
                </ul>
                
                </div>
            </div>
        )
    }   
