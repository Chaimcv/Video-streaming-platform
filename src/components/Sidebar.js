import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/appSlice';

const Sidebar = () => {
   
    const isMenuOpen=useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-md bg-[#0f1014]'>
        
        <ul>
            <li  className='rounded-lg'><Link to="/"><img className="w-10 h-10 inline-flex" src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-white-icon.png" alt='Home' /></Link></li>
            <li className=' hover:bg-slate-100 rounded-lg'> <img className="w-4 h-4 inline-flex m-3" src="https://e7.pngegg.com/pngimages/342/516/png-clipart-computer-icons-search-icon-zooming-user-interface-computer-icons-thumbnail.png" alt='search' /></li>
          
    
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/playlist-videos-icon.png" alt='playlist' /></li>
            
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://www.pngfind.com/pngs/m/286-2863936_png-file-svg-youtube-like-button-white-transparent.png" alt='liked videos' /></li>
        
         
            <li className=' hover:bg-slate-100 rounded-lg'><img className="w-6 h-6 inline-flex m-2" src="https://media.istockphoto.com/id/1494298565/vector/vector-illustration-of-musical-note-logo-on-white-background.jpg?s=612x612&w=0&k=20&c=5_JC6F9d3eTAXDwdSx-Amkr67C7GpPf26_MIhSkXieE=" alt='music' /></li>
            <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-6 h-6 inline-flex m-2" src="https://cdn.vectorstock.com/i/750p/24/90/monochrome-simple-clapperboard-icon-vector-36902490.avif" alt='films'/></li>
            <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt='user' /></li>
       
             
        </ul>
        < br/>
       
    </div>
  )
}

export default Sidebar