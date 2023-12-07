import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL, IMG_CDN_URL } from "../Constant";
import Shimmer from "../Body/Shimmer";
import Itemcard from "./Itemcard";
import { FaStar } from "react-icons/fa";

const Restaurentcard = ()=>{
const param = useParams();
const {resId}=param;
const[restaurent,setRestaurent] = useState([]);
const[restaurentdata,setRestaurentdata] = useState([]);
useEffect(()=>{
getRestaurent();
},[])

const getRestaurent = async ()=>{
   const res =await fetch(FETCH_MENU_URL+resId);
   const json =await res.json()
   console.log(json.data.cards);
   setRestaurent(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
 //  console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
setRestaurentdata(json.data);
}
if(restaurent?.length===0)
return <Shimmer />
return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-black  w-full py-7">
      <div className="flex flex-col md:flex-row max-w-2xl m-auto justify-between items-center p-2">
      <img className="w-11/12 md:w-3/12 rounded-xl" alt="item" src={`${IMG_CDN_URL}${restaurentdata.cards[0].card.card.info.cloudinaryImageId}`} /> 
     <div className=" w-full md:w-9/12 text-white text-start pl-2 ">
     <p className="text-5xl">{restaurentdata.cards[0].card.card.info.name}</p>   
     <div className="flex  items-center mt-2 "> 
     <div className='bg-green-600 flex p-1 gap-2  rounded-lg '>
           <span className="text-xs"> <FaStar  /></span>
            <span className='text-xs'>{restaurentdata.cards[0].card.card.info.avgRating}</span>
          </div>
     {/* <p>{restaurentdata.cards[0].card.card.info.avgRating}</p> */}
     <div className="w-0.5 h-3 mx-2 bg-white"></div>
     <p>{restaurentdata.cards[0].card.card.info.totalRatingsString}</p>
     <div className="w-0.5 h-3 mx-2 bg-white"></div>
     <p>{restaurentdata.cards[0].card.card.info.costForTwoMessage}</p>
     </div>

     </div>
      </div>
      </div>
  <div className="w-full py-7">   
  <div className="flex flex-col max-w-2xl m-auto">
        {
    restaurent?.map((val)=>{
      return  <Itemcard key={Object.values(val)[0].info.id} item={Object.values(val)[0].info} name={Object.values(val)[0].info.name}/>
    })
} 
</div>
    </div>
    </div>
  
   
)
}

export default Restaurentcard;
