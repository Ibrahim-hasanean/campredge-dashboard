import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
const SpeciliseUsersRows = ({ user, index }) => {
  const classes = useStyle();
  return (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCells} align="center">
        {index + 1}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {user.fullName || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {user.email || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {user.phoneNum || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {user.activityLevel || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {user.dietGoal || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {user.dob ? new Date(user.dob).toLocaleDateString() : "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {user.gender || "_"}
      </TableCell>
    </TableRow>
  );
};

export default SpeciliseUsersRows;
