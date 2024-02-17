import "./App.css";
function App() {
  var a = 5;
  var name = "anh canh";
  var product = {
    id: 1,
    name: "iphone 7 plus",
    price: 1200000,
  };
  return (
    <div className="App">
      <h1>{a}</h1>
      <h2>{name}</h2>
      <ul>
        <li>id: {product.id}</li>
        <li>id: {product.id}</li>
        <li>id: {product.id}</li>
      </ul>
    </div>
  );
}

export default App;
