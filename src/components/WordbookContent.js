import { observer } from "mobx-react";
import { useStores } from "../store";

export default observer(function WordbookContent() {
  const { wordbook } = useStores();

  return <div>{JSON.stringify(wordbook.current)}</div>;
});
