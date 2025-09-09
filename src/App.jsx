import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import MyBlogs from './Pages/MyBlogs'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/myblogs" element={<MyBlogs/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
