import React from "react";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <small>
        {" "}
        <a
          href="https://github.com/Cjenae7/codesandbox-reactfile"
          target="_blank"
        >
          {" "}
          Open-Source{" "}
        </a>{" "}
        by C.S
      </small>
    </div>
  );
}

export default App;
