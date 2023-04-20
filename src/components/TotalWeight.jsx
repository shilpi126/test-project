import React from 'react'
import {GiWeightScale} from "react-icons/gi"
import {AiOutlineTable} from "react-icons/ai"

function TotalWeight() {
  return (
    <div className='w-full h-36  flex justify-between mt-2 ml-8 mr-10'>


    <div className='bg-white w-64 h-32 rounded-xl p-2   cursor-pointer  sm:hover:shadow-slate-400 
            sm:shadow-md sm:border transition-shadow 
            duration-200'>
        <div className='text-md mb-1 text-center'>
            <h2>Total Weight/Volume</h2>
        </div>
        <div className='text-4xl flex justify-center mb-1'>
            <GiWeightScale/>
        </div>
        <div className='text-md font-semibold text-center'>
            <h3>114.21KG</h3>
        </div>
        </div>



        <div className='w-full h-32 bg-white rounded-xl ml-4   cursor-pointer  sm:hover:shadow-slate-400 
            sm:shadow-md sm:border transition-shadow 
            duration-200'>
            <div className='p-2 text-lg'>Load</div>

            <div className='flex justify-center'>
               <div className='font-bold mr-8 mt-2'>1 X</div>
               <div  style={{marginTop:"-10px"}}>
                <div className='text-4xl ml-2'>
                    <AiOutlineTable/>
                </div>
                <div className='font-semibold mb-1'>Pallets</div>
               </div>
            </div>
            <div className='text-center ml-2 text-sm'>230 X 140 X 120 CM</div>
        </div>



      

    </div>
  )
}

export default TotalWeight