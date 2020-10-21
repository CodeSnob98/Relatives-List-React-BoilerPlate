import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["sham", "raju", "babu"];

    return (
      <>
        <ol key="relativeList">
          {relatives.map((rel, index) => (
            <li key={`relativeListItem${index + 1}`}>{rel}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
