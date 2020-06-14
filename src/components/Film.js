import React from "react";

const Film = ({ movie }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
      <h2 style={styles.header}>{movie.title}</h2>
    </>
  );
};

const styles = {
  header: {
    textAlign: "center",
    color: "#575761",
  },
};

export default Film;
