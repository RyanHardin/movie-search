import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from "./Film";
import Search from "./Search";
require("dotenv").config();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      )
      .then((movie) => setMovies(movie.data.results))
      .catch((error) => console.log(error));
  }, []);

  const display = movies.filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()));

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Search onChange={(value) => setInput(value)} />
      <div style={styles.moviesContainer}>
        {display &&
          display.map((movie) => (
            <div style={styles.movies} key={movie.id}>
              <Film movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
  moviesContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  movies: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
  },
};

export default Movies;
