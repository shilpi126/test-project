import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between mt-2  h-14 w-full pr-10'>
        
        <h1 className='flex justify-center items-center pl-10 text-2xl'>
        <span>Ship</span>
        <span className='text-violet-700'>mate.</span>
        </h1>
        
        <div className='flex justify-center items-center'>
            <button className=' bg-violet-600 mr-5 h-8 w-24 rounded-lg text-white'>Login</button>
            <button className=' border-2 border-indigo-700 h-8 w-28 p-1 rounded-lg'>Learn more</button>
        </div>
    </div>
  )
}

export default Navbar