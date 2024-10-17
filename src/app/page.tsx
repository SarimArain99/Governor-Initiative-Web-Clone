import React from 'react'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Detail from './components/Detail'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Hero/>
      <Detail/>
      <Courses/>
      <Footer/>
    </div>
  )
}

export default page