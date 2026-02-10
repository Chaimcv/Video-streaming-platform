import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className=' m-2 px-2  text-black border-collapse bg-gray-200 rounded-md hover:bg-black hover:text-white'>{name}</button>
    </div>
  )
}

export default Button