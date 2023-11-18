import React from 'react'
import Skill from './Skill'
import Contact from './Contact'


const Skills = () => {
  return (
      <div className='text-center w-[100%] my-6'>
        <h1 className='text-[#CDCDFF] font-extrabold text-4xl my-6'>SKILLS</h1>
        <div className='flex items-center justify-evenly w-[350px] mx-auto flex-wrap gap-x-4 gap-y-4'>
            <Skill skill='HTML'/>
            <Skill skill='CSS'/>
            <Skill skill='Javascript'/>
            <Skill skill='Tailwind'/>
            <Skill skill='React'/>
        </div>
        
        <div className='mt-[5rem]'>
            <Contact/>
        </div>
    </div>
  )
}

export default Skills