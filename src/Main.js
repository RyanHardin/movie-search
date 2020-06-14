import React from "react";
import Movies from "./components/Movies";
import Header from "./components/Header";
const App = () => {
  return (
    <div style={styles.container}>
      <Header title="Movies Now Playing" />
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
};

export default App;
