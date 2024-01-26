import React from "react";
import { useState } from "react";

const VedioItem = ({ scene }) => {
  //const YT_URL = `https://www.youtube.com/watch?v=${scene.key}`;

  const [open, setOpen] = useState(false);

  const [close,setclose]=useState(false)

  return (
    <div className=" ">
      <div className="mt-7 mx-7 bg-slate-400 p-3 rounded-lg flex-col ">
        {open && (
          <div>
            <iframe
              
              className="  justify-items-center mx-auto p-3 w-11/12 h-[312px]"
              src={`https://www.youtube-nocookie.com/embed/${scene.key}?si=f7qytm_Ko7a9-yOR`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="mt-8 justify-center">
          <p>{scene.name}</p>
          <div className="mt-2">

            { !close ?
                   ( <button
                      type="button"
                      className="text-white bg-[#2cc924aa] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                      onClick={() => {setOpen(true),setclose(true)}}
                      
                    >
                      Play
                    </button>
                    ):
                  (  <button
                      type="button"
                      className="text-white bg-red-700 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    
                      onClick={()=>{setclose(false),setOpen(false)}}
                    >
                      Close ❎
                    </button>)
                    }
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedioItem;
