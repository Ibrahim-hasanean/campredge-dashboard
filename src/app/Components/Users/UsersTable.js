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
import UsersRows from "./UsersRows";
import RTLProvider from "../RTLProvider";
const UsersTable = ({ getData, setPage, users, setUsers, page, pages }) => {
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
                اسم المستخدم
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
                رقم جوال المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                نشاط المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                هدف الدايت
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                تاريخ الميلاد
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                جنس المستخدم
              </TableCell>

              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                تعديل المستخدم
              </TableCell>
              <TableCell
                className={`${classes.tableCells} ${classes.tableHeader}`}
                align="center"
              >
                ايقاف/تنشيط المستخدم
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UsersRows
                users={users}
                setUsers={setUsers}
                key={index}
                user={user}
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

export default UsersTable;
