import { Box, Button, Paper, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { observer } from "mobx-react";
import { useRef, useState } from "react";
import { useStores } from "../store";

function AddWordPanel({ onSubmit }) {
  const [word, setWord] = useState("");
  const [def, setDef] = useState("");

  const wordRef = useRef(null);
  const defRef = useRef(null);

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
    <Box padding={1}>
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
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        disableElevation
        fullWidth
        onClick={() => handleSubmit()}
      >
        단어 추가
      </Button>
    </Box>
  );
}

const WordListControl = observer(function WordListControl() {
  const { wordbook } = useStores();

  function addWord(word) {
    wordbook.addWord({ word: word.word, def: word.def });
  }

  return (
    <Paper>
      <AddWordPanel onSubmit={addWord} />
    </Paper>
  );
});

export default WordListControl;
