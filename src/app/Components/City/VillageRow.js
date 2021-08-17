import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const VillageRow = ({ village }) => {
  return (
    <TableRow>
      <TableCell className={classes.tableCells} align="center">
        {index + 1}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {village.name}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {villages.length > 0 ? villages.join(",") : "_"}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <IconButton>
          <DeleteIcon color="secondary" />
        </IconButton>
      </TableCell>
      {/* <PopUp
        open={openDelete}
        handleClose={handleCloseDelete}
        title={`هل تريد بالتاكيد حذف المدينة ${city.name}`}
      >
        <DeleteCity
          handleClose={handleCloseDelete}
          city={city}
          cities={cities}
          setCities={setCities}
        />
      </PopUp> */}
    </TableRow>
  );
};

export default VillageRow;
