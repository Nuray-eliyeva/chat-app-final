import React from 'react'
import { IoIosChatbubbles } from "react-icons/io";
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
function LogOut() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className='doot '>
      <div className="logo">    <h1 >GREEN CHAT</h1><IoIosChatbubbles className='chatlogo' /></div>
      <div>  <img src="https://doot-light.react.themesbrand.com/static/media/auth-img.9302755e73810f6c27d2.png" alt="" className='login-img' /></div>
      <div className="dot-right log-out">
        <form className="logout-form" onSubmit={handleSubmit(onSubmit)}>
        <IoPerson className='out-i' />
          <h2>You are Loogged Out</h2>
          <span>Thank you for using Green CHAT</span>
          <Link to='/'><button className='btn1 btn5'>Sign In</button></Link>
          <p className='fot'> 2024 GREEN CHAT. Crafted with  by Nuray Aliyeva</p>
        </form>
      </div>

    </div>
  )
}

export default LogOut