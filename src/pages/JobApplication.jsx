import React from 'react'
import { useParams } from 'react-router-dom'

const JobApplication = () => {
    const {jobId} = useParams()
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
      <h1 className='text-4xl font-bold text-center md:text-left'>Connecting
                <span className='text-green-500'> Health Careers</span>, Empowering Lives.
            </h1>
            <p className='text-xl text-center md:text-left text-black/70 mb-8 mt-6'>
                Explore endless possibilities in healthcare careers with our intuitive job portal. 
                Find your perfect match and embark on a fulfilling professional journey
            </p>
      </div>
    </>
  )
}

export default JobApplication