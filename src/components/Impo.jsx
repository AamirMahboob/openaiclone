import React from 'react'

const Impo = ({title,pgh,link}) => {
  return (
    <div className='md:w-full w-[300px] ml-[30px] bg-black p-[20px]'>
         <div class="border-b border-gray-300 my-4 h-1     mx-[35px]   "></div>
        <div className='md:flex md:flex-row justify-between flex-col '>
           <div className='md:w-[50%] w-[300px]   '>
           <h1 className='text-white  font-serif leading-[110%] md:text-3xl text-2xl cursor-pointer mx-[54px]'>{title}</h1>
           </div>
           <div className='md:w-[50%] w-[200px] p-[10px] ml-[40px]  '>
           <h1 className='text-white  md:text-[25px] text-[20px] mb-3 cursor-pointer  leading-[120%] font-sans md:tracking-widest align-middle  '>{pgh}</h1>
           <p className='text-white  text-[15px] underline underline-offset-1 cursor-pointer  h-[30.68px]    mt-2  ' >{link}</p>
           </div>
        </div>
    </div>
  )
}

export default Impo