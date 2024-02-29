import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell key={index} value={item} onClick={() => props.onClick}/>
      ))}
    </div>
  );
};

export default Board;
