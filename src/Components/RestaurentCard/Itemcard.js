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
    if (cartCount == 1) {
      setCartCount((cartCount) => cartCount - 1)
    }
  }

  return (
    <div key={item.id} className="flex justify-between py-8 px-4 shadow-md 
    ">
      <div className="flex flex-col w-1/2 sm:w-3/4 justify-between">
        <div>
          <p className="font-bold font-sans">{item.name}</p>
        </div>
        {item.price == undefined ?
          <p className="text-sm font-bold font-sans">Rs. 100.00</p>
          : <p className="text-sm font-bold font-sans">Rs. {`${item.price / 100}.00`}</p>
        }

        <p className="text-gray-400 text-xs font-sans">{item.description}</p>

      </div>
      <div className=" flex flex-col justify-center items-center relative">
        <img className="w-[100px] rounded-xl shadow-xl relative " alt="item" src={item.image} />
        {cartCount > 0 ?
          (
            <div className="bg-white text-xs shadow-xl shadow-black rounded-md top-12">
              <button className="px-3 py-2" onClick={() => handleDecrement(item)} >-</button>
              <span className="text-green-600 mr-2 ml-2 font-semibold">{cartCount}</span>
              <button className="px-3 py-2" onClick={() => handleincrement(item)} >+</button>
            </div>
          )
          : (<button onClick={() => handleincrement(item)} className="text-white shadow-xl shadow-black bg-green-600 text-xs px-6 py-2 rounded-md  top-12 font-bold">Add</button>)}

      </div>
    </div>
  );
};
export default Itemcard;
