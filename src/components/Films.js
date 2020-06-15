import React from "react";
import "../css/Film.css";

const Films = ({ movies }) => {
  const list = movies.map((movie) => (
    <div>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
      <h2 className="header">{movie.title}</h2>
    </div>
  ));

  return <div style={styles.container}>{list}</div>;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  },
};

export default Films;
