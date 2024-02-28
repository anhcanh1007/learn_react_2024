import "./App.css";
import { UserData } from "./UserData";

function App() {
  return <div className="App">
  {
    UserData.map((item,index) => (
      <div>
      <h1>{item.name}</h1>
    </div>
    ))
  }
    
  </div>;
}

export default App;
