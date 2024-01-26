import React, { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { Product } from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { addhomemovies } from "../redux/Slices/CartSlice";

const Home = () => {
  //const API_URL = "https://fakestoreapi.com/products";

  const homemovies=useSelector((state)=>state.POST.homemovies);
  

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjgzNjVkN2JiYmU4ZDJiOWRmYTYwOTI3OTBhNDUzOCIsInN1YiI6IjY1YTkxN2RjZWEzOTQ5MDEyZTFmNGUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bGwy5Iv9vun5-HBi8TWAJzsQt1QuclleBChM5amAxug",
    },
  };

  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const [Loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL, options);
      const data = await res.json();

      console.log(data);
      console.log(data.results);
      const y = data.results;
      console.log(y);
      setPosts(y);
    } catch (err) {
      console.log(err.message);
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  // genre sabhi post postslice ke addhomemovies main shamill ho chuki hai
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addhomemovies(posts))
  }, [posts]);




  console.log("ye home movuiise wala data hai", homemovies);


  

  return (
    <div className=" ">
      {Loading ? (
        <Spinner />
      ) : homemovies.length > 0 ? (
        <div className=" grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-col-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {homemovies.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
