import React from 'react'
import "./Body.css";
import { FaBullseye, FaStar } from 'react-icons/fa';
const SWIGGY_CDN_LINK = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
const RestaurentCard = ({
  //cloudinaryImageId,
  image,
  name,
  cuisines,
  areaname,
 distance,

  avgRatingString, 
}) => {

  return (
    <div className='restaurent-card flex flex-col flex-wrap overflow-hidden mb-3 mx-2 w-56 hover:shadow-md p-2'>

      <div className=
        "max-w-sm  w-full shadow-lg  hover:shadow-xl overflow-hidden rounded-lg mb-2 h-32"
      >
        <img className='overflow-hidden transform transition duration-500 w-full h-full object-cover object-center hover:scale-110 rounded-lg' src={image} alt='' />
      </div>
      <div className='flex flex-col w-full '>
        <h2 className='font-bold '>{name}</h2>
        <div className='flex'>
          <div className='bg-green-600 flex  items-center px-1.5 py-0.5 gap-1 text-white  rounded-lg '>
           <span className="text-xs "> <FaStar  /></span>
            <span className='text-xs mt-0.5'>{avgRatingString}</span>
          </div>         
        </div>
        <div className='font-medium text-gray-400 text-xs font-sans'>{cuisines.join(",")}</div>
        <div className='font-medium text-gray-400 text-xs font-sans flex justify-between'>
          <span className='font-sans'>{areaname}</span>
          <span>{distance ?? '2.0 km'}</span>
        </div>
      </div>

    </div>

  )
}

export default RestaurentCard


