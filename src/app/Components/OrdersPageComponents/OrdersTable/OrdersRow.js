import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import PopUp from "app/Components/PopUp/PopUp";
import ProductsTable from "./ProductsTable";
const OrdersRow = ({ order, index }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <TableRow onClick={() => handleOpen()} className={classes.tableRow}>
        <TableCell className={classes.tableCells} align="center">
          {index + 1}
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
          {order.orderNo}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.user.fullName}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.user.phoneNum}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {order.createdAt
            ? new Date(order.createdAt).toLocaleDateString()
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
