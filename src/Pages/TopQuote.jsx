import React from 'react'

function TopQuote() {
  return (
    <div className='flex m-8'>
        <div className='ml-8 mr-36'>
            <span>3 Top Quote</span>
            <span>(6 in Total)</span>
        </div>
        <div className='h-8  rounded-xl pl-2 pr-2'>

            <button  className='h-8 w-60 bg-fuchsia-200 pr-6 rounded-xl 
             cursor-pointer 
              sm:hover:shadow-slate-400 
              sm:hover:bg-white sm:shadow-md 
              sm:border transition-shadow duration-200'>Best Value 5-5 days. $3,121</button>
            <button className='h-8 w-60 bg-fuchsia-200 pr-6 rounded-xl  sm:hover:shadow-slate-400 
              sm:hover:bg-white sm:shadow-md 
              sm:border transition-shadow duration-200'>Quickest 5-5 days. $3,121</button>
            <button className='h-8 w-60 bg-fuchsia-200 rounded-xl sm:hover:shadow-slate-400 
              sm:hover:bg-white sm:shadow-md 
              sm:border transition-shadow duration-200'>Quickest 5-5 days. $3,121</button>
        </div>
    </div>
  )
}

export default TopQuote


// bg-white w-40 h-32 rounded-r-xl p-2 ml-0  cursor-pointer  sm:hover:shadow-slate-400 
//         sm:shadow-md sm:border transition-shadow 
//         duration-20