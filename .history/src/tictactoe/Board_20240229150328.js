import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.celll.map((item, index) => (
        <Cell key={index} />
      ))}
    </div>
  );
};

export default Board;
