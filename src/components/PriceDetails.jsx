import React from 'react'

function PriceDetails() {
  return (
    <div className=' p-8'>
        <div className='flex mb-6'>
        <div className='text-xl font-semibold mr-4'>Price details</div>
        <button className='bg-gray-400 rounded-2xl w-32'>Known shipper</button>
        </div>

        <div className='flex justify-between text-gray-500 border-b-2 border-gray-300'>
        <div className='p-4'>Saller's Quote</div>
        <div className='p-4'>$ 3,659.25</div>
        {/* <div className='border-b-2 border-gray-600 w-full'></div> */}
        </div>


        <div className=' text-gray-500 border-b-2 border-gray-300 pb-4 pt-4'>
       <div className='flex justify-between'>
        <div>Duties and taxes</div>
        <div>Not Included</div>
        
        </div>
        <div className='flex justify-between'>
        <div>Insurance</div>
        <div>$323.40</div>
        
        </div>
        <div>
        Based on the items cost
        </div>
        </div>

        <div className=' text-gray-500 border-b-2 border-gray-300 pb-4 pt-4'>
        <div>
        <div>Add a promo code</div>
        </div>
        <div className='flex justify-between'>
        <div >Platform fee</div>
        <div>$119.48</div>
        </div>
        
        <div></div>
       </div>

       <div className='flex justify-between text-2xl font-bold mt-4'>
        <div>Total:</div>
        <div>$ 4,102.13</div>
       </div>

       <button className='h-10 w-64 bg-fuchsia-700 text-white text-lg rounded-xl flex justify-center items-center mt-8 ml-6'>Checkout</button>


    </div>
  )
}

export default PriceDetails