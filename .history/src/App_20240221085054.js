import "./App.css";
import Avatar from "./component/Avatar";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <Product />
      <Avatar person=1 job="developer" />
    </div>
  );
}

export default App;
