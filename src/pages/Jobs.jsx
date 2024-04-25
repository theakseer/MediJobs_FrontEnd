import React from 'react'

const jobs = ({ result }) => {
  return (
    <>
      <div>
        <h3 className='text-xl font-bold mb-2'>
        {result.length} Jobs
        </h3>
      </div>
      <section>{result}</section>
    </>
  )
}

export default jobs