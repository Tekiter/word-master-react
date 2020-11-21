import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import { useStores } from "../store";
import FlipMove from "react-flip-move";
import CloseIcon from "@material-ui/icons/Close";

import WordListControl from "./WordListControl";
import { forwardRef } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

const WordItem = forwardRef(function WordItem(
  { word, hideDef, showDelWord, onDelete },
  ref
) {
  function handleDeleteClick() {
    if (onDelete) {
      onDelete(word);
    }
  }

  return (
    <Box ref={ref}>
      <ListItem>
        <ListItemText>
          <Box display="flex">
            {showDelWord ? (
              <Box pr={1}>
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={handleDeleteClick}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            ) : null}

            <Typography component="div" variant="h6">
              {word.word}
            </Typography>
            <Box flexGrow={1} />
            {!hideDef && (
              <Typography component="div" variant="h6">
                {word.def}
              </Typography>
            )}
          </Box>
        </ListItemText>
      </ListItem>
      <Divider component="li" />
    </Box>
  );
});

function WordList({ words, hideDef, showDelWord, wordbookName, onDeleteWord }) {
  function handleDelete({ word }) {
    if (onDeleteWord) {
      onDeleteWord(word);
    }
  }

  return (
    <Box>
      <List dense>
        <Divider />
        <FlipMove
          enterAnimation="accordionVertical"
          leaveAnimation="accordionVertical"
        >
          {words.map((word) => (
            <WordItem
              word={word}
              key={wordbookName + word.word}
              hideDef={hideDef}
              onDelete={handleDelete}
              showDelWord={showDelWord}
            />
          ))}
        </FlipMove>
      </List>
    </Box>
  );
}

export default observer(function WordListPage() {
  const { wordbook } = useStores();

  const classes = useStyles();

  function deleteWord(word) {
    wordbook.deleteWord(word);
  }

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <WordList
            words={wordbook.wordList}
            wordbookName={wordbook.name}
            hideDef={wordbook.isHideDef}
            onDeleteWord={deleteWord}
            showDelWord={wordbook.showDelWord}
          />
        </Grid>
        <Grid item xs={4}>
          <WordListControl />
        </Grid>
      </Grid>
    </Container>
  );
});
