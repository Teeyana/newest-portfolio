import React from 'react'
import { IconGithub, IconBoxArrowUpRight} from '../Icons'

const Card = ({title, imgSrc, techstack, link, livelink}) => {
   const renderstack= techstack?.map((item,index)=>(<p key={index}>{item}</p> ))
  return (
    <div className='cardshadow px-6 py-8 my-8 md:w-[30%] '>
        <p className='flex text-4xl font-bold text-[#CDCDFF] items-center justify-center py-6 '>{title}</p>
        {/* <p className='flex text-xl text-[#CDCDFF] font-normal '>{description}</p>  */}
        <img src={imgSrc} />
        <div className='flex justify-evenly text-center font-bold text-sm text-[#CDCDFF] mt-8'> 
            {renderstack}
        </div>
        <div className='flex justify-center gap-x-6'>
        <a href={link} target='_blank' className='flex items-center justify-center mt-8'>
            <IconGithub className='text-2xl text-[#CDCDFF] hover:opacity-75'/>
        </a>
        
        <a href={livelink} target='_blank'className='flex items-center justify-center mt-8'>
            <IconBoxArrowUpRight className='text-2xl text-[#CDCDFF] hover:opacity-75'/>
        </a>
        </div>
    </div>
  )
}

export default Card