import React, { useState, useEffect } from "react";
import { fetchData } from "../api";
import Films from "./Films";
import Search from "./Search";
import "../css/Movies.css";
import { filter } from "../utils/filter";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const display = filter(movies, input);

  useEffect(() => {
    fetchData().then((data) => setMovies(data));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Search onChange={(value) => setInput(value)} />
      <Films movies={display} />
    </div>
  );
};

export default Movies;
