import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VedioItem from "../components/Vediosection/VedioItem";

const Vediosection = () => {
  const  vedio_obj = useSelector((state) => state.cart.y);

  

  const [scenes, setScenes] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjgzNjVkN2JiYmU4ZDJiOWRmYTYwOTI3OTBhNDUzOCIsInN1YiI6IjY1YTkxN2RjZWEzOTQ5MDEyZTFmNGUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bGwy5Iv9vun5-HBi8TWAJzsQt1QuclleBChM5amAxug",
    },
  };

  const API_URL = `https://api.themoviedb.org/3/movie/${vedio_obj.id}/videos?language=en-US`;

  async function fetchMovieScene() {
     
    try {
     const res = await fetch(API_URL, options);
      const data = await res.json();
      console.log("movies scene wala data hai ye");
      //   console.log(data);
      //   console.log(data.results)
      const y = data.results;
      console.log(y);
      setScenes(y);
    } catch (err) {
      console.log(err.message);
      setScenes([]);
    }
  }

  useEffect(() => {
    fetchMovieScene();
  }, [vedio_obj]);
  

 
  return (
    <div className=" max-h-full">
      <div className="w-full  h-full  grid  sm:grid-cols-1 lg:grid-cols-2  gap-3  px-6">
     { scenes  && scenes.length > 0 && scenes.map((scene) => (
  <VedioItem key={scene.id} scene={scene} />
))}

      </div>
    </div>
  );
};

export default Vediosection;
