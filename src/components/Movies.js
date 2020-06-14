import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from "./Film";
require("dotenv").config();

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    axios
      .get(url)
      .then((movie) => setMovies(movie.data.results))
      .catch((error) => console.log(error));
  }, []);

  return movies && movies.map((movie) => <Film movie={movie} />);
};

export default Movies;
