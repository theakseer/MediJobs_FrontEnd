import React from 'react'

const InputField = ({ handleClick, value, title, name }) => {
    return (
        <>
            <label htmlFor={value} className="sidebar-label-container">
                <input type="radio" 
                    value={value} 
                    name={name}
                    id={value}   
                    onChange={handleClick}  />
                <span className="checkmark">
                </span> 
                    {title}
            </label>
            {/* <label htmlFor="all" className="sidebar-label-container">
                <input 
                    type="radio" 
                    value="all" 
                    name="options" 
                    id="all" 
                    onChange={handleOptionChange} /> 
                <span className="checkmark"></span> All
            </label> */}
        </>
    )
}

export default InputField