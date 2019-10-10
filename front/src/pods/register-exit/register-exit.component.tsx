import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SignatureCanvas from "react-signature-canvas";
import {registerExitViewModel} from "./register-exit.vm";

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
        }
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
                        className={classes.textField}
                        value={registerExit.cardNumber}
                        onChange={onChange}
                        margin="normal"
                    />
                    <div className={classes.rowElementWrapper}>
                        <div className={classes.innerLeft}>
                            <label>Date</label>
                            <label>{registerExit.date}</label>
                        </div>
                        <div className={classes.innerRight}>
                            <label>Hour</label>
                            {registerExit.hour}
                        </div>


                    </div>
                </div>
                <div className={classes.rowElementWrapper}>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={registerExit.firstName}
                        onChange={onChange}
                        margin="normal"
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        className={classes.textField}
                        value={registerExit.lastName}
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
                        onChange={onChange}
                        margin="normal"
                    />
                    <TextField
                        id="company"
                        label="Company"
                        className={classes.textField}
                        value={registerExit.company}
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
                        onChange={onChange}
                        margin="normal"
                    />
                </div>
                <SignatureCanvas
                    penColor="black"
                    backgroundColor="rgba(240,240,240,255)"
                    canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
                />
            </form>
        </div>
    );
};
