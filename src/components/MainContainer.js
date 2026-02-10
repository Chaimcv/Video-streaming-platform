import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import AllVideo from './AllVideo'
import HeroContainer from './HeroContainer'

const MainContainer = () => {
  return (
    <div className='col-span-10'>
      <HeroContainer />
        {/* <ButtonList /> */}
        {/* <VideoContainer /> */}
        <AllVideo />
    </div>
  )
}

export default MainContainer