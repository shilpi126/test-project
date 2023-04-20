import React from 'react'
import Navbar2 from '../components/Navbar2'
import Title from '../components/Title'
import Location from '../components/Location'
import Services from '../components/Services'

export default function HomePage2() {
  return (
    <div className='bg-violet-50 h-screen'>
        <Navbar2/>
        <Title/>
        <Location/>
        <Services/>
    </div>
  )
}
