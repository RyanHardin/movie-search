import React from "react";

const Search = ({ onChange }) => {
  return (
    <div style={{ margin: "25px" }}>
      <input
        type="text"
        style={{ height: "50px", fontSize: "larger", padding: "0px 20px", borderRadius: "5px" }}
        placeholder="Movies..."
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Search;
