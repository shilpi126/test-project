import React from 'react'

function Navbar2() {
  return (
    <div className='flex justify-between mt-2  h-14 w-full pr-10'>
        
    <h1 className='flex justify-center items-center pl-10 text-2xl'>
    <span>Ship</span>
    <span className='text-violet-700'>mate.</span>
    </h1>
    
    <div className='flex justify-center items-center mt-4'>
    <button className=' border-2 border-violet-700 h-8 w-10 pb-1 rounded-lg  text-violet-700 text-xl'>$</button>
        <button className=' bg-violet-700 ml-5 h-8 w-32 rounded-lg text-white'>Track Shipment</button>
  
    </div>
</div>
  )
}

export default Navbar2