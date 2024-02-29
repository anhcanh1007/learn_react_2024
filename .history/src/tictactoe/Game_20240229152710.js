import React, { useState } from "react";
import Board from "./Board";
import "./style.css";
import { calculateWinner } from "../helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCoppy = [...board];
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = xIsNext ? "X" : "o";
    setBoard(boardCoppy);
    setXIsNext((xIsNext) => !xIsNext);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick} />
    </div>
  );
};

export default Game;
