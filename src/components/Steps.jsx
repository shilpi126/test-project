import React from 'react'

function Steps() {
    const steps = ["Search", "Recommended services", "Results", "Booking"]

  return (
    <div className='h-36 w-86  flex justify-center  items-center '>
        {steps.map((step,i) => (
            <div key={i} >
                <div className='h-8 w-8 bg-fuchsia-400 text-center rounded-full absolute top-24 pt-1 mt-1 text-white'>{i+1}</div>
                <div className={`border-b-2 border-fuchsia-400 mb-4 ${i === 3 && " border-b-0"}`}></div>
                <p className='w-48 text-xs pt-2' style={{marginLeft:"-5px"}}>{step}</p>
            </div>
        ))}


    </div>
  )
}

export default Steps