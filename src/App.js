import React, { useEffect, useState } from "react";
import axios from "axios";
require("dotenv").config();

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      )
      .then((movie) => setMovies(movie.data.results))
      .catch((error) => console.log(error));
  }, []);

  const display = movies
    ? movies.map((movie) => (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%" }} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
          <h2 style={{ textAlign: "center" }}>{movie.title}</h2>
        </div>
      ))
    : null;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movies Now Playing</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>{display}</div>
    </div>
  );
}

export default App;
