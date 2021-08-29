import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import RTLProvider from "../RTLProvider";
import useStyle from "./style";
import ProductRows from "./ProductRows";
import { Pagination } from "@material-ui/lab";

const ProductTable = ({
  products,
  setProducts,
  page,
  setPage,
  pages,
  getData,
  packages,
  productsTypes
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
                اسم بالعربي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                اسم بالانجليزي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                الوصف بالعربي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                الوصف بالانجليزي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                نوع المنتج بالعربي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                نوع المنتج بالانجليزي
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                صورة المنتج
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
            {products.map((product, index) => (
              <ProductRows
                products={products}
                setProducts={setProducts}
                key={index}
                product={product}
                index={index}
                packages={packages}
                productsTypes={productsTypes}
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

export default ProductTable;
