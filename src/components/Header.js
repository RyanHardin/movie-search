import React from "react";

export const Header = ({ title }) => {
  return (
    <div>
      <h1 style={styles.header}>{title}</h1>
    </div>
  );
};

const styles = {
  header: {
    marginBottom: "auto",
    textAlign: "center",
    color: "#575761",
  },
};
export default Header;
