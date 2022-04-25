import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //   Math.floor(Math.random() * request.data.results.length-1)
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length-1)
      ]);
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  //   "https://api.themoviedb.org/3/${movie?.backdrop_path}"
  //   "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                   
                )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* <<< background image */}
        {/*title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">My List</button>
        </div>
        <h2 className="banner_description">{truncate(movie?.overview, 3000)}</h2>
        {/* div > 2 buttons */}
        {/* description */}
       
      </div>
      < div className="banner_fadeBottom" />
    </header>
    
  );
}

export default Banner;
