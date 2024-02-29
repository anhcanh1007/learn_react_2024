import React from "react";

//object destructuring
// const student = {
//   name: "anhcanh",
//   age: 23,
// };
// const name = student.name;
// const age = student.age;
// const { name, age } = student; => cách viết nhanh của object destructuring
const Cell = ({ value, onClick, className }) => {
  return (
    <div className={``} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
