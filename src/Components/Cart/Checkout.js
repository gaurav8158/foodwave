import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import order from "../../Assets/pngwing.com.png"

const Checkout = () => {
    const navigate = useNavigate();
 const isLogin = useSelector((state) => state.user.isLogin)
  return (
   
    <div className="min-h-screen  bg-yellow-800">


   {isLogin ? 
   <div className="bg-white p-8 rounded shadow-md min-h-screen  flex justify-between">
    <div className='flex flex-col justify-center'>
      <h2 className="text-3xl font-semibold mb-6">Order Status</h2>

      <div className="mb-4">
        <p className="text-lg mb-2">Your order is placed!</p>
        <p className="text-gray-600">We are preparing your items...</p>
      </div>

      <div className="mb-4">
        <p className="text-lg mb-2">Order is on the way to deliver!</p>
        <p className="text-gray-600">Sit tight, your order will arrive soon.</p>
      </div>

      <div className="flex justify-end">
        <button onClick={()=>navigate("/")} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Go to Home
        </button>
      </div>
    </div>
    <div className='hidden md:flex  justify-end'>
    <img className='w-8/12' src={order} /> 
    </div>

    
    </div> :  
       <div className="bg-white p-8 rounded shadow-md max-w-md">
     <h2 className="text-3xl font-semibold mb-6">Login to checkout...</h2>
     <button onClick={()=>navigate("/")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </button>
    </div>
    } 

  

  </div>
  )
}

export default Checkout