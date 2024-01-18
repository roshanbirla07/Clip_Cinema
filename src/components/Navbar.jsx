import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className=" flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-shopping-mall-logo-png-image_5406131.jpg"
              alt=""
              className="w-[30px]"
            />
          </div>
        </NavLink>

        <div className="flex gap-3 items-center justify-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <GiShoppingCart className="text-2xl" />

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
