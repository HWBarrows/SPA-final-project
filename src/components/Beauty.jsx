import { useState } from 'react'
import { beautyArray } from '../dataSources/beauty.js'
import SaveComments from './Comments.jsx'

export default function Beauty (){

    

    const [ posts, setPosts ] = useState(5)
    const [ displayPost, setDisplayPost ] = useState("Will Cutting Out Dairy Give Me Clear Skin?")
    const postLimit = beautyArray.filter((item, index)=> index <= posts)
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
                {/* <SaveComments/> */}
            </div>}
            <ul> 
            {postLimit.map(article => <li className="moreArticleList" onClick={(e)=> setDisplayPost(e.target.innerText)}>{article.title}</li>)}
            </ul>
            
            </div>
            <SaveComments posts={displayPost}/>
        </div>
    )
}   