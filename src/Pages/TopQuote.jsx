import React from 'react'

function TopQuote() {
  return (
    <div className='flex m-4'>
        <div className='ml-8 mr-36'>
            <span>3 Top Quote</span>
            <span>(6 in Total)</span>
        </div>
        <div className='h-8  rounded-xl pl-2 pr-2'>

            <button  className='h-8 w-60 bg-fuchsia-200 pr-6 rounded-xl'>Best Value 5-5 days. $3,121</button>
            <button className='h-8 w-60 bg-fuchsia-200 pr-6 rounded-xl'>Quickest 5-5 days. $3,121</button>
            <button className='h-8 w-60 bg-fuchsia-200 rounded-xl'>Quickest 5-5 days. $3,121</button>
        </div>
    </div>
  )
}

export default TopQuote