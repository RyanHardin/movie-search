import React from "react";

const Film = ({ movie }) => {
  return (
    <div style={styles.movies} key={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
      <h2 style={styles.header}>{movie.title}</h2>
    </div>
  );
};

const styles = {
  movies: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
  },
  header: {
    textAlign: "center",
    color: "#575761",
  },
};

export default Film;
