import React from "react";

import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Genredropdownmenu } from "./Genresection/Genredropdownmenu";
import { PiHeartLight } from "react-icons/pi";
export const Navbar = () => {


  const navigate=useNavigate()
  const  cart  = useSelector((state) => state.cart.movie);
  return (
    <div>
      <div className=" flex justify-between items-center h-20 p-2 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="https://w7.pngwing.com/pngs/725/684/png-transparent-movie-time-graphic-film-cinema-logo-film-elements-cdr-food-text.png"
              alt=""
              className="w-[70px] rounded-xl"
            />
          </div>
        </NavLink>

        <div className="flex gap-3 items-center justify-center font-medium text-slate-100 mr-5 space-x-6">
         
          <NavLink to="/">
            <p className="bg-gradient-to-r from-zinc-700 to-zinc-600 bg-clip-text text-transparent">WEB-SERIES</p>
          </NavLink>
         
          <NavLink to={
              {pathname :"/Genre"}}state={{id: 16}}>
            <p className="bg-gradient-to-r from-zinc-700 to-zinc-600 bg-clip-text text-transparent"
            >ANIME</p>
          </NavLink>
          <NavLink to="/">
            <p className="bg-gradient-to-r from-zinc-700 to-zinc-600 bg-clip-text text-transparent">MOVIES</p>
          </NavLink>
          <NavLink to="/">
            <p className="bg-gradient-to-r from-zinc-700 to-zinc-600 bg-clip-text text-transparent">TV SHOW</p>
          </NavLink>
       
          <NavLink >
            <p><Genredropdownmenu/></p>
          </NavLink>



          <NavLink to="/cart">
            <div className="relative">
               <PiHeartLight  className="text-2xl" />

              { cart && cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce  rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
