import React from 'react'
import {CiLocationOn} from "react-icons/ci"
import {BiCalendar, BiCloudUpload} from "react-icons/bi"
import {BsFillArrowRightSquareFill} from "react-icons/bs"

function Location() {
  return (
    <div className='h-14 ml-16 mr-16 flex  items-center border-2 border-gray-100 bg-white'>
        <div className='flex justify-center items-center ml-2 mr-48 text-gray-400 '>
            <span>
                <CiLocationOn/>
            </span>
            <span>
            Origin, Port, City
            </span>
        </div>
        <div className='flex justify-center items-center mr-48 text-gray-400'>
        <span>
        <CiLocationOn/>
        </span>
        <span>
        Destination, Port, City
        </span>
        </div>
        <div className='flex justify-center items-center mr-48 text-gray-400'>
            |
        <span className='pl-4'>
            <BiCalendar/>
        </span>
            <span>
            13 April 2023
            </span>
        </div>
        <div className='flex justify-center items-center mr-48 text-gray-400 '>
            |
        <span className='pl-4'>
            <BiCloudUpload/>
        </span>
            <span>
            Load
            </span>
        </div>
        <div className='text-violet-700 text-3xl'>
        <BsFillArrowRightSquareFill />
        </div>


    </div>
  )
}

export default Location