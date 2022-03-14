import React, {  useState } from 'react'

const ChatBox = ({name}) => {

  const [displayChatBox, setDisplayChatBox] = useState(true)
  const [message, setMessage] = useState({})



  function storeTheMessage(e){

    


    setMessage({...message, message:e.target.value});
    console.log(message);

  }

  return (


      <div  style={{height:"400px", width:"400px", backgroundColor: "white"}}>{name}
      <div>{}</div>
      <input onChange={storeTheMessage} type="text" placeholder='type your message...'></input>
      <button type='submit' onClick={()=>setDisplayChatBox(true)}>Send</button>
    </div>

  )
}


export default ChatBox


