import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store) => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-md'>
        
        <ul>
            <li  className=' hover:bg-slate-100 rounded-lg'><Link to="/"><img className="w-10 h-10 inline-flex" src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt='Home' /></Link></li>
            <li className=' hover:bg-slate-100 rounded-lg'> <img className="w-4 h-4 inline-flex m-3" src="https://e7.pngegg.com/pngimages/342/516/png-clipart-computer-icons-search-icon-zooming-user-interface-computer-icons-thumbnail.png" alt='search' /></li>
          
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 m-2 inline-flex" src="https://seekicon.com/free-icon-download/history_8.svg" /></li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/playlist-videos-icon.png" alt='playlist' /></li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-6 h-6 inline-flex ml-1 my-2 mr-2" src="https://cdn.creazilla.com/icons/3264833/watch-later-icon-size_512.png" alt='watch later' /></li>
            <li  className=' hover:bg-slate-100 rounded-lg'><img className="w-5 h-5 inline-flex m-2" src="https://www.pngfind.com/pngs/m/286-2863936_png-file-svg-youtube-like-button-white-transparent.png" alt='liked videos' /></li>
        
         
            <li className=' hover:bg-slate-100 rounded-lg'><img className="w-6 h-6 inline-flex m-2" src="https://media.istockphoto.com/id/1494298565/vector/vector-illustration-of-musical-note-logo-on-white-background.jpg?s=612x612&w=0&k=20&c=5_JC6F9d3eTAXDwdSx-Amkr67C7GpPf26_MIhSkXieE=" alt='music' /></li>
            <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-6 h-6 inline-flex m-2" src="https://cdn.vectorstock.com/i/750p/24/90/monochrome-simple-clapperboard-icon-vector-36902490.avif" alt='films'/></li>
            <li className=' hover:bg-slate-100 rounded-lg' ><img className="w-5 h-5 inline-flex m-2" src="https://pic.onlinewebfonts.com/thumbnails/icons_243388.svg" /></li>
       
             
        </ul>
        < br/>
       
    </div>
  )
}

export default Sidebar