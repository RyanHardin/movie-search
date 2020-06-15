import React, { useState, useEffect } from "react";
import axios from "axios";
import Films from "./Films";
import Search from "./Search";
import "../css/Movies.css";
import { filter } from "../utils/filter";
require("dotenv").config();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const display = filter(movies, input);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      )
      .then((movie) => setMovies(movie.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Search onChange={(value) => setInput(value)} />
      <Films movies={display} />
    </div>
  );
};

export default Movies;
