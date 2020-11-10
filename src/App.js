import { Provider } from "mobx-react";
import { useState } from "react";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";
import WordBookStore from "./store/wordbook";

function App() {
  const [wordbookStore] = useState(() => new WordBookStore());
  return (
    <Provider wordbook={wordbookStore}>
      <Layout appTitle="Word Master" side={<SideBar />}>
        <div>asdf</div>
      </Layout>
    </Provider>
  );
}

export default App;
