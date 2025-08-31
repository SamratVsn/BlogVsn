import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Footer from '../Components/Footer'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'

function Home() {
  return (
    <div>
      <Header/>
      <Search/>
      <IntroPost/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default Home
