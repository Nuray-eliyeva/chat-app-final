import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
function Profile() {
  return (
    <div>
      <div className="profil-top">
        <img src="https://doot-light.react.themesbrand.com/static/media/img-4.8111c4656c8bc3b62569.jpg" alt="" className='back-img' /><h2 className='profil-head'>My Profile</h2>
        <img src="https://doot-light.react.themesbrand.com/static/media/avatar-1.9c8e605558cece65b06c.jpg" alt="" className='profil' />
        <div className="profil-txt">  <h3>Adam Zampa</h3> <p>Front end Developer</p></div>
      </div>
      <hr />
      <div className="profil-about">
        <p>If several languages coalesce, the grammar of the resulting language is more simple.</p>
        <ul>
          <li><IoMdPerson className='about-i' />Adam Zampa</li>
          <li><AiOutlineMessage className='about-i' />admin@themesbrand.com</li>
          <li><FaLocationDot className='about-i' />California, USA</li>
        </ul>
      </div>
      <hr />
      <div className="profil-media">
     <div className="media-head"> <p>MEDIA</p> <span>Show all</span></div>
     <div className="media">
      <div> <img src="https://doot-light.react.themesbrand.com/static/media/img-1.94735bdcb4171caaa01e.jpg" alt="" /></div>
      <div> <img src="https://doot-light.react.themesbrand.com/static/media/img-2.7f759d38502a81e71815.jpg" alt="" /></div>
      <div> <img src="https://doot-light.react.themesbrand.com/static/media/img-4.8111c4656c8bc3b62569.jpg" alt="" /></div>
     </div>
      </div>
    </div>
  )
}

export default Profile