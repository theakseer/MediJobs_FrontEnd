import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Jobs from './Jobs'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'


const Home = () => {
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [jobs, setJobs] = useState([])
  useEffect(() =>{
    fetch("jobs.json")
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setJobs(data)
      })
      .catch(err=> console.error(err))
  },[])

  const filteredJobs = jobs.filter(job => job.jobTitle.toLowerCase().indexOf(search.toLowerCase())!==-1)
  console.log(filteredJobs)

  // -----------------------title based filtering
  const handleSearchInput = (event)=>{
      event.preventDefault();
      setSearch(event.target.value)
  }
  // loational seach filter
  const handleLocationInput = (event)=>{
    event.preventDefault();
    setLocation(event.target.value)
  }
  // -----------------------Radios button filtering
  const handleChangeCategory = (event)=>{
    setCategory(event.target.value)
  }

  // -----------------------Radios button filtering
const handleClick = (event)=>{

  }

const filteredData = (jobs,selected, query, location)=>{
  let filteredItems = jobs
  if(query){
    filteredItems = filteredJobs
  }

  if (selected){
    filteredItems = filteredItems.filter(({jobLocation, maxPrice, location,experienceLevel, salaryType, employmentType, postingDate}) => (
      jobLocation.toLowerCase() === selected.toLowerCase() ||
      parseInt(maxPrice) <= parseInt(selected) ||
      salaryType.toLowerCase() === selected.toLowerCase()||
      employmentType.toLowerCase() === selected.toLowerCase() ||
      jobLocation.toLowerCase().indexOf(location.toLowerCase())!==-1

    ))
  }
  // console.log(filteredItems)

  return  filteredItems.map((data, index) => <Card data={data} key={index}/>)
}

const result = filteredData(jobs, category, search, location)

  return (
  <>
    <Banner query={search} handleSearchInput={handleSearchInput} location={location} handleLocationInput={handleLocationInput}/>
    {/* <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <p>
      Displaying 106 listing(s) that fit your search criteria.
      </p>
      <hr className=''/>  

    </div> */}
    <div className='bg-[#fafafa] mx-auto px-4 gap-8 lg:px-24 py-12  md:grid grid-cols-4'>
      {/* left */}
      <div className='bg-white rounded p-4'>
        <Sidebar handleClick={handleClick} handleChangeCategory={handleChangeCategory}/>
      </div>
      {/* mid */}
      <div className='col-span-2 bg-white p-4 rounded'>
        <Jobs result={result}/> 
      </div>
      <div className='bg-white rounded p-4'>Right</div>
    </div>
  </>
  )
}

export default Home