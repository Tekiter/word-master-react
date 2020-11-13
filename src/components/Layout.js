import { Drawer, makeStyles, Toolbar, Typography } from "@material-ui/core";

const sidebarWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: sidebarWidth,
  },
  drawer: {
    width: sidebarWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: sidebarWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
  },
}));

function Layout({ appTitle, side, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6">{appTitle}</Typography>
        </Toolbar>
        <div className={classes.drawerContainer}>{side}</div>
      </Drawer>
      <main className={classes.content}>
        {/* <Toolbar /> */}

        {children}
      </main>
    </div>
  );
}

export default Layout;
