import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import { useStores } from "../store";
import FlipMove from "react-flip-move";

import WordListControl from "./WordListControl";
import { forwardRef } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

const WordItem = forwardRef(function WordItem({ word, hideDef }, ref) {
  return (
    <div ref={ref}>
      <ListItem>
        <ListItemText>
          <Box display="flex">
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
    </div>
  );
});

function WordList({ words, hideDef, wordbookName }) {
  return (
    <Box>
      {/* <Paper variant="outlined"> */}
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
            />
          ))}
        </FlipMove>
      </List>
      {/* </Paper> */}
    </Box>
  );
}

export default observer(function WordListPage() {
  const { wordbook } = useStores();

  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <WordList
            words={wordbook.wordList}
            wordbookName={wordbook.name}
            hideDef={wordbook.isHideDef}
          />
        </Grid>
        <Grid item xs={4}>
          <WordListControl />
        </Grid>
      </Grid>
    </Container>
  );
});
