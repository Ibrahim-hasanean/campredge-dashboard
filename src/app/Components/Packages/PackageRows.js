import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useStyle from "./style";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const PackageRows = ({ pack, index }) => {
  const classes = useStyle();

  return (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCells} align="center">
        {index + 1}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.name?.ar || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.name?.en || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.description?.ar || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.description?.en || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.isActive ? "مفعلة" : "غير مفعلة"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.quantity || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.price || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.discount || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {pack.mostDuration || "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <IconButton>
          <EditIcon fontSize="inherit" className={classes.editeIcon} />
        </IconButton>
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <IconButton>
          <DeleteIcon fontSize="inherit" color="secondary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default PackageRows;
