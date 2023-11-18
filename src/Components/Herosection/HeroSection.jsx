import React from 'react'
import NavBar from './NavBar'
import MainSection from '../MainSection'


const HeroSection = () => {
  return (
    <div className='md:h-[80vh] h-[100vh] mb-12'>
        <NavBar/>
        <MainSection/>
    </div>
  )
}

export default HeroSection