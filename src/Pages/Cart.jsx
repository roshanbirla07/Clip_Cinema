import React, { useEffect ,useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartItems } from "../components/CartItems";


export const Cart = () => {
  const cart  = useSelector((state) => state.cart.movie);

  const [totalAmount ,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=>acc+curr.price, 0));

  },[cart])
  return (

  
   <div  className=" ">
     <div className="flex h-screen felx-col ">
      {cart.length > 0 ? (
       
          <div className=" w-full h-[88vh] flex flex-col justify-between">

            <div className="flex flex-wrap">
            {cart.map((item, index) => {
              return <CartItems key={item.id} item={item} itemindex={index} />;
            })}
          </div>

          
          
          </div>
          
        
      ) : (
        <div className=" mx-auto my-auto bg-gradient-to-r from-zinc-700 to-zinc-600 bg-clip-text text-transparent font-serif font-medium ">
          <p>Cart is Empty</p>

          <NavLink to="/">
          <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 mt-3 ">
              Add Now</button>
          </NavLink>
        </div>
      )}
    </div>
   </div>
  );
};
