import { IconButton, Toolbar, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { observer } from "mobx-react";
import { useStores } from "../store";

export default observer(function WordbookToolbar() {
  const { wordbook } = useStores();

  if (!wordbook.selected) {
    return <Toolbar />;
  }

  return (
    <Toolbar>
      <Typography variant="h6" noWrap>
        {wordbook.current.name}
      </Typography>
      <IconButton edge="start" size="small">
        <EditIcon />
      </IconButton>
    </Toolbar>
  );
});
