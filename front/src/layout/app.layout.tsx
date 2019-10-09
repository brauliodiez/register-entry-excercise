import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);

export const AppLayout: React.FunctionComponent = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img
            src="https://as2.ftcdn.net/jpg/01/91/20/55/500_F_191205513_1umMSGC0e2xJNO4ufUHYhwvOKEuiK5zC.jpg"
            alt="Flying free"
            height="40"
            width="40"
          />
          <Typography
            variant="h6"
            color="inherit"
            className={classes.title}
            align="left"
          >
            &nbsp;&nbsp;Register enter and exit
          </Typography>
          <Typography variant="h6" color="inherit" align="right">
            &nbsp;&nbsp;Register 2
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};
