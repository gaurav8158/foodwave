import React from 'react'
import logo from "../../Assets/logo.png"
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className='bg-slate-300 p-5 '>
        <div className='flex flex-wrap justify-center gap-10' >
        <span className='flex flex-col justify-center items-center text-3xl font-semibold '>For better experience,
          <hr/>
          download the Swiggy app now</span> 
         <div className='flex justify-center items-center flex-wrap'>
        <img className="w-28  cursor-pointer transition-transform transform hover:scale-110 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"/>
       <img className="ml-2 w-28 transition-transform transform hover:scale-110 cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"/>
        </div>      
        </div>
      </div>
 <div  className='footer-content bg-black text-slate-500 p-10 pb-20'>
     <div className='flex justify-around mr-20 ml-20 flex-wrap gap-20 items-center '> 
     <div className='flex flex-col  gap-2 cursor-pointer'><img src={logo} className='w-10'/>
      <span>© 2023 Bundl </span><span>Technologies Pvt. Ltd</span>
      </div>
      <div className='flex flex-col gap-2 '>
        <h2 className='font-bold text-white '>Company</h2>
        <Link to="/about"><span className='cursor-pointer hover:text-slate-300'>About</span></Link>
        <span  className='cursor-pointer hover:text-slate-300'>Careers</span>
        <span  className='cursor-pointer hover:text-slate-300'>Team</span>
        <span  className='cursor-pointer hover:text-slate-300'>Swiggy One</span>
        <span  className='cursor-pointer hover:text-slate-300'>Swiggy instamart</span>
        <span  className='cursor-pointer hover:text-slate-300'>Swiggy Genie</span>
      </div>
      <div className=' flex flex-col  gap-2'>
        <div className='flex flex-col  gap-2'>
        <h2 className='font-bold text-white'>Contact us</h2>
        <Link to="/contact"> <span  className='cursor-pointer hover:text-slate-300'>Help & SUpport</span></Link>
      <span className='cursor-pointer hover:text-slate-300'>Partner with us</span>
      <span className='cursor-pointer hover:text-slate-300'>Ride with us</span>
        </div>
        <div className='flex flex-col  gap-2'>
        <h2 className='font-bold text-white'>Legel</h2>  
       <span className='cursor-pointer hover:text-slate-300'>Terms & Conditions</span>
       <span className='cursor-pointer hover:text-slate-300'>Cookie Policy</span>
       <span className='cursor-pointer hover:text-slate-300'>Privacy Policy</span>
        </div>
    
      </div>
      <div className='cursor-pointer flex flex-col  gap-2'>
      <h2 className='font-bold text-white'>We deliver to:</h2>
      <span className='cursor-pointer hover:text-slate-300'>Banglore</span>
      <span className='cursor-pointer hover:text-slate-300'>Gurgaon</span>
      <span className='cursor-pointer hover:text-slate-300'>Hydrabad</span>
      <span className='cursor-pointer hover:text-slate-300'>Delhi</span>
      <span className='cursor-pointer hover:text-slate-300'>Mumbai</span>
      <span className='cursor-pointer hover:text-slate-300'>Pune</span>
      </div> </div>
    </div>
    </div>
   
  )
}

export default Footer