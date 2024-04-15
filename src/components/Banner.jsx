import React, { useState } from 'react'
import { FiMapPin, FiSearch } from 'react-icons/fi'

const Banner = () => {
    const [search, setSearch] = useState("")
    const handleSearchInput = (event)=>{
        event.preventDefault();
        setSearch(event.target.value)
    }
    console.log(search)
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
            <h1 className='text-4xl font-bold text-center md:text-left'>Connecting
                <span className='text-green-500'> Health Careers</span>, Empowering Lives.
            </h1>
            <p className='text-xl text-center md:text-left text-black/70 mb-8 mt-6'>
                Explore endless possibilities in healthcare careers with our intuitive job portal. 
                Find your perfect match and embark on a fulfilling professional journey
            </p>
        <form action="">
            <div className='flex justify-start md:flex-row flex-col md:gap-4 gap-2'>
                <div className='flex flex-1 focus:outline-none focus:ring focus:ring-green-500 ring-1 rounded'>
                    <input type="text" name='title' id='title' 
                        placeholder="Discover what you're seeking." 
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-9 
                        text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
                        onChange={handleSearchInput}
                        value={search}
                        />
                        <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
                    
                </div>
                <div className='flex flex-1 md:rounded-s-md rounded shadow-sm 
                    ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                    focus-within:ring-inset focus-within:ring-indigo-600 '>
                    <input type="text" name='title' id='title' 
                        placeholder="Discover what you're seeking." 
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-9 
                        text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
                        onChange={handleSearchInput}
                        value={search}
                        />
                        <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
                    
                </div>
            </div>
        </form>
        </div>
    )
}

export default Banner