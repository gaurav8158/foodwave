import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Constant";
import "./Restaurent.css";
import { addTocart, removeFromCart } from "../../Redux/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
const Itemcard = ({ item }) => {
  const items = useSelector((state) => (state.cart.items || 0))

  const [cartCount, setCartCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    (items !== null && items.lenght != 0) && items?.map((data) => {
      if (data.item?.id == item?.id) {
        setCartCount(data.count)
      }
      
    })
  })


  const handleincrement = () => {
    dispatch(addTocart({ "item": item, "count": cartCount + 1 }))
  }

  const handleDecrement = (item) => {
    dispatch(removeFromCart({ "item": item, "count": cartCount - 1 }))
   if(cartCount ==1){
    setCartCount((cartCount) => cartCount - 1)
   }
  }
  //console.log(item.price);
  return (
    <div key={item.id} className="flex justify-between my-2 py-10 px-2 shadow-md 
    ">
      <div className="flex flex-col w-1/2 sm:w-3/4 justify-between">
       <div>
       <p className="font-bold">{item.name}</p>
        </div> 
        {item.price==undefined ?
        <p className="text-sm font-bold">Rs. 100.00</p>
        : <p className="text-sm font-bold">Rs. {`${item.price / 100}.00`}</p>
        }

        <p className="text-gray-400 text-xs">{item.description}</p>
        
      </div>
      <div className=" flex flex-col justify-center items-center relative">
        <img className="w-[100px] rounded-xl shadow-xl relative " alt="item" src={`${IMG_CDN_URL}${item.imageId}`} />
        {cartCount > 0 ?
          (
            <div className="bg-white text-xs shadow-xl shadow-black p-1 px-3 rounded-md top-12">
              <button onClick={() => handleDecrement(item)} >-</button>
              <span className="text-green-600 mr-2 ml-2">{cartCount}</span>
              <button onClick={() => handleincrement(item)} >+</button>
            </div>
          )
          : (<button onClick={() => handleincrement(item)} className="bg-white shadow-xl shadow-black text-green-500 text-xs py-1 px-4 rounded-md  top-12">Add</button>)}

      </div>
    </div>
  );
};
export default Itemcard;


// flex-col sm:flex-row