import "./App.css";

function App() {
  return (
    <div className="App">
      <input ref={name} type="text" className="text-base p-2" />
      <button onClick={add}>Lưu</button>
    </div>
  );
}

export default App;
