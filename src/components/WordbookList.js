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
  ListSubheader,
} from "@material-ui/core";

import { observer } from "mobx-react";
import { useState } from "react";

import AddIcon from "@material-ui/icons/Add";

import { useStores } from "../store";

const useStyles = makeStyles({
  addBtn: {},
});

const CreateWordbookDialog = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState("");

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const submit = () => {
    (props.onSubmit || (() => {}))(config);
    closeDialog();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            name="name"
            onChange={handleChange}
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

const WordbookItem = ({ book, selected, onClick }) => {
  function handleItemClick() {
    onClick(book);
  }

  return (
    <ListItem button selected={selected} onClick={handleItemClick}>
      <ListItemText>{book.name}</ListItemText>
    </ListItem>
  );
};

const Wordbook = observer(() => {
  const { wordbookList } = useStores();
  const classes = useStyles();

  function createWordbook(config) {
    wordbookList.create(config);
  }

  return (
    <>
      <List subheader={<ListSubheader>내 단어장</ListSubheader>}>
        {wordbookList.books.map((book) => (
          <WordbookItem
            book={book}
            key={book.id}
            selected={book === wordbookList.current}
            onClick={() => wordbookList.select(book)}
          />
        ))}
      </List>

      <CreateWordbookDialog
        onSubmit={createWordbook}
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
