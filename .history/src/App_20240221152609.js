import "./App.css";

function App() {
  const addRef = () => {
    alert(refs.name.va)
  }
  return (
    <div className="App">
      <input ref={name} type="text" className="text-base p-2" />
      <button onClick={addRef}>Lưu</button>
    </div>
  );
}

export default App;
