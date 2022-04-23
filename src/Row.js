import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_URL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code that will run everytime the row load
  useEffect(() => {
    //if [],run once when loads,and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters"></div>
      {movies.map((movie) => {
        return <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />;
      })}
    </div>
  );
}

export default Row;
