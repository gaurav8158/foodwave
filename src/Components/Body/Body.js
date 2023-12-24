import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import "./Body.css";
import Shimmer from "./Shimmer";
import { Restaurents, SWIGGY_API_URL } from "../Constant";
import { Link } from "react-router-dom";
import { filteredData } from "../Utils/helper";
import useOnline from "../useOnline";
import { FaSearch } from "react-icons/fa";
import Offers from "./Offers";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // useEffect(() => {
  //   getRestaurants();
  // }, []);

  // const getRestaurants = async () => {
  //   try {
  //     const data = await fetch(SWIGGY_API_URL);
  //     const json = await data.json();
  //     // Optional Chaining ?
  //     console.log( json?.data);
  //     setAllRestaurants(
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants ||   json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setFilteredRestaurants(
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants ||   json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //   } catch (error) {
  //     console.log(error, "error while getting the restaurants");
  //   }
  // };

  // console.log(searchInput);
  // console.log(allRestaurants, filteredRestaurants);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Hey,You are offline</h1>;
  }
  const filteredRestaurent = Restaurents.filter((restaurant) => restaurant.name.toLowerCase().includes(searchInput.toLowerCase()))
  //console.log(filteredRestaurent)
  return (
    <>
      <div className="flex w-11/12 justify-center max-w-screen-xl mx-auto mt-5 mb-2">
        <Offers />
      </div>
      <div className="flex w-11/12 justify-center max-w-screen-xl mx-auto mb-5">

        <div className="relative w-full">
          <div onClick={() => {
            if (allRestaurants === undefined) return;
            const data = filteredData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }} className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
          />

        </div>
      </div>
      {

        (
          <div className="flex  flex-wrap justify-center gap-2  mx-auto  my-10 items-start max-w-screen-xl">
            {
              // filteredRestaurants.
              filteredRestaurent.map((restaurant) => {
                return (
                  <Link
                    className="restaurent-link"
                    to={`restaurent/${restaurant?.id}`}
                    key={restaurant?.id}
                  >
                    <RestaurentCard {...restaurant} />
                  </Link>
                );
              })}
            {
              // filteredRestaurants.
              filteredRestaurent.reverse().map((restaurant) => {
                return (
                  <Link
                    className="restaurent-link"
                    to={`restaurent/${restaurant?.id}`}
                    key={restaurant?.id}
                  >
                    <RestaurentCard {...restaurant} />
                  </Link>
                );
              })}
            {
              // filteredRestaurants.
              filteredRestaurent.reverse().map((restaurant) => {
                return (
                  <Link
                    className="restaurent-link"
                    to={`restaurent/${restaurant?.id}`}
                    key={restaurant?.id}
                  >
                    <RestaurentCard {...restaurant} />
                  </Link>
                );
              })}
          </div>
        )
      }
    </>
  );
};

export default Body;

{/* {filteredRestaurants === undefined ||
        filteredRestaurants?.length === 0 ? 
        (
        <Shimmer />
      ) 
      :  */}
