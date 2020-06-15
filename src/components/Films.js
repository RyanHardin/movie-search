import React from "react";
import "../css/Film.css";

const Films = ({ movies }) => {
  const list = movies.map((movie) => (
    <div style={styles.filmsContainer} key={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
      <div>
        <h1 className="header">{movie.title}</h1>
        <p>Release Date: {movie.release_date}</p>
        <p>Popularity: {movie.popularity}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  ));
  console.log(movies);
  return <div style={styles.container}>{list}</div>;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  },

  filmsContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "15px 0",
  },
};

export default Films;
