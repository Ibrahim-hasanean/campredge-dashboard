import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import useStyle from "./style";

const ProductsRow = ({ product, index }) => {
  const classes = useStyle();

  return (
    <TableRow>
      <TableCell className={classes.tableCells} align="center">
        {index + 1}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {product.product.name.ar}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {product.product.info.ar}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {product.amount}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <Avatar
          alt="صورة المنتج"
          src={product.product.image}
          className={classes.avatar}
        />
        {/* <img src={product.product.image} alt="صورة المنتج" /> */}
      </TableCell>
    </TableRow>
  );
};

export default ProductsRow;
