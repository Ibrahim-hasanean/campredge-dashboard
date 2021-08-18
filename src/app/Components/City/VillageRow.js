import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyle from "./style";
import { IconButton } from "@material-ui/core";
import PopUp from "../PopUp/PopUp";
import DeleteVillage from "./DeleteVillage";
const VillageRow = ({ village, index, villages, city, cities, setCities }) => {
  const classes = useStyle();
  const [openDelete, setOpenDelete] = useState();

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <TableRow>
      <TableCell className={classes.tableCells} align="center">
        {index + 1}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {village.name.ar}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        {village.name.en}
      </TableCell>
      <TableCell className={classes.tableCells} align="center">
        <IconButton onClick={handleOpenDelete}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </TableCell>
      <PopUp
        maxWidth="lg"
        open={openDelete}
        handleClose={handleCloseDelete}
        title={`هل انت متاكد انك تريد حذف ${village.name.ar} من ${city.name.ar}`}
      >
        <DeleteVillage
          cities={cities}
          city={city}
          setCities={setCities}
          village={village}
          villages={villages}
          handleClose={handleCloseDelete}
        />
      </PopUp>
    </TableRow>
  );
};

export default VillageRow;
