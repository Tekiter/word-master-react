import { observer } from "mobx-react";
import { useStores } from "../store";
import WordbookContent from "./WordbookContent";

export default observer(function AppContent() {
  const { wordbook } = useStores();

  function ContentSelector() {
    if (wordbook.selected) {
      return <div>선택된 단어장이 없습니다...</div>;
    } else {
      return <WordbookContent />;
    }
  }

  return (
    <>
      <ContentSelector />
    </>
  );
});
