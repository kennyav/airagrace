import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';

export default function Home() {
   const [explosionKey, setExplosionKey] = React.useState(0);

   function handleClick() {
      // Increment the explosion key to force re-rendering of ConfettiExplosion
      setExplosionKey((prevKey) => prevKey + 1);
   }


   return (
      <div className="flex flex-col items-center justify-center text-center h-screen">
         <h1 className='font-bold text-6xl text-[#AFD3E2]'>Happy Birthday</h1>
         <h1 className='font-bold text-4xl text-[#146C94]'>Christineil Aira Grace Catherine Lagare Berame Courselle</h1>
         <ConfettiExplosion key={explosionKey} />
         <button 
            onClick={handleClick}
            className='absolute lg:-translate-x-4 lg:translate-y-6 transition ease-in-out delay-150 lg:hover:translate-y-4 lg:hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'>
            Press me
         </button>
         <img className="mt-4" width="500px" height="auto" src="./Intersect.png" alt="cats" />
      </div>
   )
}
