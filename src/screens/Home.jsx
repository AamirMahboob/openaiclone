import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar1 from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero2';
import Update from '../components/Update';
import leaf from '../assets/leaf.jpg'
import announce from '../assets/announce.jpg'
import red from '../assets/red.jpg'
import speak from '../assets/speak.jpg'
import Impo from '../components/Impo';
import strange from '../assets/strange.jpg'
import frontier from '../assets/frontier.jpg'
import dall from '../assets/dall.jpg'
import gpt4 from '../assets/gpt4.jpg'
import conf from '../assets/conf.jpg'
import str2 from '../assets/str2.jpg'
import str3 from '../assets/str3.webp'
import Footer from '../components/Footer';

 
 
 

 
function Home() {
  const isLargeScreen = window?.innerWidth >= 768;
  console.log(isLargeScreen)
  return (
    <div  >
    {isLargeScreen ? (
      <Navbar />
    ) : (
      <Navbar1 />
    )}
    <HeroSection  />
    <div className='md:flex bg-black md:w-full md:h-[300px] md:flex-row flex-col p-4  '>
        <Hero title = 'Pioneering research on the path to AGI' link  = 'Learn about our research' />
        <Hero title = 'Transforming work and creativity with AI' link = 'Explore our products'  />
        <Hero  title = 'Join us in shaping future of technology' link = 'View careers' className = 'mr-[210px]' />
        
    </div>
    <div className='bg-black   w-full flex flex-col' >
    <div class="border-b border-gray-300 md:my-4 md:h-1     md:mx-[35px]   "></div>
    <div className='flex md:flex-row md:justify-between md:items-center md:-my-[5px]   flex-col p-[20px] ' >
        <h1 className='text-white font-bold text-3xl cursor-pointer mx-[54px]' >Latest updates</h1>
        <p className='text-white underline underline-offset-1 cursor-pointer   md:my-[30px]  md:mr-[120px]  ml-[100px] ' >View all updates</p>
    </div>
    </div>
    <div className='bg-black'>

  
      <div className='md:flex flex-row md:mx-10 w-full h-full  '>
      <Update image = {speak} title = 'chat gpt can now see hear and speak' date = 'Sep 25 2023' />
      <Update image = {leaf} title = 'Dalle - E 3' date = 'Sep 20 2023' />
      <Update image = {red}   title = 'Open AI Red Teaming work' date = 'Sep 19 2023'/>
      <Update image = {announce} title = 'join us in for openAI first Developer conference on November 6 in San Fransico' date = 'Nov 6 2023'/>
      
      </div>  
    </div>
    <div className='bg-black flex      ' >
     
    <Impo title = 'Safety and responsibility' pgh = 'Our work to create safe and beneficial AI requires a deep understanding of the potential risks and benefits, as well as careful consideration of the impact.' link = 'Learn about Safety' />
    
    </div>
    <div className = 'class="bg-cover w-full h-full'
         style={{ backgroundImage: `url(${strange}) ` , height: '800px',backgroundSize:'cover'  }}
     >
    </div>
    <div className='bg-black flex     ' >
     
    <Impo title = 'Research' pgh = 'We research generative models and how to align them with human values.' link = 'Learn about our research' />
    
    </div>
    <div className='bg-black'>

  
      <div className='md:flex flex-row md:mx-10 '>
      <Update image = {frontier} title = 'Frontier AI regulation: Managing emerging risks to public safety' date = 'july 6 2023' />
      <Update image = {gpt4} title = 'GPT-4V(ision) system card' date = 'Sep 25 2023' />
      <Update image = {dall}   title = 'DALLE-E3 system card' date = 'Oct 3 2023'/>
      <Update image = {conf} title = 'Confidence Building Measures For Artificial Intelligence: Workshop Proceedings' date = 'Aug 1 2023'/>
      
      </div>  
    </div>
    <div className='bg-black flex     ' >
     
    <Impo title = 'Products' pgh = 'Our API platform offers our latest models and guides for safety best practices.' link = 'Explore our products' />
    
    </div>
    <div className='bg-black'>

  
<div className='md:flex flex-row md:mx-10 '>
<Update image = {frontier} title = 'Frontier AI regulation: Managing emerging risks to public safety' date = 'july 6 2023' />
<Update image = {gpt4} title = 'GPT-4V(ision) system card' date = 'Sep 25 2023' />
<Update image = {dall}   title = 'DALLE-E3 system card' date = 'Oct 3 2023'/>
<Update image = {conf} title = 'Confidence Building Measures For Artificial Intelligence: Workshop Proceedings' date = 'Aug 1 2023'/>

</div>  
</div>
<div className='bg-black flex     ' >
     
     <Impo title = 'Careers at OpenAI' pgh = 'Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.' link = 'View Careers' />
     
     </div>
     <div className = 'class="bg-cover w-full h-full'
         style={{ backgroundImage: `url(${str2}) ` , height: '800px',backgroundSize:'cover'  }}
     >
    </div>    
    <div className='bg-black md:p-[50px] mt-[-20px] '>
        <div className='md:flex md:flex-row  mt-[20px] '>
           <div className='md:w-[50%] w-full p-5  bg-black'>
                <p className='text-white  font-serif   md:text-5xl cursor-pointer md:mx-[54px] text-[18px] mx-[20px] '>“I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.”</p>
                <p className='text-white ml-[50px] mt-5 font-bold'> Lilian Weng
</p>
                <p className='text-white ml-[50px]'>Applied AI at OpenAI</p>
           </div>
           <div  className='md:w-[50%] bg-slate-300 w-full md:bg-cover   '
         style={{ backgroundImage: `url(${str3}) ` , height: '500px',backgroundSize:'cover'  }}>
           </div>
        </div>
    </div>
    <div className='bg-black h-[250px]  mt-[-20px]'>
    <div class="border-b border-gray-300 md:my-4 md:h-1    md:mx-[35px]    "></div>
        <p className='text-white md:text-5xl text-[30px]  mx-[35px]'>Join us in shaping the future of technology.</p>
        <button className=' border border-white md:w-[1200px] md:mt-[24px]  md:mx-[35px] text-white hover:bg-white hover:text-black h-[70px] w-[300px] mt-[30px]  ml-8 '>View Careers</button>
    </div> 
    <div className='bg-black h-[300px]'>

    </div>
    
      <Footer />
 

  </div>
  )
}

export default Home