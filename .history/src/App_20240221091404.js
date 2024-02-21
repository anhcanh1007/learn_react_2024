import "./App.css";
import Avatar from "./component/Avatar";
import Computer from "./component/Computer";
// import Avatar from "./component/Avatar";
import Product from "./component/Product";

function App(props) {
  let na
  function Profile({ person, job }) {
    return (
      <div>
        <h1>{person}</h1>
        <h1>{job}</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <Product />
      <Profile person="anh canh" job="developer" />
      <Avatar person={{ name: "test", age: 20 }} job="developer" />
      <Computer {...props} />
    </div>
  );
}

export default App;
