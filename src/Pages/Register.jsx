import React from 'react'
import { useForm } from 'react-hook-form'
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className='doot'>
      <div className="logo">    <h1 >GREEN CHAT</h1><IoIosChatbubbles className='chatlogo' /></div>
      <div>  <img src="https://doot-light.react.themesbrand.com/static/media/auth-img.9302755e73810f6c27d2.png" alt="" className='login-img' /></div>
      <div className="dot-right">
        <h2>Register Account</h2>
        <span>Get your free Green CHAT account now</span>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form" >
          <label><h4>Email</h4></label>  <input type='email' {...register("email")} placeholder='Enter Email'/>
          {errors.email && <span>This field is required</span>}
          <label><h4>Username</h4></label>  <input type='text' {...register("username")} placeholder='Enter username'/>
          {errors.username && <span>This field is required</span>}
          <label className='check pass'><h4>Password</h4> <span>Forgot password?</span></label> <input type='password' {...register("password", { required: true })} placeholder='Enter password'/>
          {errors.password && <span>This field is required</span>}
          <Link to='/chat'><button className='btn1'>Register</button></Link>
          <div className="sign"> <span className='line'></span><span>Sign Up Using</span><span className='line'></span></div>
          <div className="log-icons">
            <FaFacebook id='facebok' /><FaTwitter id='twit' /><FaGoogle id='google' />
          </div>
          <div className='reg-div'><span>Don't have an account ?</span> 
          <Link to='/' className='register'>Login</Link></div>
          <br />
          <p> 2024 GREEN CHAT. Crafted with  by Nuray Aliyeva</p>
        </form>
      </div>

    </div>
  )
}

export default Register