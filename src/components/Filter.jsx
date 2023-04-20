import React from 'react'
import {IoIosArrowDown} from "react-icons/io"

function Filter() {
  return (
    <div className='w-80 p-4 h-full'>
        <div className='flex justify-between pb-4 text-lg'>
            <div>Filter</div>
            <div>
            <IoIosArrowDown/>
            </div>
        </div>
        <div className='flex justify-between pb-4 text-lg'>
            <div>Price</div>
            <div>
            <IoIosArrowDown/>
            </div>
        </div>
        <div className='flex justify-between pb-4 text-lg'>
            <div>Modes</div>
            <div>
            <IoIosArrowDown/>
            </div>
        </div>
        <div className='flex justify-between pb-4 text-lg'>
            <div>Seller</div>
            <div>
            <IoIosArrowDown/>
            </div>
        </div>
    </div>
  )
}

export default Filter