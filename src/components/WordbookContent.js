import { observer } from "mobx-react";
import { useStores } from "../store";

export default observer(function WordbookContent() {
  const { wordbookList } = useStores();

  if (!wordbookList.selected) {
    return <div>단어장을 만들어보세요!</div>;
  }

  return <div>{JSON.stringify(wordbookList.current)}</div>;
});
