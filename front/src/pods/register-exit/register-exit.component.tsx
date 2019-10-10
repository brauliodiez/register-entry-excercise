import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SignatureCanvas from "react-signature-canvas";
import {registerExitViewModel} from "./register-exit.vm";
import {Button} from "@material-ui/core";

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
            width: "12.5rem",
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
            width: "6.25rem"
        },
        innerLeft : {
            display: "flex",
            alignItems: "flex-start"
        },
        innerRight : {
            display: "flex",
            alignItems : "flex-end"
        },
        button: {
            display:"flex",
            justifyContent: "center",
            margin: theme.spacing(1),
        },
    })
);

interface Props {
    onSubmit: (e: any) => void;
    registerExit: registerExitViewModel;
}

export const RegisterExitComponent = (props: Props) => {
    const classes = useStyles("");

    const { onSubmit, registerExit } = props;


    return (
        <div className={classes.container} >
            <form noValidate autoComplete="off">

                <div className={classes.rowElementWrapper}>

                    <TextField
                        id="cardNumber"
                        label="Card Number"
                        disabled={true}
                        className={classes.textField}
                        value={registerExit.cardNumber}
                        margin="normal"
                    />

                    <TextField
                        id="date"
                        label="date"
                        type="date"
                        defaultValue={registerExit.date}
                        disabled = {true}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="time"
                        label="hour"
                        type="time"
                        defaultValue={registerExit.hour}
                        disabled = {true}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </div>
                <div className={classes.rowElementWrapper}>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={registerExit.firstName}
                        disabled = {true}
                        margin="normal"
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        className={classes.textField}
                        value={registerExit.lastName}
                        disabled = {true}
                        margin="normal"
                    />
                </div>

                <div className={classes.rowElementWrapper}>
                    <TextField
                        id="DNI"
                        label="DNI"
                        className={classes.textField}
                        value={registerExit.dni}
                        disabled = {true}
                        margin="normal"
                    />
                    <TextField
                        id="company"
                        label="Company"
                        className={classes.textField}
                        value={registerExit.company}
                        disabled = {true}
                        margin="normal"
                    />
                </div>
                <div className={classes.rowElementWrapper}>

                    <TextField
                        id="visit"
                        label="Visits"
                        className={classes.textField}
                        value={registerExit.visits}
                        disabled = {true}
                        margin="normal"
                    />
                </div>
                <div className={classes.rowElementWrapper}>
                <SignatureCanvas
                    penColor="black"
                    backgroundColor="lightgrey"
                    canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
                />
        </div>
                <div className={classes.rowButtonElementWrapper}>
                <Button variant="contained" color="primary" className={classes.button} onSubmit={onSubmit}>
                    Save
                </Button>
                </div>

            </form>
        </div>
    );
};
