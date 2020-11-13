import {
  ClickAwayListener,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { observer } from "mobx-react";
import { useStores } from "../store";

function WordbookNameDisplay({ name }) {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap>
        {name}
      </Typography>
      <IconButton edge="start" size="small">
        <SettingsIcon />
      </IconButton>
    </Toolbar>
  );
}

function WordbookName() {
  return <ClickAwayListener></ClickAwayListener>;
}

export default observer(function WordbookToolbar() {
  const { wordbookList } = useStores();

  if (!wordbookList.selected) {
    return <Toolbar />;
  }

  return (
    <Toolbar>
      <Typography variant="h6" noWrap>
        {wordbookList.current.name}
      </Typography>
      <IconButton edge="start" size="small">
        <SettingsIcon />
      </IconButton>
    </Toolbar>
  );
});
