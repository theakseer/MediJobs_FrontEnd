import React from 'react'
import Location from '../sidebar/Location'

const Sidebar = ({handleChangeCategory, handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>
        Filters
      </h3>
      <Location handleClick={handleChangeCategory}/>
    </div>
  )
}

export default Sidebar