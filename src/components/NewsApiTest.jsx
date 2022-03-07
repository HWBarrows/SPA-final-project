import { useEffect, useState } from "react";


export default function NewsApi (){

    const [ content, setContent ] = useState([])


    useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=fashion&apiKey=ef21565ae0ab441ba6da78a5339213a3")
        .then(response => response.json())
        .then(response=> console.log(response))



    }, [])

    //console.log(content);

    return(
        <div>Hi from News</div>
    )
}