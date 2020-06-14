import React from "react";

const Film = ({ movie }) => {
  if (movie.poster_path === null) {
    return (
      <>
        <img src={`https://media.comicbook.com/files/img/default-movie.png`} style={styles.image} alt={movie.title} />
        <h2 style={styles.header}>{movie.title}</h2>
      </>
    );
  }
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title}
        style={styles.image}
      />
      <h2 style={styles.header}>{movie.title}</h2>
    </>
  );
};

const styles = {
  header: {
    textAlign: "center",
    color: "#575761",
  },
  image: {
    width: "200px",
    height: "300px",
  },
};

export default Film;
