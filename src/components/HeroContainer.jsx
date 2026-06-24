import React, { useEffect, useState } from 'react'
import { HERO_VIDEO } from '../Redux/constants';

const HeroContainer = () => {
    const[heroVideo,setHeroVideo]=useState();
     const videoArray=[""]
      useEffect(()=>{
                getVideo();
            },[]);
            const getVideo=async () =>{
                const data =await fetch(HERO_VIDEO);
               const json=await data.json();
                console.log(json," hero-videos ");
                setHeroVideo(json.items);
            };
            console.log(heroVideo,"videos");
  return (
    <div className='relative'>
             <video autoPlay loop muted playsInline className="video-bg">
        {/* <source src="https://tecdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" /> */}
      </video>
    </div>
  )
}

export default HeroContainer