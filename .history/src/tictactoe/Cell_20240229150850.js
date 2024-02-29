import React from "react";

//object destructuring
const student = {
  name: 'anhcanh'
}

const Cell = (props) => {
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
