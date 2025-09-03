import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import Login from './Pages/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
