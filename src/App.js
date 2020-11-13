import { Provider } from "mobx-react";
import { useState } from "react";
import Layout from "./components/Layout";
import SideBar from "./components/SideBar";
import AppContent from "./components/AppContent";
import WordbookListStore from "./store/wordbookList";

function App() {
  const [wordbookListStore] = useState(() => new WordbookListStore());
  return (
    <Provider wordbookList={wordbookListStore}>
      <Layout appTitle="Word Master" side={<SideBar />}>
        <AppContent></AppContent>
      </Layout>
    </Provider>
  );
}

export default App;
