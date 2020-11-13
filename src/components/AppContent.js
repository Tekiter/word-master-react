import { observer } from "mobx-react";
import { useStores } from "../store";
import WordbookContent from "./WordbookContent";

export default observer(function AppContent() {
  const { wordbookList } = useStores();

  function ContentSelector() {
    if (wordbookList.selected) {
      return <div>선택된 단어장이 없습니다...</div>;
    } else {
      return <WordbookContent bookInfo={wordbookList.selected} />;
    }
  }

  return (
    <>
      <ContentSelector />
    </>
  );
});
