import { Box, Tab, Tabs } from "@material-ui/core";
import { observer, Provider } from "mobx-react";
import { useStores } from "../store";
import WordbookToolbar from "./WordbookToolbar";
import WordbookStore from "../store/wordbook";
import { useEffect, useState } from "react";

const pages = [
  {
    title: "단어",
  },
  {
    title: "설정",
  },
];

export default observer(function WordbookContent() {
  const { wordbookList } = useStores();

  const [wordbookStore] = useState(() => new WordbookStore());

  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleSelectionChange(e, val) {
    setSelectedIndex(val);
  }

  useEffect(() => {
    if (wordbookList.selected) {
      const current = wordbookList.current;
      wordbookStore.load(current.id);
    }
  });

  if (!wordbookList.selected) {
    return <div>단어장을 만들어보세요!</div>;
  }

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
      <Box px={2}>{JSON.stringify(wordbookStore)}</Box>
      <Box px={2}>{JSON.stringify(wordbookList.current)}</Box>
      <Box px={2}>{pages[selectedIndex].title} 페이지</Box>
    </Provider>
  );
});
