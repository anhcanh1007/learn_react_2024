import React, { useState } from "react";
import Board from "./Board";
import "./style.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const handleClick = () => {};
  return (
    <div>
      <Board cells ={no}/>
    </div>
  );
};

export default Game;
