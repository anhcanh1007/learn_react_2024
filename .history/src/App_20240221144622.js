import "./App.css";
import Product from "./Product";

function App() {
  let products = [
    {
      id: 1,
      name: "iphone 7 plus",
      price: 1200000,
    },
    {
      id: 2,
      name: "iphone 8 plus",
      price: 1400000,
    },
    {
      id: 3,
      name: "iphone x",
      price: 1800000,
    },
  ];

  return (
    <div className="App">
      {
        products.map((product,index) => {
          return (
            <Product name= />

          )
        })
      }
    </div>
  );
}

export default App;
