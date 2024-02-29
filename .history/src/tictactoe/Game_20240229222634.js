import React, { useState } from "react";
import Board from "./Board";
import "./style.css";
import { calculateWinner } from "../helper";

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
    name: "anhcanhdev",
  });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCoppy = [...state.board]; //cú pháp lấy hết phần tử của một mảng
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = state.xIsNext ? "X" : "o";
    setState({
      ...state,
      
    })
    // setBoard(boardCoppy);
    // setXIsNext((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      <button onClick={handleResetGame}>Reset Game</button>
    </div>
  );
};

export default Game;
