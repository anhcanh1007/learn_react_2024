import "./App.css";
import { UserData } from "./UserData";

function App() {
  return <div className="App">
  {
    UserData.map((item,index) => (
      <div key={item.id}>
      <h1>{item.name}</h1>
      <h1>{item.user}</h1>
      <h1>{item.name}</h1>
    </div>
    ))
  }
    
  </div>;
}

export default App;
