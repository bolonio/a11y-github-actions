import React from "react";
import ReactDOM from "react-dom";
import { Image } from "./components/Image";

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

function App() {
  return (
    <div>
      <Image />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
