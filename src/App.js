import { Provider } from "mobx-react";
import { useState } from "react";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";
import AppContent from "./components/AppContent";
import WordbookStore from "./store/wordbook";

function App() {
  const [wordbookStore] = useState(() => new WordbookStore());
  return (
    <Provider wordbook={wordbookStore}>
      <Layout appTitle="Word Master" side={<SideBar />}>
        <AppContent></AppContent>
      </Layout>
    </Provider>
  );
}

export default App;
