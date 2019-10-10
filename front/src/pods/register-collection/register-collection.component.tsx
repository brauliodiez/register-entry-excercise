import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { EntryEntity } from "./register-collection.vm";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    }
  })
);

interface Props {
  entryCollection: EntryEntity[];
  onLoadCollection: () => void;
}

export const RegisterCollectionComponent = (props: Props) => {
  const { entryCollection, onLoadCollection } = props;
  const classes = useStyles("");

  React.useEffect(() => {
    onLoadCollection;
  }, []);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Card number</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">DNI</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Visits</TableCell>
            <TableCell align="right">Entry time</TableCell>
            <TableCell align="right">Exit time</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entryCollection.map(row => (
            <TableRow key={row.dni}>
              <TableCell component="th" scope="row">
                {row.cardNumber}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.dni}</TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.visits}</TableCell>
              <TableCell align="right">{row.entry}</TableCell>
              <TableCell align="right">{row.exit}</TableCell>
              <TableCell align="right">
                <CreateIcon
                  onClick={() => {
                    alert(`${row.dni}`);
                  }}
                ></CreateIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
