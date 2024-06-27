import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Chat from './Pages/Chat'
import Profile from './Companents/Profile'
import Chats from './Companents/Chats'
import Contact from './Companents/Contact'
import Call from './Companents/Call'
import Bookmark from './Companents/Bookmark'
import Setting from './Companents/Setting'
import Layout from './Layout/Layout'
import LogOut from './Pages/LogOut'
import ChangePass from './Pages/ChangePass'
import Message from './Pages/Message'
function App() {
  return (

    <Routes>
      <Route element={<Login />} path='/' />
      <Route element={<Register />} path='/register' />
      <Route element={<LogOut />} path='/logout' />
      <Route element={<ChangePass />} path='/changepass' />
      <Route element={<Layout />} path='/'>
        <Route element={<Chat />} path='/chat' />
        <Route element={<Profile />} path='/profile' />
        <Route element={<Chats />} path='/chats' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Call />} path='/call' />
        <Route element={<Bookmark />} path='/bookmark' />
        <Route element={<Setting />} path='/setting' />
      </Route>
    </Routes>
  )
}

export default App