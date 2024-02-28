import { useState } from "react";

//stateless functional component: là component không sử dụng state

// function Toggle() {
//   return <div></div>;
// }

//stateful functional component: là component có sử dụng state
// function Toogle2() {
//   const [count, setCount] = useState();
//   return <div></div>;
// }

function Toggle() {
  const [on, setOn] = useState(false);
const handle = () => {
    setOn()
}
  return (
    <div>
        <button onClick={handle}>Toggle {}</button>
    </div>
  )
}
