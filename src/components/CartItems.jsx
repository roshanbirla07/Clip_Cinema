import React from "react";
import { MdDelete } from "react-icons/md";
import { remove } from "../redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { play } from "../redux/Slices/CartSlice";
import { useNavigate } from "react-router-dom";


export const CartItems = ({ item, itemindex }) => {
  const dispatch = useDispatch();

  const navigate=useNavigate();
  
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item remove from the cart");
  };

  const vediohandler = () => {
    dispatch(play(item));
    navigate('/vediosection')
  };


  const IMG_PATH="https://image.tmdb.org/t/p/w500";

  return (
    <div className="  ">
      <div className="  flex w-11/12 m-5 items-center  hover:scale-90 transition duration-300 ease-in shadow-md p-4 mt-10 ml-5 rounded felx-wrap justify-center gap-7 hover:cursor-pointer"
      
      onClick={vediohandler}
      
      >
        <div className="h-[180px]">
          <img src={`${IMG_PATH}${item.poster_path} `} alt="" className="w-full h-full" />
        </div>
        <div>
          
          <h1 className=" w-40 text-gray-400 font-normal text-[10px] text-left">{item.overview.split(" ").slice(0, 40).join(" ") + "..."}</h1>

          <div className="flex mt-8">
            <p className="text-green-600  font-semibold items-center w-full">⭐{item.vote_average}</p>
            <div onClick={removeFromCart} className="text-[30px] hover:scale-100 hover:cursor-pointer"  >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
