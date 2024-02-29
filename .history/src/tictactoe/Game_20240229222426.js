import React, { useState } from "react";
import Board from "./Board";
import "./style.css";
import { calculateWinner } from "../helper";

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const [state, useState] = 
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCoppy = [...board]; //cú pháp lấy hết phần tử của một mảng
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = xIsNext ? "X" : "o";
    setBoard(boardCoppy);
    setXIsNext((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick} />
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
};

export default Game;
