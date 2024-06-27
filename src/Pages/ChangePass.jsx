import React from 'react'
import { IoIosChatbubbles } from "react-icons/io";
import { useForm } from "react-hook-form"
function ChangePass() {
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
        <h2>Change Password</h2>
        <img src="https://doot-light.react.themesbrand.com/static/media/avatar-1.9c8e605558cece65b06c.jpg" alt="" className='change-pass-img' />
        <h4>Kathryn Swarey</h4>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

          <label><h4>Old Password</h4></label>  <input type='password' placeholder='Enter Old Password'  {...register("example")} />
          {errors.exampleRequired && <span>This field is required</span>}
          <label className='check pass'><h4>New Password</h4></label> <input type='password' placeholder='Enter Old Password'  {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <label className='check pass'><h4>Confirm New Password</h4></label> <input type='password' placeholder='Enter Confirm Password'  {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="pas-button">
            <button  className='btn3 btn-green'>Save</button>
            <button className='btn3 btn-gray'>Cancel</button>
          </div>
        </form>
        <p className='fot fot-pass'> 2024 GREEN CHAT. Crafted with  by Nuray Aliyeva</p>

      </div>

    </div>
  )
}

export default ChangePass