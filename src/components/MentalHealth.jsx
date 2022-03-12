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
    
        <div className="mentalHealthArticles">
            <ol>
            {articleLimit.map((article,i) => <li onClick={(e)=>setDisplayArticle(article)} key={i}>
                <p>{article.title}</p>
                </li>)}
            </ol>
            {currentArticle  &&  <div className='articleWrapper'>
                                        <div className='blogPhoto' style={{backgroundImage:`url(${currentArticle.urlToImage})`, backgroundSize: " contain "}}></div>
                                        <div className='blogText'>
                                        <h3>{currentArticle.title}</h3>
                                        <p>{currentArticle.content}</p>
                                        </div>
            </div>}

            Hi from MoreCont
            {/* <NewsApi/> */}
        </div>
    )
}
