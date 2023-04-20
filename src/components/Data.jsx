import React from 'react'
import Filter from "./Filter"
import DataComponent from './DataComponent'
function Data() {
  return (
    <div className='flex m-10'>
        <Filter/>
        <DataComponent/>
    </div>
  )
}

export default Data