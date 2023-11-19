import React from 'react'
import Card from './Card'

const AllCards = () => {
  return (
    <div className='text-center w-[100%] h-fit my-[3rem]'>
    <h1 className='text-[#CDCDFF] font-extrabold text-4xl'>PROJECTS</h1>
      <div className='flex justify-between items-center py-4 gap-x-10 mt-5 mx-auto w-[80%] flex-wrap'>
        <Card        
        title='TiideHR'
        imgSrc="/assets/tiidehr.png"
        techstack={['Css', 'React', 'Javascript']}
        link='https://github.com/Tiidelab-Fellowship/tiide-hr-react-fe.git'/>

        <Card        
        title='Resort App'
        imgSrc="/assets/resort.png"
        techstack={['Tailwind CSS', 'React', 'Javascript']}
        link='https://github.com/Teeyana/Resort.git'
        livelink='https://resort-khaki.vercel.app/'
        />

        <Card        
        title='Data-finance App'
        imgSrc="/assets/datafin.png"
        techstack={['Tailwind CSS', 'React', 'Javascript']}
        link='https://github.com/Teeyana/Data-finance-landing-page.git'
        livelink='https://data-finance-landing-page-gq6o.vercel.app/'/>
        
    </div>
    </div>
  )
}

export default AllCards