import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import { useStores } from "../store";

import WordListControl from "./WordListControl";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

function WordItem({ word }) {
  return (
    <>
      <ListItem>
        <ListItemText>
          <Box display="flex">
            <Typography component="div" variant="h6">
              {word.word}
            </Typography>
            <Box flexGrow={1} />
            <Typography component="div" variant="h6">
              {word.def}
            </Typography>
          </Box>
        </ListItemText>
      </ListItem>
      <Divider component="li" />
    </>
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

export default observer(function WordListPage() {
  const { wordbook } = useStores();

  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <WordList words={wordbook.wordList} />
        </Grid>
        <Grid item xs={4}>
          <WordListControl />
        </Grid>
      </Grid>
    </Container>
  );
});
