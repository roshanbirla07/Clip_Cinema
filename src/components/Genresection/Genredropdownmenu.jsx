import React, { useEffect, useState } from "react";

import {useNavigate } from "react-router-dom";



export const Genredropdownmenu = () => {


  const navigate= useNavigate();
  const Genre_API_URL =
    "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const [newItem, setnewItem] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjgzNjVkN2JiYmU4ZDJiOWRmYTYwOTI3OTBhNDUzOCIsInN1YiI6IjY1YTkxN2RjZWEzOTQ5MDEyZTFmNGUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bGwy5Iv9vun5-HBi8TWAJzsQt1QuclleBChM5amAxug",
    },
  };

  async function fetchGenreids() {
    try {
      const data = await fetch(Genre_API_URL, options);
      const result = await data.json();

      const genres = result.genres;
      setnewItem(genres);
      console.log("genre ka data hai ye ", genres);
    } catch (err) {
      console.log("errror in fetching genre id", err);
    }
  }

  useEffect(() => {
    fetchGenreids();
  }, []);



  const GenreSelectionHandler = (e)=>{

    const Genreid=e.target.value;
  // console.log(Genreid);

    navigate('/Genre',{state:{id:Genreid}});
  
  }



  return (
    <div className="relative  lg:max-w-sm w-28">
      <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      
      onChange={GenreSelectionHandler}
      >
        <option className=" text-center">Genre </option>

        {newItem.map((nItem) => (
            <option key={nItem.id} value={nItem.id} >
              {nItem.name}
            </option>
          ))}
      </select>
    </div>
  );
};
