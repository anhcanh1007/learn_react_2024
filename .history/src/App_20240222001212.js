import { useRef } from "react";
import "./App.css";

function App() {
  let ref = useRef("");
  const addRef = () => {
    ref.current = ref.current + 1;
    alert("you click: ");
  };
  return (
    <div className="App">
      <input ref="name" type="text" className="text-base p-2" />
      <button onClick={addRef}>Lưu</button>
    </div>
  );
}

export default App;
