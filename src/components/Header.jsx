import React from 'react';
import { Link } from "react-router-dom"

export default function Header({ setMenu, menu }) {

   const spanStyle = 'transition-all duration-300 ease-in-out lg:hover:text-9xl hover:text-7xl cursor-pointer'

   function handleClick() {
      setMenu(`-translate-x-full`)
   }
   return (
      <div
         style={{
            backdropFilter: 'blur(10px)',
         }}
         className={`z-10 ${menu} transition duration-700 ease-out-in absolute inset-0 flex flex-col h-screen w-screen bg-transparent font-bold lg:text-7xl text-5xl p-10 text-[#146C94]`}>
         <Link to="/" onClick={handleClick}>
            <span className={`${spanStyle}`}>Home</span>
         </Link>
         <Link to="/photo-gallery" onClick={handleClick}>
            <span className={`${spanStyle}`}>Photo Gallery</span>
         </Link>
         <Link to="/about" onClick={handleClick}>
            <span className={`${spanStyle}`}>About</span>
         </Link>
      </div>
   );
}
