import { ProfileContext } from "../contexts/ProfileContext.jsx"
import { useState } from "react"
import {musicArray} from "../dataSources/musicNews.js"
import '../styles/Music.scss'

export default function Music (){

    

        const [ posts, setPosts ] = useState(4)
        const [ displayPost, setDisplayPost ] = useState("5 Classical Music Albums You Can Listen to Right Now")
        const postLimit = musicArray.filter((item, index)=> index <= posts)
        const currentArticle = postLimit.filter(item=> item.title === displayPost)
        // console.log(postLimit);
        // console.log(currentArticle);
        // console.log(displayPost);
    
        return(
            <div className="musicWrapper">
                <div className="flexWrapper">
                <ul>
                {postLimit.map(article => <li onClick={(e)=> setDisplayPost(e.target.innerText)}>{article.title}</li>)}</ul>
                {/* <NewsApi/> */}
                {currentArticle[0] != null &&  <div className='musicWrapper'>
                {/* <div className="flexWrapper"> */}
                <div className='musicPhoto' style={{backgroundImage:`url(${currentArticle[0].urlToImage})`}}></div>
                                <div className='musicText'>
                                <h3>{currentArticle[0].title}</h3>
                                <p>{currentArticle[0].content}</p>
                                </div>
                
                </div>}
                </div>
            </div>
        )
    }   
