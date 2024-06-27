import React from 'react'

function Message() {
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

export default Message