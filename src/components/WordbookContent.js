import { useState } from "react";
import { observer, Provider } from "mobx-react";
import { Tab, Tabs } from "@material-ui/core";
import { useStores } from "../store";

import WordbookStore from "../store/wordbook";
import WordbookToolbar from "./WordbookToolbar";
import WordListPage from "./WordListPage";
import SettingPage from "./SettingPage";
import { reaction } from "mobx";

const pages = [
  {
    title: "단어",
    component: WordListPage,
  },
  {
    title: "설정",
    component: SettingPage,
  },
];

export default observer(function WordbookContent() {
  const { wordbookList } = useStores();

  const [wordbookStore] = useState(() => new WordbookStore());

  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleSelectionChange(e, val) {
    setSelectedIndex(val);
  }

  reaction(
    () => wordbookList.current,
    async (current, prev) => {
      if (current.id !== -1) {
        await wordbookStore.load(current.id);
      }
    }
  );

  if (!wordbookList.selected) {
    return <div>단어장을 만들어보세요!</div>;
  }

  const PageContent = pages[selectedIndex].component;

  return (
    <Provider wordbook={wordbookStore}>
      <WordbookToolbar
        wordbookList={wordbookList}
        navTabs={
          <Tabs value={selectedIndex} onChange={handleSelectionChange}>
            {pages.map((page, idx) => {
              return <Tab label={page.title} key={idx}></Tab>;
            })}
          </Tabs>
        }
      />
      <PageContent />
    </Provider>
  );
});
