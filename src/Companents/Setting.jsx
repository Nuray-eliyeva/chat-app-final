import React from 'react'

function Setting() {
  return (
    <div>
      <div className="profil-top">
        <img src="https://doot-light.react.themesbrand.com/static/media/img-4.8111c4656c8bc3b62569.jpg" alt="" className='back-img' /><h2 className='profil-head'>Settings</h2>
        <img src="https://doot-light.react.themesbrand.com/static/media/avatar-1.9c8e605558cece65b06c.jpg" alt="" className='profil' />
        <div className="profil-txt"><span>Active</span></div>
      </div>
      <hr />
      <div className="profil-about">
        <p>If several languages coalesce, the grammar of the resulting language is more simple.</p>
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

export default Setting