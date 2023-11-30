import React from 'react';
import { Link } from "react-router-dom"

export default function Header() {
   return (
      <nav className='flex flex-col font-bold text-7xl p-10 text-[#146C94]'>
         <Link to="/" >
            <span className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Home</span>
         </Link>
         <Link to="/photo-gallery">
            <span className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Photo Gallery</span>
         </Link>
         <Link to="/about">
            <span className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>About</span>
         </Link>
         <Link to="/extra">
            <span className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Extra</span>
         </Link>
      </nav>
   );
}
