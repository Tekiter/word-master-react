import { List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import { observer } from "mobx-react";
import { useState } from "react";

import { useStores } from "../store";

const WordbookItem = ({ book }) => {
  return (
    <ListItem button>
      <ListItemText>{book.name}</ListItemText>
    </ListItem>
  );
};

const CreateWordbookDialog = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {props.render(openDialog)}
      <Dialog
        open={isOpen}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" fullWidth label="단어장 이름">
            
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={closeDialog} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
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

      <CreateWordbookDialog
        render={(open) => {
          <Button
            variant="contained"
            color="primary"
            disableElevation
            // onClick={() => wordbook.create({ name: "1234" })}
            onClick={open}
          >
            +
          </Button>;
        }}
      ></CreateWordbookDialog>
    </>
  );
});

export default Wordbook;
