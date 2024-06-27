import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { IoIosChatbubbles } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
function Login() {
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
                <h2>Welcome Back !</h2>
                <span>Sign in to continue to Green CHAT.</span>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <label><h4>Username</h4></label>  <input type='email' {...register("example")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <label className='check pass'><h4>Password</h4> <span>Forgot password?</span></label> <input type='password' {...register("exampleRequired", { required: true })} />
                    <label className='check' ><input type="checkbox" {...register("exampleRequired", { required: true })} /> <p>Remember me ?</p></label>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <Link to='chat'><button className='btn1'>Log In</button></Link>
                    <div className="sign"> <span className='line'></span><span>Sign In With</span><span className='line'></span></div>
                    <div className="log-icons">
                        <FaFacebook id='facebok' /><FaTwitter id='twit' /><FaGoogle id='google' />
                    </div>
                    <div className='reg-div'><span>Don't have an account ?</span> <Link to='/register' className='register'>Register</Link></div>
                    <br />
                      <p className='fot'> 2024 GREEN CHAT. Crafted with  by Nuray Aliyeva</p>
                </form>
            </div>

        </div>
    )
}

export default Login