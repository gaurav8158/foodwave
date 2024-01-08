import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../Assets/mylogo.png"
import { FaCartArrowDown } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "../../Redux/userSlice";
import useOnline from "../useOnline";
import "./style.css"
const Header = () => {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin)
  const currUser = useSelector((state) => state.user.activeUser)
  const item = useSelector((state) => state.cart.items);
  const [sum, setSum] = useState(0);
  const isOnline = useOnline();
  useEffect(() => {
    const sum = item.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
    setSum(sum);
  })

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isLogin"))) {
      setUser(currUser);
    }
    else (
      setUser(null)
    )
  }, [dispatch, isLogin, currUser]); // Add localStorage.getItem("activeUser") as a dependency
  const [menu, setMenu] = useState(true);
  //console.log(user)
  const handleLogout = () => {
    dispatch(setLogout())
  }
  //console.log(isOnline);
  return (

    <div className="md:flex md:justify-between md:items-center shadow py-2 px-4 font-medium fixed w-full top-0 left-0 z-50 bg-slate-100" >
     
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center ml-4">

              <img src={logo} className="w-14" />
            <h1 className="font-bold text-xl font-sans text-amber-900 logos ml-2">Foodwave</h1>
            </div>
          </Link>
          <span className="cursor-pointer md:hidden block mx-2 text-3xl">
            {menu ?
              <i class="fi fi-br-menu-burger" onClick={() => setMenu(false)}></i>
              :
              <i onClick={() => setMenu(true)} class="fi fi-br-cross-small"></i>
            }
          </span>
        </div>

        <ul className={`text-slate-500 bg-slate-100 md:flex md:items-center z-[1] md:z-auto md:static absolute  w-full left-0 md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all  ease-in-out duration-500 ${!menu ? "top-[69px] opacity-100 " : ""}`} >
          <li className="border-slate-100 border-b-2 hover:border-red-400  px-2  duration-500 m-2 ml-0 h-full">
            <Link to="/" className=" flex items-center gap-1 "  >
              Home
            </Link ></li>
          <li> <Link to="/about" className="flex items-center gap-1 border-slate-100 border-b-2 hover:border-red-400 px-2 duration-500 m-2 ml-0">
            About
          </Link></li>
          <li>  <Link to="/contact" className="flex items-center gap-1 border-slate-100 border-b-2 hover:border-red-400 px-2  duration-500 m-2 ml-0">
            Contact
          </Link></li>
          <li> <Link to="/instamart" className="flex items-center gap-1 border-slate-100 border-b-2 hover:border-red-400 px-2  duration-500 m-2 ml-0 ">
            Instamart
          </Link></li>

          <li> {user ? (
            <div className="flex items-center gap-1 cursor-pointer border-slate-100 border-b-2 hover:border-red-400 px-2   duration-500 m-2 ml-0">
              <span className="flex" onClick={handleLogout}>{user.name}</span>
              {isOnline ?
            <li><div className={`w-2 h-2 rounded-lg ${isOnline ? "bg-lime-500" : "bg-slate-300"}`} ></div></li> : ""
          }
              
            </div>) : (<Link to="/signin" className="flex items-center gap-1 border-slate-100 border-b-2 hover:border-red-400 px-2  duration-500">  <span>Login</span> </Link>)}
          </li>
        <li>  <Link to="/cart" className="relative flex items-center gap-1  border-slate-100 border-b-2 hover:border-red-400 px-2   duration-500 m-2 ml-0"  >
            <FaCartArrowDown />
            {sum > 0 && <span className="text-white bg-green-600 rounded-2xl font-bold text-sm py-1 px-2   right-2 -top-2.5">{sum}</span>}
          </Link></li>
        </ul>
     
    </div>
  );
};

export default Header;
