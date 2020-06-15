import React from "react";

const Search = ({ onChange }) => {
  return (
    <div style={{ marginBottom: "25px", width: "100%" }}>
      <input
        type="text"
        style={{ height: "50px", fontSize: "larger", padding: "0px 20px", width: "100%" }}
        placeholder="Enter search term..."
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Search;
