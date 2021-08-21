import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Pagination } from "@material-ui/lab";
import useStyle from "./style";
import RTLProvider from "../RTLProvider";
import ShipmentRows from "./ShipmentRows";
const ShipmentsTable = ({
  shipments,
  setShipments,
  page,
  setPage,
  pages,
  getData
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
                رقم الشحنة
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                حالة الشحنة
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                رقم الطلب
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                اسم المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                جوال المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                ايميل المستخدم
              </TableCell>

              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                تعديل
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                حذف
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments.map((shipment, index) => (
              <ShipmentRows
                shipments={shipments}
                setShipments={setShipments}
                key={index}
                shipment={shipment}
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

export default ShipmentsTable;
