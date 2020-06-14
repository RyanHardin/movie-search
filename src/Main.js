import React from "react";
import Movies from "./components/Movies";
const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Movies Now Playing</h1>
      <Movies />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  moviesContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  header: {
    marginBottom: "auto",
    textAlign: "center",
    color: "#575761",
  },
};

export default App;
