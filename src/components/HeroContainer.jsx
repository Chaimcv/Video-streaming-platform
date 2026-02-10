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
    <div className='bg-red-400 w-full h-52'>
       {/* <img className='rounded-lg ' src="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=mittidikushboo&key=AIzaSyBET7NpkeY1-2C83Ttprk0q3KeHfZouK5I" alt='video' /> */}
    </div>
  )
}

export default HeroContainer