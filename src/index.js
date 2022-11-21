import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./playChess";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game></Game>
  </React.StrictMode>
);
