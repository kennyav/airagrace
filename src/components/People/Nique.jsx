import React from 'react'
import Test from '../Polaroids/Test'
import PHOTOS from '../Polaroids/nique.json'

export default function Nique() {
   return (
      <Test cards={PHOTOS} name={'nique'}/>
   )
}
