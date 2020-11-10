import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { observer } from "mobx-react";

import { useStores } from "../store";

const WordbookItem = ({ book }) => {
  return (
    <ListItem button>
      <ListItemText>{book.name}</ListItemText>
    </ListItem>
  );
};

const Wordbook = observer(() => {
  const { wordbook } = useStores();

  return (
    <>
      <List>
        {wordbook.books.map((book) => (
          <WordbookItem book={book} key={book.id} />
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => wordbook.create({ name: "1234" })}
      >
        +
      </Button>
    </>
  );
});

export default Wordbook;
