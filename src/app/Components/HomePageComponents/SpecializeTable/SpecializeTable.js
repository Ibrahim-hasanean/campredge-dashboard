import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
  tableContainer: {
    width: "70%"
  },
  table: {
    width: "100%"
  },
  cells: {
    fontSize: "14px",
    fontWeight: "700"
  }
});

const SpecializeTable = ({ specialist }) => {
  const classes = useStyles();

  return (
    <Grid item container justify="center" xs={12}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.cells}>#</TableCell>
              <TableCell className={classes.cells} align="right">
                {" "}
                اسم المتخصص
              </TableCell>
              <TableCell className={classes.cells} align="right">
                عدد العملاء
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {specialist.map((spec, index) => (
              <TableRow key={index}>
                <TableCell className={classes.cells} component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell className={classes.cells} align="right">
                  {spec.specialist.fullName}
                </TableCell>
                <TableCell className={classes.cells} align="right">
                  {spec.count}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default SpecializeTable;
