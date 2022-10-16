import React from 'react'
import Image from 'next/image'
import exit0 from '../assets/exit0.png'

function Exit() {
  return (
    <div className='w-screen h-screen p-10'>
      <div className="block relative h-1/2">
        <Image src={exit0} layout="fill" objectFit="contain" />
      </div>
    </div>
  )
}

export default Exit