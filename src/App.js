import React from "react";
import Movies from "./components/Movies";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <table
        style={{
          backgroundColor: "#000",
          display: "block",
          height: "150px",
          padding: "15px",
          fontSize: "24px",
        }}>
        <tbody>
          <tr>
            <td></td>
            <td style={{ color: "#fff", paddingLeft: "16px" }}>
              <h1>MovieDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <Movies />
    </div>
  );
};

export default App;
