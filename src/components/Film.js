import React from "react";
import "../css/Film.css";

const Film = ({ movies }) => {
  const list = movies.map((movie) => (
    <div key={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
      <h2 className="header">{movie.title}</h2>
    </div>
  ));

  return <div>{list}</div>;
};

export default Film;
