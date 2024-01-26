import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove,play } from "../redux/Slices/CartSlice";

import { useNavigate } from "react-router-dom";
import { PiHeartDuotone } from "react-icons/pi";
import { PiHeartLight } from "react-icons/pi";

export const Product = ({ post }) => {
  const navigate = useNavigate();

  const IMG_PATH = "https://image.tmdb.org/t/p/w300";
  const  cart  = useSelector((state) => state.cart.movie);



  const dispatch = useDispatch();
  
  const [dikhana, setDikhana] = useState(false); // image pr hover krne par title discription dikhana hai

  const addToCart = () => {
    dispatch(add(post));
   
    toast.success("Item added to Favourite");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
   
    toast.error("Item removed from Favourite");
  };

  const vediohandler = () => {
    dispatch(play(post));
    navigate('/vediosection')
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-md  mt-10 ml-5 rounded relative h-[500px] ">
      {dikhana && (
        <div className="absolute z-20  font-extrabold  bg-gray-50 w-full opacity-40">
          <p className=" w-40 text-gray-800 font-normal text-[15px] text-center">
            {post.overview.split(" ").slice(0, 8).join(" ") + "..."}
          </p>
        </div>
      )}

      <div
        className=" h-full w-full "
        onMouseEnter={() => setDikhana(true)}
        onMouseLeave={() => setDikhana(false)}
        onClick={vediohandler}
      >
        <img
          src={`${IMG_PATH}${post.poster_path} `}
          alt=""
          className="w-full h-full relative hover:opacity-70"
         
        />
      </div>

      <div className="flex item-center    ">
        <div className="absolute  left-1 bottom-2">
          <p className="text-yellow-600  font-semibold items-center w-full ">
            ⭐{post.vote_average}
          </p>
        </div>

        <div className=" absolute right-2 bottom-1 ">
          
       
         {/* {

         clicked ? */}
         {   cart && cart.some((p) => p.id == post.id) ?
          (
            <button
              className="text-gray-200 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
             hover : bg-red-400
             hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart}
            >
              <PiHeartLight />
            </button>
          ) : (
            <button
              className="text-gray-200 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
        hover : bg-white-400
        hover:text-white transition duration-300 ease-in"
              onClick={addToCart}
            >
             <PiHeartDuotone />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
