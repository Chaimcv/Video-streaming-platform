import React from 'react'
import VideoContainer from './VideoContainer'
import AllVideo from './AllVideo'
import HeroContainer from './HeroContainer'

const MainContainer = () => {
  return (
    <div className='col-span-10 bg-[#0f1014]'>
      <HeroContainer />
    
        {/* <VideoContainer /> */}
        <AllVideo />
    </div>
  )
}

export default MainContainer