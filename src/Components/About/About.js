import { Link, Outlet } from "react-router-dom";
import "./About.css";
import Aboutmain from "./Aboutmain";
import Profile from "./Profile";
import { useState } from "react";
import aboutpic from "../../Assets/aboutfood.png"
const About = () => {
  const[click,setClick] = useState(false);
  console.log(useState());
  return (
<div className="bg-slate-200 min-h-screen p-8 flex flex-col md:flex-row">
<div className="md:w-1/2  flex flex-col justify-center p-10">
<h2 className="text-3xl font-bold mb-4 font-serif font-sans">About Us</h2>
<p className="mb-4 font-serif font-medium  text-slate-950  font-sans">
  Welcome to our food delivery website! We are passionate about delivering delicious and
  high-quality food to our customers. Our mission is to provide a convenient and enjoyable
  dining experience from the comfort of your own home.
</p>
<p className="mb-4 font-serif font-medium text-slate-950 font-sans">
  Our team of experienced chefs and dedicated staff work tirelessly to ensure that every dish
  is prepared with the freshest ingredients and the utmost care. Customer satisfaction is our
  top priority, and we aim to exceed your expectations with every order.
</p>
<p className="font-serif font-medium text-slate-950 font-sans">
  Thank you for choosing us for your dining needs. We look forward to serving you and making
  your mealtime a delightful experience.
</p>
<Link to="/" className="mt-5 cursor-pointer">
  <span className="px-7 bg-red-600 text-white  rounded-3xl py-4 hover:bg-red-700 font-bold">Learn More</span>
</Link>

</div>
<div className="flex justify-center items-center">
 
  <img src={aboutpic} className="object-cover w-full"/>
 
 
</div>
</div>

  );
};

export default About;
