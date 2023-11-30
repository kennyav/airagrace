import React from 'react'

// photos components
import People from './People'

export default function PhotoGallery() {
  return (
    <main className="flex flex-col items-center text-center pt-12 h-screen">
      <h1 className='font-bold lg:text-7xl md:text-5xl text-4xl text-[#146C94]'>Photo Gallery</h1>
      <h2 className='lg:text-4xl md:text-2xl text-xl text-[#AFD3E2]'>Here is a collection of photos from everyone, select a person to get started</h2>
      <People />
    </main>
  )
}
