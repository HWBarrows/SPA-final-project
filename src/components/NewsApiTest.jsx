import { useEffect, useState } from "react";


export default function NewsApi (){

    const [ content, setContent ] = useState([])


    useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=fashion&apiKey=ef21565ae0ab441ba6da78a5339213a3")
        .then(response => response.json())
        .then(response=> localStorage.setItem("newsArray", JSON.stringify(response.articles)))



    }, [])

    //console.log(content);
    const newsData = localStorage.getItem("newsArray")
    const newjs = JSON.parse(newsData)
    console.log(newjs);

    return(
        <div>Hi from News</div>
    )
}