import React from 'react'
import Test from '../Polaroids/Test'
import PHOTOS from '../Polaroids/pablo.json'

export default function Pablo() {
   return (
      <Test cards={PHOTOS} name={'pablo'}/>
   )
}
