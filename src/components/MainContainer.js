import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import AllVideo from './AllVideo'

const MainContainer = () => {
  return (
    <div className='col-span-10'>
        <ButtonList />
        {/* <VideoContainer /> */}
        <AllVideo />
    </div>
  )
}

export default MainContainer