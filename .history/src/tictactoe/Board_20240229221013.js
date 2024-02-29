import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell key={index} className={item === 'X' ? 'is-x' : item === 'O'} value={item} onClick={() => props.onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
