import React, { useEffect, useState } from 'react'
import { HERO_VIDEO } from '../utils/constants';

const HeroContainer = () => {
    const[heroVideo,setHeroVideo]=useState();

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
    <div className='relative h-screen'>
             <video autoPlay loop muted playsInline className="video-bg">
        <source src="https://tecdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
      </video>
      <button className='absolute mt-[550px] ml-20 bg-white text-black p-3'>Watch Now</button>
    </div>
  )
}

export default HeroContainer