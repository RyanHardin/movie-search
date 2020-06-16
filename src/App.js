import React from "react";
import Movies from "./components/Movies";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <table
        style={{
          backgroundColor: "#020202",
          display: "block",
          fontSize: 24,
          paddingLeft: 16,
        }}>
        <tbody>
          <tr>
            <td></td>
            <td style={{ color: "#fff", paddingLeft: 16 }}>
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
