import {mentalHealthArticles} from '../dataSources/mentalHealth.js'
import { useState } from "react";

import { Link } from "react-router-dom";

console.log(mentalHealthArticles);


export default function MentalHealth(){
    // const [ displayArticle, setDisplayArticle ] = useState("Podcast Explores Mental Health Challenges of Working in Tech - thenewstack.io")
    const [ displayArticle, setDisplayArticle ] = useState(mentalHealthArticles[0])

    const articleLimit = mentalHealthArticles.slice(0,4);
    console.log(articleLimit);
    // const currentArticle = articleLimit.filter(article=>article.title === displayArticle)

    const currentArticle = articleLimit.find(item=>item.title === displayArticle.title)


    return (
    
        <div className="moreContWrapper">
            <div className='flexWrapper'>

            
            {currentArticle  &&  <div className='moreStyles'>
                {/* <h3>{currentArticle.title}</h3> */}
                <div className='moreContPhoto' style={{backgroundImage:`url(${currentArticle.urlToImage})`}}></div>
                                        <div className='mText'>
                                        <h3>{currentArticle.title}</h3>
                                        <p>{currentArticle.content}</p>
                                        </div>
            </div>}
            <ul>
            {articleLimit.map((article,i) => <li className="moreArticleList" onClick={(e)=>setDisplayArticle(article)} key={i}>
                {article.title}
                </li>)}
            </ul>
            
            </div>

        </div>
    )
}
