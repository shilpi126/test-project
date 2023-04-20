import React from 'react'
import {GiWeightScale} from "react-icons/gi"
import {AiOutlineTable} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"
import {HiOutlineMinus} from "react-icons/hi"
import {BsAirplane} from "react-icons/bs"

function DataComponent() {
    const data = [
        {
            best: "Best Value",
            express: "Express",
            days:"Est 5 days",
            source:"110003, Delhi",
            destination: "200080,Sheanghal",
            primetime:"Primetime Worldwide",
            review:"4.5",
            price:"$ 3,982.63",
            

        },
        {
            best: "Best Value",
            express: "Express",
            days:"Est 5 days",
            source:"110003, Delhi",
            destination: "200080,Sheanghal",
            primetime:"Primetime Worldwide",
            review:"4.5",
            price:"$ 3,982.63",
            

        },
        {
            best: "Best Value",
            express: "Express",
            days:"Est 5 days",
            source:"110003, Delhi",
            destination: "200080,Sheanghal",
            primetime:"Primetime Worldwide",
            review:"4.5",
            price:"$ 3,982.63",
            

        }
    ]


  return (
    <div className='flex w-full ml-14'>


        <div className='w-6/12 '>


       {data.map((d, i) => (

        <div className=' h-32 mb-4  bg-white rounded-l-xl ml-4   cursor-pointer  sm:hover:shadow-slate-400 
        sm:shadow-md sm:border transition-shadow 
        duration-200'>

         <div className='flex  mt-2 ml-2'>
        <div className='text-xm rounded-xl mr-4 w-32 text-center h-8 pb-1 bg-green-300'>{d.best}</div>
        <div className='mr-4 text-lg text-red-700 text-bold'>{d.express}</div>
        <div>{d.days}</div>
        </div>
        

        <div className='flex ml-4 mt-4 text-gray-500'>
            <div className='flex'>
            <CiLocationOn className='text-2xl '/>
                {d.source}
            </div>
            <div className='flex'>
                <HiOutlineMinus className='text-2xl '/>
                <BsAirplane/>
                <HiOutlineMinus className='text-2xl '/>
            </div>
            <div className='flex'>
            <CiLocationOn className='text-2xl '/>
                {d.destination}
            </div>
        </div>

        <div className='flex ml-4 mt-2'>
            <div className='mr-8' >
              {d.primetime}
            </div>
            <div>
                {d.review}
            </div>
        </div>
        </div>
       ))}


        




    

    </div>






<div >
  
  {
    data.map((d,i) => (
        <div className='bg-white w-40 h-32 rounded-r-xl p-2 ml-0  cursor-pointer  sm:hover:shadow-slate-400 
        sm:shadow-md sm:border transition-shadow 
        duration-200 mb-4'>
              <h2 className='text-2xl font-bold text-center'>{d.price}</h2>
   

   <button className='h-8 w-28 ml-4 rounded-xl m-2 bg-violet-700 text-white'>Select</button>


   <h3 className='text-center'>View Details</h3>
        </div>
    ))
  }
    
    </div>

    

   


  

    </div>
  
  )
}

export default DataComponent