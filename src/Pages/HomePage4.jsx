import React from 'react'
import Navbar2 from '../components/Navbar2'
import Steps from '../components/Steps'
import Location from '../components/Location'
import TopQuote from './TopQuote'
import Data from '../components/Data'

function HomePage4() {
  return (
    <div className='bg-violet-50 h-screen'>
        <Navbar2/>
        <Steps/>
        <Location/>
        <TopQuote/>
        <Data/>
    </div>
  )
}

export default HomePage4