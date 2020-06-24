import React from "react";

const Search = ({ onChange }) => {
  return (
    <input
      type="text"
      style={{ fontSize: 24, display: "block", width: "50%", padding: "8, 0, 8, 16", marginTop: "30px" }}
      placeholder="Enter search term"
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default Search;
