import "./App.css";
import Card from "./card/Card";
import CardList from "./card/CardList";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    
  }
}
function App() {
  return (
    <div className="App">
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </div>
  );
}

export default App;
