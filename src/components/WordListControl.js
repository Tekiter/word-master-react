import {
  Box,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Switch,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { observer } from "mobx-react";
import { useMemo, useRef, useState } from "react";
import { useStores } from "../store";

const useStyles = makeStyles((theme) => ({
  addWordBtn: {
    marginTop: theme.spacing(1),
  },
}));

function Panel({ children }) {
  return (
    <Box marginBottom={2}>
      <Paper variant="outlined">
        <Box padding={1.5}>{children}</Box>
      </Paper>
    </Box>
  );
}

function AddWordPanel({ onSubmit }) {
  const [word, setWord] = useState("");
  const [def, setDef] = useState("");

  const classes = useStyles();

  const wordRef = useRef(null);
  const defRef = useRef(null);

  const submitable = useMemo(() => {
    if (word.length === 0) {
      return false;
    }
    if (def.length === 0) {
      return false;
    }
    return true;
  }, [word, def]);

  const handleChange = (e) => {
    if (e.target.name === "word") {
      setWord(e.target.value);
    } else if (e.target.name === "def") {
      setDef(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (def !== "") {
      onSubmit({ word, def });
      setWord("");
      setDef("");
      wordRef.current.focus();
    }
  };

  const handleKeyWord = (e) => {
    if (e.key === "Enter" && word !== "") {
      defRef.current.focus();
    }
  };

  const handleKeyDef = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Panel>
      <TextField
        inputRef={wordRef}
        label="단어"
        name="word"
        value={word}
        variant="filled"
        margin="dense"
        fullWidth
        onChange={handleChange}
        onKeyDown={handleKeyWord}
      />
      <TextField
        inputRef={defRef}
        label="뜻"
        name="def"
        value={def}
        variant="filled"
        margin="dense"
        fullWidth
        onChange={handleChange}
        onKeyDown={handleKeyDef}
      />
      <Button
        className={classes.addWordBtn}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        disableElevation
        fullWidth
        disabled={!submitable}
        onClick={() => handleSubmit()}
      >
        단어 추가
      </Button>
    </Panel>
  );
}

function ViewTypePanel({ isHideDef, onHideDefChange }) {
  function handleChange(e) {
    onHideDefChange(e.target.checked);
  }
  return (
    <Panel>
      <List>
        <ListItem>
          <ListItemText primary="단어 뜻 숨기기" />
          <ListItemSecondaryAction>
            <Switch edge="end" value={isHideDef} onChange={handleChange} />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Panel>
  );
}

function SearchPanel({ onSearchCnahge, search }) {
  function handleChange(e) {
    if (onSearchCnahge) {
      onSearchCnahge(e.target.value);
    }
  }

  return (
    <Panel>
      <TextField
        placeholder="검색"
        variant="outlined"
        margin="dense"
        fullWidth
        value={search}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Panel>
  );
}

const WordListControl = observer(function WordListControl() {
  const { wordbook } = useStores();

  function addWord(word) {
    wordbook.addWord({ word: word.word, def: word.def });
  }

  function changeSearch(search) {
    wordbook.setSearch(search);
  }

  return (
    <>
      <SearchPanel onSearchCnahge={changeSearch} search={wordbook.search} />
      <ViewTypePanel
        isHideDef={wordbook.isHideDef}
        onHideDefChange={(val) => wordbook.setHideDef(val)}
      />
      <AddWordPanel onSubmit={addWord} />
    </>
  );
});

export default WordListControl;
