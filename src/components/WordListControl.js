import {
  Box,
  Button,
  ButtonGroup,
  InputAdornment,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Switch,
  TextField,
  Typography,
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

function ViewTypePanel({
  isHideDef,
  showDelWord,
  onHideDefChange,
  onShowDelWordChange,
  wordCount,
}) {
  const handleChange = (type) => (e) => {
    if (type === "hideDef") {
      onHideDefChange(e.target.checked);
    } else if (type === "delWord") {
      onShowDelWordChange(e.target.checked);
    }
  };
  return (
    <Panel>
      <Typography>총 {wordCount}개 단어</Typography>
      <List>
        <ListItem>
          <ListItemText primary="단어 뜻 숨기기" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              checked={isHideDef}
              onChange={handleChange("hideDef")}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="단어 삭제 켜기" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              checked={showDelWord}
              onChange={handleChange("delWord")}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Panel>
  );
}

function ViewOptionPanel({ onSearchCnahge, search, onSortAction }) {
  function handleChange(e) {
    if (onSearchCnahge) {
      onSearchCnahge(e.target.value);
    }
  }

  function handleSortAction(type) {
    if (onSortAction) {
      onSortAction(type);
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
      <ButtonGroup color="primary" fullWidth>
        <Button onClick={() => handleSortAction("dict")}>사전순 정렬</Button>
        <Button onClick={() => handleSortAction("rand")}>랜덤 섞기</Button>
      </ButtonGroup>
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

  function sortAction(type) {
    wordbook.sort(type);
  }

  return (
    <>
      <ViewOptionPanel
        onSearchCnahge={changeSearch}
        search={wordbook.search}
        onSortAction={sortAction}
      />
      <ViewTypePanel
        isHideDef={wordbook.isHideDef}
        showDelWord={wordbook.showDelWord}
        onHideDefChange={(val) => wordbook.setHideDef(val)}
        onShowDelWordChange={(val) => wordbook.setDelWord(val)}
        wordCount={wordbook.count}
      />
      <AddWordPanel onSubmit={addWord} />
    </>
  );
});

export default WordListControl;
