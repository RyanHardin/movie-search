import React from "react";
import "../css/Film.css";

const Films = ({ movies }) => {
  const list = movies.map((movie) => (
    <div className={"filmContainer"} key={movie.id}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie">
        <h1 className="header">{movie.title}</h1>
        <label>Release Date: {movie.release_date}</label>
        <br />
        <label>Popularity: {movie.popularity}</label>
        <p>{movie.overview}</p>
      </div>
    </div>
  ));
  return <div className={"container"}>{list}</div>;
};

export default Films;
