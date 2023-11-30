import React from 'react'
import { Link } from "react-router-dom"

export default function People() {
  return (
    <div className='grid grid-cols-4 grid-flow-row gap-4 text-3xl mt-12 text-[#19A7CE] z-100'>
      <Link to="/kenny"  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'>Kenny</Link>
      <Link to="/sarah"  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'>Sarah</Link>
      <Link to="/andrew" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'>Andrew</Link>
      <Link to="/nick"   className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'>Nick</Link>
      <Link to="/nique"  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'>Nique</Link>
      <Link to="/pablo"  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'>Pablo</Link>
      <Link to="/megan"  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'>Megan</Link>
    </div>
  )
}


