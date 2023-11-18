import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className='flex items-center justify-between py-4 px-8'>
            <h1 className='text-[#90A0D9] text-2xl font-bold md:text-3xl hover:border-b-4 hover:border-b-[#90A0D9] border-b-4 border-transparent'>NC.</h1>
            <div className='text-[#CDCDFF] font-semibold flex items-center justify-between w-[70%] md:w-[20%] text-xl' >
                <p className='hover:border-b-4 hover:border-b-[#CDCDFF] border-b-4 border-transparent hover:opacity-75'>projects</p>
                <p className='hover:border-b-4 hover:border-b-[#CDCDFF] border-b-4 border-transparent hover:opacity-75'>skills</p>
                <p className='hover:border-b-4 hover:border-b-[#CDCDFF] border-b-4 border-transparent hover:opacity-75'>contact</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar