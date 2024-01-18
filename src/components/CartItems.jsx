import React from "react";
import { MdDelete } from "react-icons/md";
import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
export const CartItems = ({ item, itemindex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item remove from the cart");
  };

  return (
    <div className="  ">
      <div className="  flex w-11/12 m-5 items-center  hover:scale-90 transition duration-300 ease-in shadow-md p-4 mt-10 ml-5 rounded felx-wrap justify-center gap-7">
        <div className="h-[180px]">
          <img src={item.image} alt="" className="w-full h-full" />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">{item.title}</h1>
          <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>

          <div className="flex mt-8">
            <p className="text-green-600  font-semibold items-center w-full">${item.price}</p>
            <div onClick={removeFromCart} className="text-[30px] hover:scale-100 hover:cursor-pointer"  >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
