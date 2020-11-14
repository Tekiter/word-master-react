import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { observer } from "mobx-react";
import { useState } from "react";
import { useStores } from "../store";

function WordItem({ word }) {
  return (
    <ListItem>
      <ListItemText>
        {word.word} {word.def}
      </ListItemText>
    </ListItem>
  );
}

function WordList({ words }) {
  return (
    <Box>
      <Paper>
        <List dense>
          {words.map((word) => (
            <WordItem word={word} key={word.word} />
          ))}
        </List>
      </Paper>
    </Box>
  );
}

function AddWordPanel({ onSubmit }) {
  const [word, setWord] = useState("");
  const [def, setDef] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "word") {
      setWord(e.target.value);
    } else if (e.target.name === "def") {
      setDef(e.target.value);
    }
  };

  const handleSubmit = () => {
    onSubmit({ word, def });
    setWord("");
    setDef("");
  };

  return (
    <Box padding={1}>
      <TextField
        label="단어"
        name="word"
        value={word}
        variant="filled"
        margin="dense"
        fullWidth
        onChange={handleChange}
      />
      <TextField
        label="뜻"
        name="def"
        value={def}
        variant="filled"
        margin="dense"
        fullWidth
        onChange={handleChange}
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

const ControlPanel = observer(function ControlPanel() {
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

export default observer(function WordListPage() {
  const { wordbook } = useStores();

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ControlPanel />
        </Grid>
        <Grid item xs={8}>
          <WordList words={wordbook.wordList} />
        </Grid>
      </Grid>
    </Container>
  );
});
