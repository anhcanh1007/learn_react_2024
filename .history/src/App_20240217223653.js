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

  var users = [
    {
      id: 1,
      name: "Anh",
      age: 22,
    },
    {
      id: 2,
      name: "Chi",
      age: 18,
    },
    {
      id: 3,
      name: "Chau",
      age: 19,
    },
  ];

  var elements = users.map((user, index) => {
    return (
      <div>
        <h1>Tên: {user.name}</h1>
        <h1>Tên: {user.age}</h1>
      </div>
    );
  });

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
      {elements}
    </div>
  );
}

export default App;
