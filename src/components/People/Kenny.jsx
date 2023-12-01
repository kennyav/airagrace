import React from 'react'
import Test from '../Polaroids/Test'
import PHOTOS from '../Polaroids/kenny.json'

export default function Kenny() {
   return (
      <Test cards={PHOTOS} name={'kenny'}/>
   )
}
