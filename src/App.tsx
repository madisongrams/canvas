import React from "react";
import Canvas from "./Canvas";
import { draw } from "./canvas-helpers";

function App() {
  return <Canvas draw={draw} />;
}

export default App;
