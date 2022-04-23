import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_URL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl ,isLargeRow}) {
  const [movies, setMovies] = useState([]);

  // a snippet of code that will run everytime the row load
  useEffect(() => {
    //if [],run once when loads,and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

   console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_URL}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
