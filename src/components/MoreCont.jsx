import NewsApi from "./NewsApiTest.jsx"

import {mentalHealthArticles} from '../dataSources/mentalHealth.js'
import { useState } from "react";
import { Link } from "react-router-dom";

console.log(mentalHealthArticles);


export default function MoreCont(){

    const [ articles, setArticles ] = useState(4)
    const [ displayArticle, setDisplayArticle ] = useState("Podcast Explores Mental Health Challenges of Working in Tech - thenewstack.io")
    const articleLimit = mentalHealthArticles.slice(0,4);
    console.log(articleLimit);
    const currentArticle = articleLimit.filter(article=>article.title === displayArticle)



    return (
    
        <div className="mentalHealthArticles">
            <ol>
            {articleLimit.map((article,i) => <li onClick={(e)=>setDisplayArticle(e.target.innerText)} key={i}>
                <p>{article.title}</p>
                </li>)}
            </ol>
            {currentArticle[0] != null &&  <div className='articleWrapper'>
                                        <div className='blogPhoto' style={{backgroundImage:`url(${currentArticle[0].urlToImage})`}}></div>
                                        <div className='blogText'>
                                        <h3>{currentArticle[0].title}</h3>
                                        <p>{currentArticle[0].content}</p>
                                        </div>
            </div>}

            Hi from MoreCont
            {/* <NewsApi/> */}
        </div>
    )
}