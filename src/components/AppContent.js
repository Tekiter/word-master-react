import { observer } from "mobx-react";
import { useStores } from "../store";
import WordbookContent from "./WordbookContent";

export default observer(function AppContent() {
  const { wordbookList } = useStores();

  return (
    <>
      {/* {JSON.stringify(wordbookList.selected)} */}
      {/* <ContentSelector /> */}
      {!wordbookList.selected ? (
        <div>선택된 단어장이 없습니다...</div>
      ) : (
        <WordbookContent />
      )}
    </>
  );
});
