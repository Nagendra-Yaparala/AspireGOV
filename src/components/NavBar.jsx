import React from 'react'
const navData = ['Courses','Platforms','Resources','About']

const NavBar = () => {
  return (
    <div className=' bg-[#6134ea] text-white shadow-md shadow-slate-200 p-6 flex items-center justify-between px-40'>
        <h1 className='font-semibold'>AspireGOV</h1>
        <div className='flex gap-10 hover:'>
        {navData.map((item,index)=>{
          return(<span className='' key={index}>{item}</span>)
        })}
        </div>
    </div>
  )
}

export default NavBar