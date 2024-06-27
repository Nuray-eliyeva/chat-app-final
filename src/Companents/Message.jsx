import React from 'react'
import { IoSearch } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FaVideo } from "react-icons/fa";
function message() {
  return (
 <div className="message">
    <div className="message-title">
        <div className="title-left">
            <img src="" alt="" />
            <div className="title-text"><p>Katrine Winters</p> <span>Active</span></div>
        </div>
        <div className="title-right">
        <IoSearch /><LuPhoneCall /><FaVideo />
        </div>
    </div>
    <div className="message-body"></div>
    <div className="message-send"></div>
 </div>
  )
}

export default message