import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
const OrdersRow = ({ row, index }) => {
  const classes = useStyle();
  return (
    <TableRow>
      <TableCell className={classes.tableCells} align="center">
        {index + 1}
      </TableCell>
      {row.map((data, index) => (
        <TableCell key={index} className={classes.tableCells} align="center">
          {data}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default OrdersRow;
