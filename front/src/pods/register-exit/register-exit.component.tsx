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
            width: 200,
        },
        dense: {
            display: "flex",
            marginTop: 19
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
            width: 100
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
    onChange: (e: any) => void;
    registerExit: registerExitViewModel;
}

export const RegisterExitComponent = (props: Props) => {
    const classes = useStyles("");

    const { onChange, registerExit } = props;


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
                        onChange={onChange}
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
                        onChange={onChange}
                        margin="normal"
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        className={classes.textField}
                        value={registerExit.lastName}
                        disabled = {true}
                        onChange={onChange}
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
                        onChange={onChange}
                        margin="normal"
                    />
                    <TextField
                        id="company"
                        label="Company"
                        className={classes.textField}
                        value={registerExit.company}
                        disabled = {true}
                        onChange={onChange}
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
                        onChange={onChange}
                        margin="normal"
                    />
                </div>
                <div className={classes.rowElementWrapper}>
                <SignatureCanvas
                    penColor="black"
                    backgroundColor="rgba(240,240,240,255)"
                    canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
                />
        </div>
                <div className={classes.rowButtonElementWrapper}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Save
                </Button>
                </div>

            </form>
        </div>
    );
};
