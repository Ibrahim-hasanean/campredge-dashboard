import React from "react";
import { Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import CityRow from "./CityRow";
const CitiesTable = ({ cities, setCities }) => {
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
                اسم المدينة عربي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                اسم المدينة انجليزي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                احياء المدينة
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                تعديل احياء المدينة
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                تعديل المدينة
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                حذف المدينة
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cities.map((city, index) => (
              <CityRow
                key={index}
                city={city}
                index={index}
                cities={cities}
                setCities={setCities}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CitiesTable;
