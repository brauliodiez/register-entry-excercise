import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

export const AppLayout: React.FunctionComponent = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Hello World
          </Typography>
        </Toolbar>
      </AppBar>

      {props.children}
    </div>
  );
};
