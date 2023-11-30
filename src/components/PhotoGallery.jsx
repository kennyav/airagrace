import React from 'react'

// photos components
import People from './Photos/People'

export default function PhotoGallery() {
  return (
    <main className="flex flex-col items-center pt-12 h-screen">
      <h1 className='font-bold text-7xl text-[#146C94]'>Photo Gallery</h1>
      <h2 className='text-4xl text-[#AFD3E2]'>Here is a collection of photos from everyone, select a person to get started</h2>
      <People />
    </main>
  )
}
