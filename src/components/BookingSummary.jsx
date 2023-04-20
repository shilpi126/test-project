import React from 'react'
import {MdOutlineFlight} from "react-icons/md"
import {MdOutlineVerticalShadesClosed} from "react-icons/md"
import TotalWeight from './TotalWeight'
import Primetime from './Primetime'
import PriceDetails from './PriceDetails'

function BookingSummary() {
  return (
    <div  className='flex justify-between'>
        <div className='w-full'>
            <div className='bg-white w-full h-44 ml-8 rounded-xl 
            cursor-pointer  sm:hover:shadow-slate-400 
            sm:shadow-md sm:border transition-shadow 
            duration-200 '>
                <h1 className='text-xl font-semibold p-2'>Booking summary</h1>
                <div className='text-center '>
                    <h1>Express</h1>
                    <div className='flex  justify-center '>
                        <MdOutlineFlight className='rotate-45 text-2xl '/>
                    </div>
                </div>
                <div className='flex justify-between items-center ml-8 mb-8  mr-8 '>
                    <div className='w-48 '>
                        
                        <MdOutlineVerticalShadesClosed className='text-2xl  ml-12'/>
                      <div className='text-center'>
                      <p>Delhi,</p>
                        <p>110003 India</p>
                      </div>
                    </div>
                    <div className='border-2 border-gray-500 w-full mb-12 ' ></div>
                    <div className='w-48 '>
                    <MdOutlineVerticalShadesClosed className='text-2xl ml-12'/>
                  <div className='text-center'>
                    <p>Shinghai,</p>
                    <p>200080 China</p>
                  </div>
                    </div>
                </div>
            </div>

            
                <TotalWeight/>
          
                <Primetime/>
        </div>
        {/* <div>Price Details</div> */}
        <div className=' w-5/12 bg-white ml-28 mr-10 rounded-2xl  cursor-pointer  sm:hover:shadow-slate-400 
            sm:shadow-md sm:border transition-shadow 
            duration-200'>
          <PriceDetails/>
        </div>
    </div>
  )
}

export default BookingSummary