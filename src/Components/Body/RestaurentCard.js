import React from 'react'
import "./Body.css";
import { FaBullseye, FaStar } from 'react-icons/fa';
const SWIGGY_CDN_LINK = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
const RestaurentCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  totalRatingsString,
  sla,
  costForTwo,
  avgRatingString, }) => {

  return (
    <div className='restaurent-card flex flex-col flex-wrap overflow-hidden mb-3 mx-2 w-56 hover:shadow-md p-2'>

      <div className=
        "max-w-sm  w-full shadow-lg   hover:shadow-xl overflow-hidden rounded-lg mb-2"
      >
        <img className='overflow-hidden transform transition duration-500 w-full h-full object-cover object-center hover:scale-110 rounded-lg' src={SWIGGY_CDN_LINK + cloudinaryImageId} alt='' />
      </div>
      <div className='flex flex-col w-full '>
        <h2 className='font-bold '>{name}</h2>
        <div className='flex  items-center gap-1'>
          <div className='bg-green-600 flex p-1 gap-2 text-white  rounded-lg '>
           <span className="text-xs"> <FaStar  /></span>
            <span className='text-xs'>{avgRatingString}</span>
          </div>
          {/* <FaBullseye className='w-2' /> */}
          <span>{totalRatingsString}</span>
        </div>
        <div className='font-light text-xs font'>{cuisines.join(",")}</div>
        <div className='text-sm flex justify-between'>
          <span >{areaName}</span>
          <span>{sla?.lastMileTravelString ?? '2.0 km'}</span>
        </div>
        <div className='font-semibold text-sm'>{costForTwo}</div>
      </div>

    </div>

  )
}

export default RestaurentCard


