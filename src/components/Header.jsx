import React from 'react';

export default function Header() {
   return (
      <div className='font-bold text-7xl p-10'>
         <div className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Home</div>
         <div className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Photo Gallery</div>
         <div className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>About</div>
         <div className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Extra</div>
      </div>
   );
}
