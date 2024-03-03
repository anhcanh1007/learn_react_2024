import "./App.css";
// import Card from "./card/Card";
import CardList from "./card/CardList";
import { ThemeProvider } from "styled-components";
import CardTailwind from "./card/CardTailwind";
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
          <CardTailwind primary={true} fontSize={"text-xl"} />
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </CardList>
      </div>
    </ThemeProvider>
  );
}

export default App;
