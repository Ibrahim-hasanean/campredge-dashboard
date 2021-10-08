import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import PopUp from "app/Components/PopUp/PopUp";
import ProductsTable from "./ProductsTable";
import * as moment from "moment";
const OrdersRow = ({ order, index }) => {
  const classes = useStyle();
  // const [openSuspend, setOpenSuspend] = useState(false);
  // const [openEdite, setOpenEdite] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  // const handleCloseSuspend = () => {
  //   setOpenSuspend(false);
  // };

  // const handleOpenSuspend = () => {
  //   setOpenSuspend(true);
  // };

  // const handleOpenEdite = () => {
  //   setOpenEdite(true);
  // };
  // const handleCloseEdite = () => {
  //   setOpenEdite(false);
  // };

  return (
    <>
      <TableRow onClick={() => handleOpen()} className={classes.tableRow}>
        <TableCell className={classes.tableCells} align="center">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.orderNo}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.package.name.ar}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.package.duration}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.paymentType}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.user?.fullName}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.user?.phoneNum}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.createdAt
            ? moment(new Date(order.createdAt).setHours(0, 0, 0, 0)).format(
                "MM-DD-YYYY"
              )
            : "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.status}
        </TableCell>
      </TableRow>
      <PopUp
        title="المنتجات الخاصة بالاوردر"
        open={open}
        handleClose={handleClose}
        maxWidth="lg"
      >
        <ProductsTable products={order.products} />
      </PopUp>
    </>
  );
};

export default OrdersRow;
