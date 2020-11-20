import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
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
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function Seperate() {
  const classes = useStyles();

  return (
    <>
      <Divider className={classes.divider} />
    </>
  );
}

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
    <>
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
    </>
  );
}

function DeleteWordbook({ onDelete, name }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const classes = useStyles();

  function handleClick() {
    setDialogOpen(true);
  }

  function handleDialog(isYes) {
    if (onDelete && isYes) {
      onDelete.call();
    }
    setDialogOpen(false);
  }

  return (
    <Box mt={1} display="flex">
      <Typography className={classes.title}>단어장 삭제</Typography>
      <Box flexGrow={1} />
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={handleClick}
      >
        단어장 삭제하기
      </Button>
      <Dialog open={dialogOpen}>
        <DialogTitle>단어장 삭제</DialogTitle>
        <DialogContent>{name} 단어장을 정말 삭제하시겠습니까?</DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleDialog(true)}
            color="secondary"
            autoFocus
          >
            삭제
          </Button>
          <Button onClick={() => handleDialog(false)} color="primary">
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default observer(function SettingPage() {
  const { wordbook, wordbookList } = useStores();

  const classes = useStyles();

  async function changeName(name) {
    await wordbook.changeName(name);
    await wordbookList.load();
  }

  async function deleteWordbook() {
    await wordbookList.delete(wordbook.id);
  }

  return (
    <Container className={classes.container} maxWidth="sm">
      <Card variant="outlined">
        <CardContent>
          <ChangeName currentName={wordbook.name} onNameChange={changeName} />
          <Seperate />
          <DeleteWordbook onDelete={deleteWordbook} name={wordbook.name} />
        </CardContent>
      </Card>
    </Container>
  );
});
