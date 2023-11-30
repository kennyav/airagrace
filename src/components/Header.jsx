import React from 'react';

export default function Header() {
   return (
      <div className='flex flex-col font-bold text-7xl p-10 text-[#146C94]'>
         <div>
         <span className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Home</span>
         </div>
         <div>
         <span className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Photo Gallery</span>
         </div>
         <div>
         <span className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>About</span>
         </div>
         <div>
         <span className='transition-all duration-300 ease-in-out hover:text-9xl cursor-pointer'>Extra</span>
         </div>
      </div>
   );
}
