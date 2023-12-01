import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';

export default function Home() {
   const [explosionKey, setExplosionKey] = React.useState(0);
   const buttonTranslate = '-translate-x-3 md:translate-y-8 translate-y-10'

   function handleClick() {
      // Increment the explosion key to force re-rendering of ConfettiExplosion
      setExplosionKey((prevKey) => prevKey + 1);
   }


   return (
      <div className="flex flex-col items-center justify-center text-center h-screen">
         <h1 className='font-bold lg:text-6xl text-5xl text-[#AFD3E2]'>Happy Birthday</h1>
         <h1 className='font-bold lg:text-4xl text-3xl px-6 text-[#146C94]'>Christineil Aira Grace Catherine Lagare Berame Courselle</h1>
         <ConfettiExplosion key={explosionKey} />
         <button 
            onClick={handleClick}
            className={`${buttonTranslate} absolute transition ease-in-out delay-150 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center`}>
            Press me
         </button>
         <img className="mt-4" width="500px" height="auto" src="./Intersect.png" alt="cats" />
      </div>
   )
}
