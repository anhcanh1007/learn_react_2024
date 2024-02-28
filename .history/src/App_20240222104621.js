import "./App.css";
import { UserData } from "./UserData";

function App() {
  return (
    <div className="App">
      {UserData.map((item, index) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.username}</h1>
          <h1>{item.email || }</h1>
          <h1>{item.address.street}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
