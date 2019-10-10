import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { registerEntryViewModel } from "./register-entry.vm";
import Container from "@material-ui/core/Container";
import SignatureCanvas from "react-signature-canvas";
import { element } from "prop-types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19
    },
    elementWrapper: {
      flexDirection: "column"
    },
    highElementWrapper: {
      flexDirection: "row"
    },
    element: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 100
    }
  })
);

interface Props {
  onChange: (e: any) => void;
  registerEntry: registerEntryViewModel;
}

export const RegisterEntryComponent = (props: Props) => {
  const classes = useStyles("");

  const { onChange, registerEntry } = props;

  return (
    <form noValidate autoComplete="off">
      <div className={classes.highElementWrapper}>
        <div className={classes.elementWrapper}>
          <TextField
            id="standard-name"
            label="Card Number"
            className={classes.textField}
            value={registerEntry.cardNumber}
            onChange={onChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={registerEntry.firstName}
            onChange={onChange}
            margin="normal"
          />

          <TextField
            id="standard-name"
            label="DNI"
            className={classes.textField}
            value={registerEntry.firstName}
            onChange={onChange}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Visits"
            className={classes.textField}
            value={registerEntry.lastName}
            onChange={onChange}
            margin="normal"
          />
        </div>
        <div className={classes.elementWrapper}>
          <div className={classes.highElementWrapper}>
            <div>
              <label>Date:</label>
              {registerEntry.date}
            </div>
            <div>
              <label>Hour:</label>
              {registerEntry.hour}
            </div>
          </div>
          <TextField
            id="standard-name"
            label="Last Name"
            className={classes.textField}
            value={registerEntry.lastName}
            onChange={onChange}
            margin="normal"
          />
          <div>
            <TextField
              id="standard-name"
              label="Company"
              className={classes.textField}
              value={registerEntry.lastName}
              onChange={onChange}
              margin="normal"
            />
          </div>
        </div>
      </div>
      <SignatureCanvas
        penColor="black"
        backgroundColor="rgba(240,240,240,255)"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
      />
    </form>
  );
};
