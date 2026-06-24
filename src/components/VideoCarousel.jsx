import React, { useState } from 'react'

const VideoCarousel = ({passedVideos}) => {  //not passed yet to be done....
    const[currentIndex,setcurrentIndex]=useState(0);
    const nextVideo=()=>{
        setcurrentIndex((prev)=>(prev+1)% passedVideos.length);
    }
    const prevVideo=()=>{
        setcurrentIndex((prev)=>(prev-1+passedVideos.length)%passedVideos.length);
    }
  return (
    <div>VideoCArousel</div>
  )
}

export default VideoCarousel