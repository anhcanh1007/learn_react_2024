import React, { useState } from "react";
import Board from "./Board";
import "./style.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = 
  const handleClick = () => {};
  return (
    <div>
      <Board cells={board} onClick={handleClick} />
    </div>
  );
};

export default Game;
