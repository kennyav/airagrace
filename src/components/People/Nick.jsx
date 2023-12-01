import React from 'react'
import Test from '../Polaroids/Test'
import PHOTOS from '../Polaroids/nick.json'

export default function Nick() {
   return (
      <Test cards={PHOTOS} name={'nick'}/>
   )
}
