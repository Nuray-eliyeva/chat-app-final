import React from 'react'
import { Outlet } from 'react-router-dom';
import Chats from '../Companents/Chats';
function Chat() {
  return (
    <div className='chat'>
      <Chats/>
   <Outlet/>
    </div>


  )
}

export default Chat