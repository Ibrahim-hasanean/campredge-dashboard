import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Pagination } from "@material-ui/lab";
import DynamicRow from "./DynamicRow";
import useStyle from "./style";

const DynamicTable = ({ headers, rows, pageChange, page, count }) => {
  const classes = useStyle();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              className={`${classes.tableCells} ${classes.tableHeader}`}
            >
              #
            </TableCell>
            {headers &&
              headers.map((header, index) => (
                <TableCell
                  key={index}
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  {header}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row, index) => (
              <DynamicRow key={index} row={row} index={index} />
            ))}
        </TableBody>
      </Table>
      <Pagination
        onChange={pageChange}
        page={page}
        count={count}
        showFirstButton
        showLastButton
      />
    </TableContainer>
  );
};

export default DynamicTable;
