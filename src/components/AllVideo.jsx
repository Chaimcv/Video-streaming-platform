import React, { useEffect, useState } from 'react'

const AllVideo = () => {
    const url=process.env.REACT_API;
    const[videos,setVideos]=useState();
    
        useEffect(()=>{
            getVideo();
        },[]);
        const getVideo=async () =>{
            const data =await fetch(url);
           const json=await data.json();
            console.log(json,"videos accessed");
            setVideos(json.items);
        };
        console.log(videos,"videos");
  return (
    <div>AllVideo</div>
  )
}

export default AllVideo