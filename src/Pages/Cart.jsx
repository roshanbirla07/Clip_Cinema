import React, { useEffect ,useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartItems } from "../components/CartItems";


export const Cart = () => {
  const { cart } = useSelector((state) => state.cart.cartar);

  const [totalAmount ,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=>acc+curr.price, 0));

  },[cart])
  return (

  
   <div >
     <div className="flex felx-col ">
      {cart.length > 0 ? (
       
          <div className=" w-full h-[88vh] flex flex-col justify-between">

            <div className="flex ">
            {cart.map((item, index) => {
              return <CartItems key={item.id} item={item} itemindex={index} />;
            })}
          </div>

          
          <div className="flex flex-col   bg-slate-500 p-5 ">
            <div className="">
              <div className=" uppercase font-serif text-lg">your Cart</div>
              <div className=" uppercase font-serif text-lg">Summary</div>
              <p>
                <span className=" uppercase font-serif text-lg">total Items : <span className=" text-green-200"> {cart.length}</span> </span>
              </p>
            </div>
            <div>
               <p className=" uppercase font-serif text-lg">total Amount : <span className=" text-green-200">${totalAmount}</span></p>
            </div>
          

               <div className="flex justify-center bg-amber-600  items-center  mx-96 rounded-lg p-3 ml-[500px]  hover:bg-amber-500 duration-300 animate-pulse ani">
               <button>CheckOut Now</button>
               </div>
            
          </div>
          </div>
          
        
      ) : (
        <div>
          <p>Cart is Empty</p>

          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
   </div>
  );
};
