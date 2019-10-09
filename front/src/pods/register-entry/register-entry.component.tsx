import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { registerEntryViewModel } from "./register-entry.vm";
import Container from "@material-ui/core/Container";
import SignatureCanvas from "react-signature-canvas";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
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
    <Box color="rgba(240,240,240,255)">
      <form className={classes.container} noValidate autoComplete="off">
        <Container fixed>
          <div>
            <TextField
              id="standard-name"
              label="Card Number"
              className={classes.textField}
              value={registerEntry.cardNumber}
              onChange={onChange}
              margin="normal"
            />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="time"
              label="Alarm clock"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
            />
          </div>
          <div>
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
              label="Last Name"
              className={classes.textField}
              value={registerEntry.lastName}
              onChange={onChange}
              margin="normal"
            />
          </div>
          <div>
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
              label="Company"
              className={classes.textField}
              value={registerEntry.lastName}
              onChange={onChange}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="standard-name"
              label="Visits"
              className={classes.textField}
              value={registerEntry.lastName}
              onChange={onChange}
              margin="normal"
            />
          </div>
          <SignatureCanvas
            penColor="black"
            backgroundColor="rgba(240,240,240,255)"
            canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
          />
        </Container>
      </form>
    </Box>
  );
};
