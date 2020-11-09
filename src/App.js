import Layout from "./components/Layout";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Layout appTitle="Word Master" side={<SideBar />}>
      <div>asdf</div>
    </Layout>
  );
}

export default App;
