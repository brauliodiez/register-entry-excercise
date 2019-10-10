import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@material-ui/core";
import { registerEntryViewModel } from "./register-entry.vm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center"
    },
    textField: {
      display: "flex",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "18rem"
    },
    dense: {
      display: "flex",
      marginTop: "1.1875rem"
    },
    columnElementWrapper: {
      display: "flex",
      flexDirection: "column"
    },
    rowElementWrapper: {
      display: "flex",
      flexDirection: "row"
    },
    rowButtonElementWrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row"
    },
    element: {
      display: "flex",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "1rem"
    },
    innerLeft: {
      display: "flex",
      alignItems: "flex-start"
    },
    innerRight: {
      display: "flex",
      alignItems: "flex-end"
    },
    button: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(1)
    },
    specialInput: {
      display: "flex",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: "1rem",
      marginBottom: "0.5rem",
      width: "9 rem"
    },
    rowSignatureWrapper : {
      display: "flex",
      justifyContent: "center"
    },
    sigCanvas : {
      width : 500,
      height : 200
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
    <div className={classes.container}>
      <form noValidate autoComplete="off">
        <div className={classes.rowElementWrapper}>
          <TextField
            id="cardNumber"
            label="Card Number"
            className={classes.textField}
            value={registerEntry.cardNumber}
            onChange={onChange}
            margin="normal"
          />

          <TextField
            id="date"
            label="date"
            type="date"
            defaultValue={registerEntry.date}
            disabled={true}
            className={classes.specialInput}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="time"
            label="hour"
            type="time"
            defaultValue={registerEntry.hour}
            disabled={true}
            className={classes.specialInput}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
        </div>
        <div className={classes.rowElementWrapper}>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={registerEntry.firstName}
            onChange={onChange}
            margin="normal"
          />
          <TextField
            id="lastName"
            label="Last Name"
            className={classes.textField}
            value={registerEntry.lastName}
            onChange={onChange}
            margin="normal"
          />
        </div>

        <div className={classes.rowElementWrapper}>
          <TextField
            id="DNI"
            label="DNI"
            className={classes.textField}
            value={registerEntry.dni}
            onChange={onChange}
            margin="normal"
          />
          <TextField
            id="company"
            label="Company"
            className={classes.textField}
            value={registerEntry.company}
            onChange={onChange}
            margin="normal"
          />
        </div>
        <div className={classes.rowElementWrapper}>
          <TextField
            id="visit"
            label="Visits"
            className={classes.textField}
            value={registerEntry.visits}
            onChange={onChange}
            margin="normal"
          />
        </div>
          <div className={classes.rowSignatureWrapper}>
              <SignatureCanvas
                  penColor="black"
                  backgroundColor="lightgrey"
                  canvasProps={{ className: classes.sigCanvas }}
              />
          </div>
        <div className={classes.rowButtonElementWrapper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
