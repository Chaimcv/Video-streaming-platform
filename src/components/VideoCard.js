import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info,"data passed from videocontainer");

    const{ snippet,statistics }= info;
    const{ channelTitle,title,thumbnails }=snippet;
    
  return (
    <div className='p-2 m-2 w-[350px] h-80 shadow-md hover:bg-blue-50'>
        <img className='rounded-lg ' src={thumbnails?.medium?.url} alt='thumbnail' />
        <ul>
            <li className='font-semibold overflow-hidden'>{title}</li>
            <li className='text-gray-600'>{channelTitle}</li>
            {/* <li className='text-gray-600'>{statistics.viewCount} views</li> */}
        </ul>
    </div>
  )
}

export default VideoCard