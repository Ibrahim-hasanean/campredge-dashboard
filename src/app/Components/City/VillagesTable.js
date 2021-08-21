import React from "react";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Grid, makeStyles } from "@material-ui/core";
import VillageRow from "./VillageRow";

const useStyle = makeStyles(() => ({
  tableRow: {
    "&:hover": {
      background: "#d8d4d4"
    }
  },
  tableHeader: {
    // fontWeight: "600"
  },
  tableCells: {
    fontSize: "13px",
    fontWeight: "700"
  },
  table: {
    width: "100%"
  }
}));
const VillagesTable = ({ villages, city, cities, setCities }) => {
  const classes = useStyle();

  return (
    <Grid container justify="center">
      <TableContainer className={classes.productsContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
              >
                #
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                اسم الحي عربي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                اسم الحي انجليزي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                حذف الحي
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {villages.map((village, index) => (
              <VillageRow
                key={index}
                village={village}
                index={index}
                villages={villages}
                cities={cities}
                setCities={setCities}
                city={city}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default VillagesTable;
