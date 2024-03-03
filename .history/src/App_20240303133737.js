import "./App.css";
import Card from "./card/Card";
import CardList from "./card/CardList";
import The

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
