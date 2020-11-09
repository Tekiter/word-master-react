import { Drawer } from "@material-ui/core";

import Header from "./components/Header";
import WordBook from "./components/WordBook";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Drawer variant="permanent" anchor="left">
        <WordBook></WordBook>
      </Drawer>
      <main>asdfasdf</main>
    </div>
  );
}

export default App;
