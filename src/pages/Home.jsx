import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Jobs from './Jobs'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'


const Home = () => {
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    setIsLoading(true)
    fetch("jobs.json")
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setJobs(data)
        setIsLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  var filteredItems = jobs.filter(job => job.jobTitle.toLowerCase().indexOf(search.toLowerCase()) !== -1)
  // console.log(filteredJobs)

  // -----------------------title based filtering
  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearch(event.target.value)
  }
  // loational seach filter
  const handleLocationInput = (event) => {
    event.preventDefault();
    setLocation(event.target.value)
  }
  // -----------------------Radios button filtering
  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value)
  }

  // -----------------------Radios button filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  // for pagination, indices
  const calculatePagination = (currentPage, itemsPerPage, totalItems) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    
    return { startIndex, endIndex };
}

    // next page boolean value

    const nextPage = () => {
      if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1)
      }
    }
  
    // previous page boolean value
  
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  

  const filteredData = (jobs, selected, query, location) => {
    let filteredJobs = jobs
    if (query) {
      filteredJobs = filteredItems
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, location, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
        // jobLocation.toLowerCase().indexOf(location.toLowerCase())!==-1

      ))
    }
    // console.log(filteredItems)

    // const { startIndex, endIndex } = calculatePagination(currentPage, itemsPerPage, filteredJobs.length)

    // filteredJobs = filteredJobs.slice(startIndex, endIndex)
    return filteredJobs.map((data, index) => <Card data={data} key={index} />)
  }



  const result = filteredData(jobs, selectedCategory, search, location)

  return (
    <>
      <Banner query={search} 
        handleSearchInput={handleSearchInput} 
        location={location} 
        handleLocationInput={handleLocationInput} />
      {
      /* <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <p>
      Displaying 106 listing(s) that fit your search criteria.
      </p>
      <hr className=''/>  
    </div> */
    }
      <div className='bg-[#fafafa] mx-auto px-4 gap-8 lg:px-24 py-12  md:grid grid-cols-4'>
        {/* left */}
        <div className='bg-white rounded p-4'>
          <Sidebar handleClick={handleClick} handleChangeCategory={handleChangeCategory} />
        </div>
        {/* mid */}
        <div className='col-span-2 bg-white p-4 rounded'>
          {
            isLoading ?
              (<p className='font-medium'>Loading...</p>) :
              result.length > 0 ?
                (<Jobs result={result} />) :
                <>
                  <h3 className='font-bold text-xl mb-2'>{result.length} Jobs</h3>
                  <p>No data found on your search</p>
                </>
          }

          {/* pagination    */}
          {
            // result.length > 0 &&
            // (<>
            //   <div className='flex justify-center mt-4 space-x-8'>
            //     <button onClick={prevPage}>Previous</button>
            //     <span> Page {currentPage} of {Math.ceil(result.length / itemsPerPage)}</span>
            //     <button onClick={nextPage}>Next</button>
            //   </div>
            // </>)
          }
        </div>
        <div className='bg-white rounded p-4'>Right</div>
      </div>
    </>
  )
}

export default Home