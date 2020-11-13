import { observer } from "mobx-react";
import { useStores } from "../store";
import WordbookToolbar from "./WordbookToolbar";

export default observer(function WordbookContent() {
  const { wordbookList } = useStores();

  if (!wordbookList.selected) {
    return <div>단어장을 만들어보세요!</div>;
  }

  return (
    <>
      <WordbookToolbar wordbookList={wordbookList} />
      <div>{JSON.stringify(wordbookList.current)}</div>
    </>
  );
});
