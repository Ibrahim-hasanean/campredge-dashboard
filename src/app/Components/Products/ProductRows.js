import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import EditIcon from "@material-ui/icons/Edit";
import { Avatar, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const ProductRows = ({ product, products, setProducts, index }) => {
  const classes = useStyle();
  return (
    <>
      <TableRow className={classes.tableRow}>
        <TableCell className={classes.tableCells} align="center">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.name.ar || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.name?.en || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.info.ar}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.info.en}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.type.name?.ar || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          {product.type.name?.en || "_"}
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <Avatar
            src={product.image}
            className={classes.avatar}
            alt="صورة المنتج"
          />
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton>
            <EditIcon className={classes.editeIcon} />
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCells} align="center">
          <IconButton>
            <DeleteIcon color="secondary" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProductRows;
