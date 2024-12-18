import React from 'react'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  const {
    id, 
    companyName, 
    jobTitle, 
    companyLogo, 
    minPrice, 
    maxPrice, 
    salaryType, 
    jobLocation, 
    postingDate, 
    experienceLevel, 
    employmentType, 
    description} = data
  return (
    <section className='card'>
        <Link to="/" className='flex gap-4 flex-col sm:flex-row items-start'>
          {/* <img src={companyLogo} alt="" /> */}
          <div className='card-details'>
            {/* <h4 className='text-primary mb-4'>{companyName}</h4> */}
            <h4 className='text-lg font-semibold mb-2'>{jobTitle}</h4>
            <div className='text-primary text-base flex flex-wrap gap-2 mb-2'>
              <span className='flex items-center text-gray-500 text-sm'> <FiMapPin className='mr-1 inline'/> {jobLocation}</span>
              <span className='flex items-center text-gray-500 text-sm'> <FiClock className='mr-1 inline'/> {employmentType}</span>
              <span className='flex items-center text-gray-500 text-sm'> <FiDollarSign className='mr-1 inline'/> {minPrice}-{maxPrice}</span>
              <span className='flex items-center text-gray-500 text-sm'> <FiCalendar className='mr-1 inline'/> {postingDate}</span>
            </div>
            <p>{description}</p>
          </div>
        </Link>
    </section>
  )
}

export default Card