import React from 'react'
import InputField from './InputField'

const Location = ({handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div>
        <label htmlFor="All" className="sidebar-label-container">
                <input type="radio" 
                    value="" 
                    name="test"
                    id="All"   
                    onChange={handleClick}  />
                <span className="checkmark">
                </span> 
                All
            </label>
        {/* <InputField handleClick={handleClick} value="" title="All" name="test" /> */}
        <InputField handleClick={handleClick} value="london" title="London" name="test" />
        <InputField handleClick={handleClick} value="Seattle" title="Seattle" name="test" />
        <InputField handleClick={handleClick} value="Madrid" title="Madrid" name="test" />
        <InputField handleClick={handleClick} value="Brussels" title="Brussels" name="test" />
        <InputField handleClick={handleClick} value="San Francisco" title="San Francisco" name="test" />
        <InputField handleClick={handleClick} value="Boston" title="Boston" name="test" />
        </div>
    </div>
  )
}

export default Location