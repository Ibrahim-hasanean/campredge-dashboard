import React from "react";
import RTLProvider from "../RTLProvider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import { Pagination } from "@material-ui/lab";
import { Grid } from "@material-ui/core";
import useStyle from "./style";
import PackageRows from "./PackageRows";
const PackagesTable = ({ packages, setPackages }) => {
  const classes = useStyle();
  return (
    <RTLProvider>
      <Grid container item xs={12}>
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
                  مفعلة
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  عدد المنتجات المسموحة
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  السعر
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  سعر بعد الخصم
                </TableCell>
                <TableCell
                  className={`${classes.tableCells} ${classes.tableHeader}`}
                  align="center"
                >
                  الحد الاعلى للمنتجات المسموحة
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
              {packages.map((pack, index) => (
                <PackageRows
                  packages={packages}
                  setPackages={setPackages}
                  key={index}
                  pack={pack}
                  index={index}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </RTLProvider>
  );
};

export default PackagesTable;
