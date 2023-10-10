import React from 'react'
import Logo1 from '../assets/Logo1.png'
import { Link } from 'react-router-dom';
 
import { FaArrowUp } from 'react-icons/fa';
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
     
    
  return (
    <div>
    <div className='flex flex-row bg-black h-[250px]'>
       <div className='w-[40%]  ml-8'>
       <img src={Logo1} width={110} height={110}   />
       </div>
       <div className='w-[60%] flex flex-row '> 
            <div className='mr-[90px]'>
                <h4 className='text-white font-bold'>Research</h4>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer '>Overview</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer '>index</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer '>GPT-4</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer '>DALL·E 3</p>

            </div>
            <div className='mr-[90px]'>
                <h4 className='text-white font-bold'>API</h4>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer '>Overview</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer '>Data privacy</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer '>Pricing</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer '>Docs</p>

            </div>
            <div className='mr-[90px]'>
                <h4 className='text-white font-bold'>ChatGPT</h4>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Overview</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Enterprise</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Try ChatGPT</p>
               

            </div>
            <div >
                <h4 className='text-white font-bold'>Company</h4>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>About</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Blog</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Charter</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Security</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Customer stories</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Safety</p>

            </div>
       </div>
      
      
        
    </div>
    <div className=' mt-[-20px]  flex flex-row bg-black h-60'>
    <div class="border-b border-gray-300 my-4 h-1        "></div>
     <div className='flex  '>
        <div className='w-[40%] mx-[35px]'>
         
       <img src={Logo1} width={110} height={110}   />
       
       <div className='mx-[35px]'  >
                 
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>
Terms & policies</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Privacy policy
</p>
                <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  '>Brand Guidelines</p>
               

            </div>
          
        </div >
        <div className='ml-[200px]' >
        <div className=' w-[60%] flex flex-row  '>
        <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer mr-5  '>Twitter</p>
        <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer mr-5  '>Youtube</p>
        <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer  mr-5 '>Github</p>
        <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer mr-5 '>Sound cloud</p>
        <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer mr-5 '>LinkedIn</p>
        </div>
        <div className="flex items-center">
     
     <Link   onClick={scrollToTop} > <p className="text-white mt-8">Back to top</p></Link>
      <FaArrowUp className="text-white ml-2 mt-8" />
    </div>
        </div>  
        
     </div>
       
    </div>
    <div className='bg-black w-full h-[20px] mt-[3px]'></div>
    <div className='bg-black w-full h-[17px] mt-[5px]'></div>
    <div className='bg-black w-full h-[16px] mt-[7px]'></div>
    <div className='bg-black w-full h-[15px] mt-[9px]'></div>
    <div className='bg-black w-full h-[14px] mt-[13px]'></div>
    <div className='bg-black w-full h-[13px] mt-[14px]'></div>
    <div className='bg-black w-full h-[12px] mt-[16px]'></div>
    <div className='bg-black w-full h-[11px] mt-[18px]'></div>
    <div className='bg-black w-full h-[10px] mt-[20px]'></div>
    <div className='bg-black w-full h-[9px] mt-[22px]'></div>
    <div className='bg-black w-full h-[7px] mt-[22px]'></div>
    <div className='bg-black w-full h-[6px] mt-[22px]'></div>
    <div className='bg-black w-full h-[4px] mt-[22px]'></div>
    <div className='bg-black w-full h-[3px] mt-[22px]'></div>
    <div className='bg-black w-full h-[2px] mt-[22px]'></div>
    <div className='bg-black w-full h-[1px] mt-[22px]'></div>


     
    <div className='bg-white w-full h-[150px] mt-[40px]'></div>
    </div>
  )
  }

export default Footer