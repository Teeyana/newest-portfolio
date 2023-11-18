import React from 'react'
import { IconGithub, IconLinkedin } from './Icons'

const MainSection = () => {
  return (
    <div className='flex items-center justify-evenly flex-col h-[100%] text-center px-4 '>
        <h1 className='text-[#CDCDFF] md:text-7xl text-4xl font-extrabold '> Hi, I am <span className='text-[#90A0D9]'>Nwigwe Christiana.</span> </h1>
        <h3 className='text-[#CDCDFF] uppercase md:text-4xl text-2xl font-extrabold '> A Frontend Developer.</h3>
        <p className='text-[#CDCDFF] md:text-xl text-lg font-medium lg:w-[55%] w-[100%] text-justify'>  Christiana is a Front end software developer passionate about solving problems and bringing ideas to life. She is a team player and an active participant in teamwork. Strong ability to prioritize task, excellent communication and interpersonal skills.</p>
        <div className='flex items-center justify-evenly lg:w-[17%] w-[100%]'>
            <button className='text-[#90A0D9] border-4 px-5 py-3 border-[#90A0D9] text-xl font-medium hover:bg-[#90A0D9] hover:text-[#23283E]'> Resume</button>
            <IconGithub className='text-3xl text-[#CDCDFF] hover:opacity-75'/>
            <IconLinkedin className='text-3xl text-[#CDCDFF] hover:opacity-75'/>
        </div>


    </div>
  )
}

export default MainSection