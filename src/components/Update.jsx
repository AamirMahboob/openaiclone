import React from 'react'
import speak from '../assets/speak.jpg'
function Update({ image, title, date }) {
  return ( 
    <div className='md:flex md:flex-col mx-6    p-4 '>
      <img src={image} width={300} height={300} className='rounded-md' />
      <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  my-[30px]' >{title}</p>
      <p className='text-white  tracking-tight mt-[-30px]' >{date}</p>
    </div>
  )
}

export default Update