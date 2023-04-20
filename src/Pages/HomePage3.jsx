import React from 'react'
import Navbar3 from '../components/Navbar3'
import Steps from '../components/Steps'
import BookingSummary from '../components/BookingSummary'

function HomePage3() {
  return (
    <div className='bg-violet-50 h-screen'>
        <Navbar3/>
        <Steps/>
        <BookingSummary/>
    </div>
  )
}

export default HomePage3