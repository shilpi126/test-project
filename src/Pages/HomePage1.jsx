import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Location from '../components/Location'
import Services from '../components/Services'

function HomePage1() {
  return (
    <div  className='bg-violet-50 h-screen'>
        <Navbar/>
        <Title/>
        <Location/>
        <Services/>
    </div>
  )
}

export default HomePage1