import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SpeciliseUsersRows from "./SpeciliseUsersRows";
import useStyle from "./style";
import { Typography } from "@material-ui/core";

const SpecialistUsers = ({ users }) => {
  const classes = useStyle();
  return users.length === 0 ? (
    <Typography className={classes.message} variant="h6">
      لا يوجد مستخدمين يتبعون لهذا الاخصائي
    </Typography>
  ) : (
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
              البريد الالكتروني
            </TableCell>
            <TableCell
              className={`${classes.tableCells} ${classes.tableHeader}`}
              align="center"
            >
              رقم الجوال
            </TableCell>
            <TableCell
              className={`${classes.tableCells} ${classes.tableHeader}`}
              align="center"
            >
              النشاط
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
              الجنس
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <SpeciliseUsersRows user={user} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SpecialistUsers;
