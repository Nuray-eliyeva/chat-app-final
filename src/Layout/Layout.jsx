import React from 'react'
import Menu from '../Item/Menu'
import Welcome from '../Item/Welcome'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className='chat'>
        <Menu />
        <div className='side-bar'>
          <Outlet />
        </div>
        <Welcome />
      </div>
    </>
  )
}

export default Layout