import { useRef } from "react";
import "./App.css";

function App() {
  let ref = useRef('');
  const addRef = () => {
    cons;
  };
  return (
    <div className="App">
      <input ref="name" type="text" className="text-base p-2" />
      <button onClick={addRef}>Lưu</button>
    </div>
  );
}

export default App;
