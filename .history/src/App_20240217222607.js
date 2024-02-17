import "./App.css";
function App() {
  var a = 5;
  var name = "anh canh";
  var product = {
    id: 1,
    name: "iphone 7 plus",
    price: 1200000,
    status: true,
  };

  function showProduct(product) {
    if (product.status) {
      return (
        <ul>
          <li>id: {product.id}</li>
          <li>name: {product.name}</li>
          <li>price: {product.price}</li>
        </ul>
      );
    }
  }
  return (
    <div className="App">
      <h1>{a}</h1>
      <h2>{name}</h2>
      {showProduct(product)}
    </div>
  );
}

export default App;
