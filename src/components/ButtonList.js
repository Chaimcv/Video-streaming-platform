import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex font-semibold'>
        <Button name="All" />
        <Button name="Music" />
        <Button name="Movie musicals" />
        <Button name="Sreya Ghoshal" />
        <Button  name="Podcasts"/>
         <Button  name="Mixes"/>
          <Button  name="Arijit Singh"/>
           <Button  name="Palak Muchhal"/>
    </div>
  )
}

export default ButtonList