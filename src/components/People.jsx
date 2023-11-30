import React from 'react'
import { Link } from "react-router-dom"

export default function People() {

  const style = 'transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#AFD3E2] rounded-md p-2 flex items-center justify-center'
  return (
    <div className='grid grid-cols-4 grid-flow-row gap-4 text-3xl mt-12 text-[#19A7CE] z-100'>
      <Link to="/sarah"  className={`${style}`}>Sarah</Link>
      <Link to="/kenny"  className={`${style}`}>Kenny</Link>
      <Link to="/andrew" className={`${style}`}>Andrew</Link>
      <Link to="/nick"   className={`${style}`}>Nick</Link>
      <Link to="/nique"  className={`${style}`}>Nique</Link>
      <Link to="/pablo"  className={`${style}`}>Pablo</Link>
      <Link to="/megan"  className={`${style}`}>Megan</Link>
    </div>
  )
}


