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

  return (
    <div>
        <button>Toggle {}</button>
    </div>
  )
}
