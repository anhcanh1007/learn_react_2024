import "./App.css";
import Card from "./card/Card";
import CardList from "./card/CardList";
import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    blue: "#2979ff",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
        <p
      </div>
    </ThemeProvider>
  );
}

export default App;
