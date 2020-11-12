import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";

import { observer } from "mobx-react";
import { useState } from "react";

import AddIcon from "@material-ui/icons/Add";

import { useStores } from "../store";

const useStyles = makeStyles({
  addBtn: {},
});

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

  const submit = () => {
    closeDialog();
  };

  return (
    <>
      {props.render(openDialog)}
      <Dialog
        open={isOpen}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">단어장 추가</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            label="단어장 이름"
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            취소
          </Button>
          <Button onClick={submit} color="primary">
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </>
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

      <CreateWordbookDialog
        render={(open) => (
          <Button
            className={classes.addBtn}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            disableElevation
            fullWidth
            onClick={() => open()}
          >
            새 단어장
          </Button>
        )}
      ></CreateWordbookDialog>
    </>
  );
});

export default Wordbook;
