import React from 'react'
import {BiCloudUpload} from "react-icons/bi"
import {MdOutlineBusinessCenter} from "react-icons/md"
import {TbWorld} from "react-icons/tb"
import {Ri24HoursLine} from "react-icons/ri"


function Services() {
  return (
    <div className='mt-12'>
        <div className='text-3xl font-bold text-center'>Services</div>
        <div className='flex justify-between mr-12 ml-12 mt-8'>

            <div className='h-48 w-96 bg-white mr-10 rounded-2xl p-4 cursor-pointer  sm:hover:shadow-slate-400 
            sm:shadow-md sm:border transition-shadow 
            duration-200 '>
            <div className='flex justify-center items-center pb-4 text-lg font-semibold border-b-2'>
                <BiCloudUpload className='text-2xl text-sky-500'/>
                <h4 className='ml-4'>Freight Services</h4>
            </div>
            <div className='text-gray-800 pt-2'>
            Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.
            </div>
            </div>



            <div className='h-48 w-96 bg-white  mr-10 rounded-2xl p-4 
               cursor-pointer  sm:hover:shadow-slate-400 
               sm:shadow-md sm:border transition-shadow 
               duration-200 '>
            <div className='flex justify-center items-center pb-4 text-lg font-semibold border-b-2'>
                <MdOutlineBusinessCenter className='text-2xl text-red-500'/>
                <h4 className='ml-4'>Business Services</h4>
            </div>
            <div className='text-gray-800 pt-2'>
            We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.
            </div>
            </div>

            <div className='h-48 w-96 bg-white mr-10 rounded-2xl p-4 
               cursor-pointer  sm:hover:shadow-slate-400 
               sm:shadow-md sm:border transition-shadow 
               duration-200 '>
            <div className='flex justify-center items-center pb-4 text-lg font-semibold border-b-2'>
                <TbWorld className='text-2xl text-orange-500'/>
                <h4 className='ml-4'>Shipping & Logistics</h4>
            </div>
            <div className='text-gray-800 pt-2'>
            Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.
            </div>
            </div>

            <div className='h-48 w-96 bg-white
            rounded-2xl p-4 
            cursor-pointer  sm:hover:shadow-slate-400 
            sm:shadow-md sm:border transition-shadow 
            duration-200 
            '>
            <div className='flex justify-center items-center pb-4 text-lg font-semibold border-b-2'>
                <Ri24HoursLine className='text-2xl text-sky-500'/>
                <h4 className='ml-4'>24/7 Support</h4>
            </div>
            <div className='text-gray-800 pt-2'>
            Receive support from our experts all over the world at every stage of the process, 24/7.
            </div>
            </div>
        </div>
    </div>
  )
}

export default Services