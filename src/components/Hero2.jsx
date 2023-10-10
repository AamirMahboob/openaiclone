import React from 'react'
import { Link } from 'react-router-dom'

function Hero2({title,link}) {
  return (
    <div className='md:flex md:flex-col  md:items-center md:justify-start   md:my-[60px] mx-7  my-[-13px] p-3 '>
        <h1 className='text-white md:font-bold md:text-2xl cursor-pointer md:mx-[54px]  md:text-[24px] text-[28px] mt-3 '>{title}</h1>
         <p className='text-white  underline underline-offset-1 hover:border-gray-700 cursor-pointer   md:my-[30px]  md:mr-[35px]  text-xl text-[21px]  ' >{link}</p>
    </div>
  )
}

export default Hero2