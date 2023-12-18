import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../Assets/Foodwave (1).png"
import { FaAddressCard, FaAlignJustify, FaArchway, FaArrowsAlt, FaAtom, FaAward, FaBeer, FaCartArrowDown, FaCross, FaExclamationCircle, FaHome, FaUserCircle } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "../../Redux/userSlice";

const Header = () => {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin)
  const currUser = useSelector((state) => state.user.activeUser)
  const item = useSelector((state) => state.cart.items);
  console.log(item, "items")
  console.log(isLogin, currUser)
  const[sum,setSum]=useState(0);
  useEffect(()=>{
    const sum = item.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
  setSum(sum);
  })
  
  console.log(item);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLogin"))) {
      setUser(currUser);
    }
    else (
      setUser(null)
    )
  }, [dispatch, isLogin, currUser]); // Add localStorage.getItem("activeUser") as a dependency
  const [menu, setMenu] = useState(true);
  console.log(user)
  const handleLogout = () => {
    dispatch(setLogout())
  }
  return (

    <div className="font-medium text-xl " >
      <div className="md:flex md:justify-between md:items-center shadow py-2 px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div>
              <img src={logo} className="w-14" />
            </div>
          </Link>
          <span className="cursor-pointer md:hidden block mx-2 text-3xl">
            {menu ? <FaAlignJustify onClick={() => setMenu(false)} /> : <FaArrowsAlt onClick={() => setMenu(true)} />}
          </span>
        </div>

        <ul className={`text-slate-500 text-base md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all  ease-in-out duration-500 ${!menu ? "top-[80px] opacity-100 " : ""}`} >
          <li>
            <Link to="/" className=" flex items-center gap-1 hover:bg-violet-600 hover:text-white px-2 py-1 rounded-md duration-500 m-2 ml-0"  >
              Home
            </Link ></li>
          <li> <Link to="/about" className="flex items-center gap-1  hover:bg-violet-600 hover:text-white px-2 py-1 rounded-md duration-500 m-2 ml-0">
            About
          </Link></li>
          <li>  <Link to="/contact" className="flex items-center gap-1  hover:bg-violet-600 hover:text-white px-2 py-1 rounded-md duration-500 m-2 ml-0">
            Contact
          </Link></li>
          <li> <Link to="/instamart" className="flex items-center gap-1  hover:bg-violet-600 hover:text-white px-2 py-1 rounded-md duration-500 m-2 ml-0">
            Instamart
          </Link></li>

          <li> {user ? (
            <div className="flex items-center gap-1 cursor-pointer  hover:bg-violet-600 hover:text-white px-2 py-1 rounded-md duration-500 m-2 ml-0">
              <span onClick={handleLogout}>{user.name}</span>
            </div>) : (<Link to="/signin" className="flex items-center gap-1  hover:bg-violet-600 hover:text-white px-2 py-1 rounded-md duration-500">  <span>Login</span> </Link>)}
          </li>
          <li>  <Link to="/cart" className="relative flex items-center gap-1  hover:bg-violet-600 hover:text-white px-2 py-1 rounded-md duration-500 m-2 ml-0"  >
            <FaCartArrowDown />
            {sum > 0 && <span className="text-white bg-green-600 rounded-2xl font-bold text-sm py-1 px-2   right-2 -top-2.5">{sum}</span>}
          </Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
