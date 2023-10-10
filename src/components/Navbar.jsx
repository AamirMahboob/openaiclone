import React,{useState} from 'react'
import logo from '../assets/chat.png'
import Drawer from 'react-modern-drawer'
import Dropdown from './Dropdown';
import Logo1 from '../assets/Logo1.png'
import { Link } from 'react-router-dom';
import 'react-modern-drawer/dist/index.css'
    const style = {
         header : `md:flex md:flex-row md:items-center md:justify-between md:p-5 md:h-[90px] md:w-full md:fixed  md:transition md:duration-500
         flex-col justify-center items-center w-[100%] h-[100vh]  
          fixed top-0  md:z-[1]  z-[1] transition duration-500 `,
        menu :`md:flex md:flex-row text-white`,
         
         
    }

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
    const [click,setClick] = useState('false');
    const [color,setColor] = useState(' bg-[transparent]'); 
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

    const handleClick = () => {
        return setClick(!click)
      }

       

      const colorChange = () => {
        
        if((window.scrollY || window.pageYOffset)>=20){
          setColor(' bg-[black]')
           
        }else{
          setColor(' bg-[transparent]')
        }
      }
      window.addEventListener("scroll",colorChange);
  return (
    
    <div  className={[style.header + color ]}>
      
        <div>
             
        <Link to={'/'} > <img src={Logo1} width={110} height={110}  /> </Link>
                
        </div>
        <div className='md:flex md:flex-row'>
  <ul className='md:flex md:flex-row text-white'>
    <Dropdown title="Dropdown" items={['Dashboard', 'Settings', 'Earnings']} />
    <Dropdown title="Api" items={[]} />  
    <Dropdown title="Chatgpt" items={[]} />  
    <Dropdown title="Safety" items={[]} />  
    <Dropdown title="Safety" items={[]} /> 
  </ul>
</div>
        <div className='text-white flex flex-row  '>
            <button className='md:pr-3' onClick={toggleDrawer}>Search</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                className='bla bla bla'
            >
                <div className='flex flex-col bg-black w-full h-full '  >
                  <div className='w-full   h-[100px] flex  flex-row justify-between '>
                  <div className='m-5'  >
                   <Link to={'/'} > <img src={Logo1} width={110} height={110}  /> </Link>
                   </div>
                   <div className='m-5 mt-[21px]'>
                   <Link onClick={()=>setIsOpen(false)} > <p className='text-white text-[20px]'>close</p></Link>
                   </div>
                  </div>
                  <div className='flex flex-row w-full  mx-[30px] my-[60px]  '>
                  <input type='search'  className='w-[85%] h-[30px] p-6    bg-black border border-white  mr-[30px] ml-[-15px]' placeholder='Search'  />
                  <button onClick={()=>setIsOpen(false)} className='mb-12 border border-white h-12 w-[110px]  hover:bg-white hover:text-black'>
                     Search
                  </button>
                  </div>
             </div>
            </Drawer>
             
            <button className='md:pr-3'>Login</button>
            <button className='md:pr-3'>TrychatGpt</button>
        </div>
        <div className='cursor-pointer md:hidden text-white' onClick={handleClick}>
            {click ? (<p className='text-black' >Menu</p>):
            (<p className='text-black'>close</p>)}
         </div>
    </div>
  )
}

export default Navbar