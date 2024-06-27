import React from 'react'
import { BiMessageAltDetail } from "react-icons/bi";
function Welcome() {
  return (
    
    <div className="chat-welcome-section">
      <BiMessageAltDetail className='mesage-icon' />
      <h2>Welcome to Green Chat App</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam nam quia atque odio veniam  consectetur adipisicing?</p>
      <button className='btn2'>Get Started</button>
    </div>

  )
}

export default Welcome