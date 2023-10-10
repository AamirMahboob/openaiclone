import React from 'react';
import bgImage from '../assets/bgImage.jpeg';



function HeroSection() {
  return (
    <div
      className='md:w-full w-full   '
      style={{ backgroundImage: `url(${bgImage}) `, height: '400px' , backgroundSize:'cover', backgroundPosition:'center bottom'  
         
    
    }}
    >
      <div    style={{backgroundColor: 'rbg(0,0,0,0.2) ', width:'100%' , height:'100%' }}>
      <div className='absolute md:bottom-[50%] md:left-[250px] md:w-[40%] md:h-[30%]   flex  flex-col   
            h-[20%] bottom-[50%] left-[20px]  '
         >
        <div>
          <h1 className=' md:font-bold md:text-[40px] text-[30px]  '>
            Creating safe AGI that benefits all of humanity
          </h1>
        </div>
        <div className='w-[160px] mt-[15px] border rounded-md cursor-pointer '>
          <h3 className='p-1 hover:bg-white hover:text-black '>
            Learn about OpenAI
          </h3>
        </div>
      </div>
      </div>
       
      
    </div>
  );
}

export default HeroSection;

{/* <video
        ref={videoRef}
        className="w-full"
        autoPlay
        loop
        muted
        

      >
        <source src={hero} type="video/mp4" />
      </video> */}