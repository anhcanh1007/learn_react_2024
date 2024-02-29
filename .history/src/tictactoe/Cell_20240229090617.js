import React from "react";

const Cell = (props) => {
  return <div className="game-cell" onClick={props.onC}></div>;
};

export default Cell;
