import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStores } from "../store";
import { observer } from "mobx-react";

const useStyles = makeStyles((theme) => ({
  nameBox: {
    width: "15em",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(3),
  },
}));

export default observer(function WordbookToolbar({ navTabs }) {
  const classes = useStyles();
  const { wordbookList, wordbook } = useStores();

  if (!wordbookList.selected) {
    return <Toolbar />;
  }

  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Box display="flex" flexDirection="row">
        <Box className={classes.nameBox}>
          <Typography variant="h6" noWrap>
            {wordbook.name}
          </Typography>
        </Box>

        {navTabs}
      </Box>
    </AppBar>
  );
});
