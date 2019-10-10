import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const logo = require("../assets/logo.png");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(1),
    }
  })
);

export const AppLayout: React.FunctionComponent = props => {
  const classes = useStyles(props);

  const [currentTime, setCurrentTime] = React.useState("");
  React.useEffect(() => {
    setInterval(function() {
      const d = new Date();
      var hr = d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();

      setCurrentTime(`${hr}:${min}:${sec}`);
    }, 1000);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img
            src={logo}
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
            Register enter and exit
          </Typography>
          <Typography variant="h6" color="inherit" align="right">
            <span>{currentTime}</span>
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};
