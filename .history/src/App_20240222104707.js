import "./App.css";
import { UserData } from "./UserData";

function App() {
  return (
    <div className="App">
      {UserData.map((item, index) =>{return (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.username}</h1>
          <h1>{item.email || "anhcanh@gmail.com"}</h1>
          <h1>{item.address.street}</h1>
        </div>
      <h1>{item.email}</h1>
      ))}
    </div>
  );
}

export default App;
