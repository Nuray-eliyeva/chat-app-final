import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMessageDetail } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosUnlock } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
function Menu() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (

    <div className="menu">
      <div className="menu-top">
        <BiMessageDetail id='mesage' />
        <Link to='/profile'><IoPerson className='menu-i' /></Link>
        <Link to='/chats'> <IoMdChatbubbles className='menu-i' /> </Link>
        <Link to='/contact'><RiContactsFill className='menu-i' /> </Link>
        <Link to='/call'><FiPhoneCall className='menu-i' /> </Link>
        <Link to='/bookmark'><FaBookmark className='menu-i' /> </Link >
        <Link to='/setting'><IoSettingsSharp className='menu-i' /> </Link >
      </div >
      <div className="menu-botm">
        <FaMoon className='menu-i' />
        <button onClick={handleClick} >
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt=""  />
        </button>
        <ul className={isClicked ? 'clicked' : 'not-clicked'}>
          <li><Link to='profile'><button className='btn1'>Profil<IoPerson  /></button></Link></li>
          <li><Link to='setting'><button className='btn1'>Setting <IoMdSettings  /></button></Link></li>
          <li><Link to='changepass'><button className='btn1'>Change Password<IoIosUnlock  /></button></Link></li>
          <li><Link to='logout'><button className='btn1'>Log Out<CiLogout  /></button></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Menu