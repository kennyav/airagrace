import React from 'react'
import Test from '../Polaroids/Test'
import PHOTOS from '../Polaroids/megan.json'

export default function Megan() {
   return (
      <Test cards={PHOTOS} name={'megan'}/>
   )
}
