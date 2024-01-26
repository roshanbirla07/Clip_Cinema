import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addhomemovies } from "../../redux/Slices/CartSlice";
import { useLocation } from "react-router-dom";
import { Product } from "../Product";


const GenreSelection = () => {

  const location=useLocation();
  console.log(location.state);
  const Genreid = location.state && location.state.id;
  console.log(Genreid);
  const homemovies = useSelector((state) => state.POST.homemovies);
  const dispatch = useDispatch();

  let newhomemovies = [];
  // console.log(typeof(Genreid));

  for (let i = 0; i < homemovies?.length; i++) {
    
    for (let j = 0; j < homemovies[i]?.genre_ids?.length; j++) {
      
      // console.log(typeof(homemovies[i].genre_ids[j]));
      if (homemovies[i].genre_ids[j] === Number(Genreid)) {
        
        newhomemovies.push(homemovies[i]);
      }
    }
  }

  


  useEffect(() => {
   dispatch( addhomemovies(newhomemovies))
  }, []);

  // console.log(homemovies);

  return <div>

      {
        homemovies.length>0 ? (
          <div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-col-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[99vh]">
          {homemovies.map((post) => (
            <Product key={post.id} post={post} />
          ))}
          </div>
        ): (
          <div className="  mx-[300px] "> NO DATA FOUND</div>
        )
      }
  </div>;
};

export default GenreSelection;
