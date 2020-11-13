import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useStores } from "../store";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  container: {
    marginTop: theme.spacing(2),
  },
}));

function ChangeName({ currentName, onNameChange, ...others }) {
  const classes = useStyles();

  const [newName, setNewName] = useState(currentName);

  useEffect(() => {
    setNewName(currentName);
  }, [currentName]);

  const handleChange = () => {
    onNameChange(newName);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      if (currentName !== newName) {
        handleChange();
      }
    } else if (e.key === "Escape") {
      setNewName(currentName);
    }
  };

  return (
    <Card {...others}>
      <CardContent>
        <Typography className={classes.title}>단어장 이름</Typography>
        <Box display="flex" flexDirection="row">
          <TextField
            variant="outlined"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={handleKey}
            fullWidth
            autoComplete="off"
          />
          <Box ml={1} display="flex">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              placeholder={currentName}
              onClick={handleChange}
              disabled={currentName === newName}
            >
              변경
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default observer(function SettingPage() {
  const { wordbook, wordbookList } = useStores();

  const classes = useStyles();

  async function changeName(name) {
    await wordbook.changeName(name);
    await wordbookList.load();
  }

  return (
    <Container className={classes.container} maxWidth="sm">
      <ChangeName currentName={wordbook.name} onNameChange={changeName} />
    </Container>
  );
});
