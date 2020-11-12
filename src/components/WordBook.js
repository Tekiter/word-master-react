import {
  List,
  ListItem,
  ListItemText,
  Button,
  makeStyles,
} from "@material-ui/core";
import { observer } from "mobx-react";

import AddIcon from "@material-ui/icons/Add";

import { useStores } from "../store";

const useStyles = makeStyles({
  addBtn: {
    display: "block",
  },
});

const WordbookItem = ({ book }) => {
  return (
    <ListItem button>
      <ListItemText>{book.name}</ListItemText>
    </ListItem>
  );
};

const Wordbook = observer(() => {
  const { wordbook } = useStores();
  const classes = useStyles();

  return (
    <>
      <List>
        {wordbook.books.map((book) => (
          <WordbookItem book={book} key={book.id} />
        ))}
      </List>

      <Button
        className={classes.addBtn}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        disableElevation
        onClick={() => wordbook.create({ name: "1234" })}
      >
        새 단어장
      </Button>
    </>
  );
});

export default Wordbook;
