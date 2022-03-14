import { useState } from 'react'
// import { Link } from 'react-router-dom';
import {fashionArticles} from '../dataSources/fashionNews.js'
import '../styles/Blog.scss'
// import NewsApi from './NewsApiTest.jsx'

// console.log(fashionArticles);
export default function Blog (){

    const [ posts, setPosts ] = useState(4)
    const [ displayPost, setDisplayPost ] = useState("A Digital Archive of Black Fashion Delves Into Print")
    const postLimit = fashionArticles.filter((item, index)=> index <= posts)
    const currentArticle = postLimit.filter(item=> item.title === displayPost)
    // console.log("postLimit is " + postLimit);
    // console.log("current Article is " + currentArticle);
    // console.log("display post is " + displayPost);

    return(
        <div className="blogWrapper">
            <div className="flexWrapper">

            {currentArticle[0] != null &&  <div className='blogStyles'>
            
                {/* <h3>{currentArticle[0].title}</h3> */}
                <div className='blogPhoto' style={{backgroundImage:`url(${currentArticle[0].urlToImage})`}}></div>
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
        </div>
    )
}