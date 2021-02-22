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
    </div>
  );
}

export default App;
