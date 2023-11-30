import React from 'react'
import Test from '../Polaroids/Test'
import PHOTOS from '../Polaroids/photos.json'

export default function Pablo() {
   return (
      <Test cards={PHOTOS} />
   )
}
