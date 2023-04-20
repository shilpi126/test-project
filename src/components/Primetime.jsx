import React from 'react'

function Primetime() {
  return (
    <div className='w-full h-36  ml-8 mr-10 flex justify-between  '>
        <div className='h-36 w-1/2 bg-white mt-0 rounded-2xl mr-2   cursor-pointer  sm:hover:shadow-slate-400 
            sm:shadow-md sm:border transition-shadow 
            duration-200' >
            <div className='p-2'>
                <span className='text-xl'>Seller:</span>
                <span className='text-lg font-semibold'>Primetime World</span>
                
            </div>
            <div className='flex justify-center items-center mt-4'>
                <img src='https://th.bing.com/th/id/OIP.8eFbFIDonKvkq2zRPlccNAHaE9?pid=ImgDet&rs=1' className='h-14 w-64'/>
            </div>
        </div>


        <div className='h-36 w-1/2 bg-white mt-0 rounded-2xl ml-2   cursor-pointer  sm:hover:shadow-slate-400 
            sm:shadow-md sm:border transition-shadow 
            duration-200' >
            <div className='p-2' >
                <span className='text-xl'>Insurance:</span>
                <span className='text-lg font-semibold'>Xcover.com</span>
                
            </div>
            <div className='flex justify-center items-center mt-4'>
                <img src='https://th.bing.com/th/id/OIP.deF23Kq1AQqX7t_6FGqAUwAAAA?pid=ImgDet&w=400&h=300&rs=1' className='h-14 w-64'/>
            </div>
        </div>
    </div>
  )
}

export default Primetime