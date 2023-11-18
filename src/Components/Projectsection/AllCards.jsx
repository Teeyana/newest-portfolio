import React from 'react'
import Card from './Card'

const AllCards = () => {
  return (
    <div className='text-center w-[100%] h-fit my-[3rem]'>
    <h1 className='text-[#CDCDFF] font-extrabold text-4xl'>PROJECTS</h1>
      <div className='flex justify-between items-center py-4 gap-x-10 mt-5 mx-auto w-[80%] flex-wrap'>
        <Card        
        title='TiideHR'
        description='TiideHR is an employee management system that allows small and medium scale enterprises manage tasks and automate HR processes.'
        techstack={['Css', 'React', 'Javascript']}
        link='will check'/>

        <Card        
        title='TiideHR'
        description='TiideHR is an employee management system that allows small and medium scale enterprises manage tasks and automate HR processes.'
        techstack={['Tailwind CSS', 'React', 'Javascript']}
        link='will check'/>

        <Card        
        title='TiideHR'
        description='TiideHR is an employee management system that allows small and medium scale enterprises manage tasks and automate HR processes.'
        techstack={['Tailwind CSS', 'React', 'Javascript']}
        link='will check'/>
        
    </div>
    </div>
  )
}

export default AllCards