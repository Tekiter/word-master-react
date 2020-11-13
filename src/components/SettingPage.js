import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import { useStores } from "../store";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

export default observer(function SettingPage() {
  const classes = useStyles();
  const { wordbook } = useStores();

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography className={classes.title}>단어장 이름</Typography>
          <Box display="flex" flexDirection="row">
            <TextField variant="outlined" placeholder={wordbook.name} />
            <Button variant="outlined" color="primary" size="small">
              변경
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
});
