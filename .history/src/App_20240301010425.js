import { useReducer } from "react";
import "./App.css";

// useReducer
// 1. init state -> khởi tạo giá trị ban đầu cho state
// 2. actions -> thực hiện logic các action xảy ra với state
// 3. reducer -> nơi viết ra các actions bằng switchcase
// 4. dispatch -> chọn action và thực thi

// init state
const initState = 0;

// actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("invalid action");
  }
};

// dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <div>
        <h1>{state}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(UP_ACTION);
          }}
        >
          Up
        </button>
        <button
          onClick={() => {
            dispatch(DOWN_ACTION);
          }}
        >
          Down
        </button>
      </div>
    </div>
  );
}

export default App;
