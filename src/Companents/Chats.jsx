import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
function Chats() {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick)
  }
  return (
    <div className='chat-container'>
      <div className="chat-top">
      <div className="plus">  <h2>Chats</h2><FaPlus className='add'/></div>
        <div className="search"><input type="text" placeholder='Search here...' className='search-name' /> <CiSearch /></div>
      </div>
      <div className="chat-fav">
        <span className='head'>FAVORITES</span>
        <div   onClick={handleClick} className={isClick ? 'click' : 'not-click'}>
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg" alt="" /> <p className='name'>Katrina Winters</p>
        </div>
        <div onClick={handleClick} className={isClick ? 'click' : 'not-click'}>
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-8.de8497f02cbe680f8457.jpg" alt="" /> <p className='name'>Tonia Clay</p>
        </div>
        <div onClick={handleClick} className={isClick ? 'click' : 'not-click'}>
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-4.474927d6a33a7b8cde52.jpg" alt="" /> <p className='name'>Miranda Valentine</p>
        </div>
      </div>
      <div className="direct">
     <div className="plus">   <span className='head'>DIRECT MESSAGES</span><FaPlus className='add'/></div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg" alt="" /> <p className='name'>Katrina Winters</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-8.de8497f02cbe680f8457.jpg" alt="" /> <p className='name'>Tonia Clay</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-4.474927d6a33a7b8cde52.jpg" alt="" /> <p className='name'>Miranda Valentine</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg" alt="" /> <p className='name'>Katrina Winters</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-8.de8497f02cbe680f8457.jpg" alt="" /> <p className='name'>Tonia Clay</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-4.474927d6a33a7b8cde52.jpg" alt="" /> <p className='name'>Miranda Valentine</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg" alt="" /> <p className='name'>Katrina Winters</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-8.de8497f02cbe680f8457.jpg" alt="" /> <p className='name'>Tonia Clay</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-4.474927d6a33a7b8cde52.jpg" alt="" /> <p className='name'>Miranda Valentine</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-3.6256d30dbaad2b8f4e60.jpg" alt="" /> <p className='name'>Katrina Winters</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-8.de8497f02cbe680f8457.jpg" alt="" /> <p className='name'>Tonia Clay</p>
        </div>
        <div className="direct-contact">
          <img className='cont-pict' src="https://doot-light.react.themesbrand.com/static/media/avatar-4.474927d6a33a7b8cde52.jpg" alt="" /> <p className='name'>Miranda Valentine</p>
        </div>
      </div>
    
    </div>
  )
}

export default Chats