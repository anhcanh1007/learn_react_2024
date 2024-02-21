import "./App.css";
import Avatar from "./component/Avatar";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <Product />
      <Avatar person={{ name: "anh canh", age: 18 }} 
        
      />
    </div>
  );
}

export default App;
