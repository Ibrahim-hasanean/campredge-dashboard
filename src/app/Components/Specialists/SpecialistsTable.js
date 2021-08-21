import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Pagination } from "@material-ui/lab";
import RTLProvider from "../RTLProvider";
import useStyle from "./style";
import SpecialistsRows from "./SpecialistsRows";
const SpecialistsTable = ({
  setSpecialists,
  specialists,
  getData,
  page,
  setPage,
  pages
}) => {
  const classes = useStyle();
  const pageChange = async (event, page) => {
    console.log(page);
    setPage(page);
    await getData(`page=${page}`);
  };
  return (
    <RTLProvider>
      <TableContainer className={classes.tableContainer} component={Paper}>
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
                اسم الأخصائي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                ايميل الأخصائي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                رقم جوال الأخصائي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                تعديل الأخصائي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                ايقاف/تنشيط الأخصائي
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {specialists.map((spec, index) => (
              <SpecialistsRows
                specialists={specialists}
                setSpecialists={setSpecialists}
                key={index}
                spec={spec}
                index={index}
              />
            ))}
          </TableBody>
        </Table>
        <Pagination
          onChange={pageChange}
          page={page}
          count={pages}
          showFirstButton
          showLastButton
          className={classes.tableCells}
        />
      </TableContainer>
    </RTLProvider>
  );
};

export default SpecialistsTable;
