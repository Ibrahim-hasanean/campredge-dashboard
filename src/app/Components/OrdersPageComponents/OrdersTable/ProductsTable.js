import React from "react";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ProductsRow from "./ProductsRow";
import useStyle from "./style";
const ProductsTable = ({ products }) => {
  const classes = useStyle();
  return (
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
              اسم المنتج
            </TableCell>
            <TableCell
              className={`${classes.tableCells} ${classes.tableHeader}`}
              align="center"
            >
              وصف المنتج
            </TableCell>
            <TableCell
              className={`${classes.tableCells} ${classes.tableHeader}`}
              align="center"
            >
              الكمية
            </TableCell>
            <TableCell
              className={`${classes.tableCells} ${classes.tableHeader}`}
              align="center"
            >
              صورة المنتج
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <ProductsRow key={index} product={product} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
