import React from 'react'

export default function Errorbox({msg}) {
  return (
    <div className='mt-2'>
      <h2 className='rounded-md text-center text-3xl bg-red-500 p-2 text-white'>{msg}</h2>
    </div>
  )
}
