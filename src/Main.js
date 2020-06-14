import React from "react";
import Movies from "./components/Movies";
const App = () => {
  return (
    <div>
      <h1 style={styles.header}>Movies Now Playing</h1>
      <div style={styles.moviesContainer}>
        <Movies />
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
  header: {
    textAlign: "center",
    color: "#575761",
  },
};

export default App;
