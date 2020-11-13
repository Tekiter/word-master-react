import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

export default function WordbookToolbar({ wordbookList }) {
  if (!wordbookList.selected) {
    return <Toolbar />;
  }

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          {wordbookList.current.name}
        </Typography>
        <IconButton edge="start" size="small">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
