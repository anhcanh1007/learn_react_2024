import "./App.css";
import Avatar from "./component/Avatar";
import Product from "./component/Product";

function App() {
  function Profile(person, job) {
    return (
      <div>
        <h1>{}</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <Product />
      <Avatar person="anhcanh" job="developer" />
    </div>
  );
}

export default App;
