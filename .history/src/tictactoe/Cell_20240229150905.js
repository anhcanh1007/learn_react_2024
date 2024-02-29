import React from "react";

//object destructuring
const student = {
  name: "anhcanh",
  age: 23,
};
const name = 

const Cell = (props) => {
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
