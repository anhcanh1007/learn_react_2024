import "./App.css";
import Avatar from "./component/Avatar";
// import Avatar from "./component/Avatar";
import Product from "./component/Product";

function App() {
  function Profile({ person, job }) {
    return (
      <div>
        <h1>{person}</h1>
        <h1>{job}</h1>
      </div>
    );
  }
  function Computer(props) {
    
  }
  return (
    <div className="App">
      <Product />
      <Profile person="anh canh" job="developer" />
      <Avatar person={{ name: "test", age: 20 }} job="developer" />
    </div>
  );
}

export default App;
