import { useRef } from "react";
import "./App.css";

function App() {
  let ref = useRef(0);
  const addRef = () => {
    ref.current = ref.current + 1;
    alert("you click: " + ref.current);
  };
  return (
    <div className="App">
      {/* <input ref="name" type="text" className="text-base p-2" /> */}
      <button className="bg-slate-600 px-2 py-" onClick={addRef}>
        Lưu
      </button>
    </div>
  );
}

export default App;
